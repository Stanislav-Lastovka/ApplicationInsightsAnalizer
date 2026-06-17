import type {
  AnalysisResult,
  CountItem,
  DependencyDetailGroup,
  ErrorDetailGroup,
  OperationGroup,
  RequestErrorCorrelation,
  RequestDetailGroup,
  TimelineBucket,
  UnlinkedErrorGroup
} from "../domain/analysisResult.js";
import type { LogRecord } from "../domain/logRecord.js";

export type AnalyzerOptions = {
  timelineBucketMinutes?: number;
  limit?: number;
};

export function analyzeRecords(records: LogRecord[], options: AnalyzerOptions = {}): AnalysisResult {
  const limit = options.limit ?? 10;
  const filteredRecords = records.filter((record) => !isIgnoredRecord(record));

  return {
    summary: buildSummary(filteredRecords),
    topProblems: topCounts(filteredRecords, problemKey, limit),
    topMessages: topCounts(filteredRecords, (record) => record.message, limit),
    topRoles: topCounts(filteredRecords, (record) => record.roleName, limit),
    topFailedRequests: topCounts(
      filteredRecords.filter((record) => record.table === "requests"),
      (record) => requestKey(record),
      limit
    ),
    topFailedDependencies: topCounts(
      filteredRecords.filter((record) => record.table === "dependencies"),
      (record) => dependencyKey(record),
      limit
    ),
    timeline: buildTimeline(filteredRecords, options.timelineBucketMinutes ?? 15),
    correlatedOperations: buildCorrelatedOperations(filteredRecords, limit),
    exceptionDetails: buildErrorDetails(
      filteredRecords.filter((record) => record.table === "exceptions"),
      problemKey,
      limit
    ),
    traceDetails: buildErrorDetails(
      filteredRecords.filter((record) => record.table === "traces"),
      (record) => record.message,
      limit
    ),
    requestDetails: buildRequestDetails(
      filteredRecords.filter((record) => record.table === "requests"),
      limit
    ),
    dependencyDetails: buildDependencyDetails(
      filteredRecords.filter((record) => record.table === "dependencies"),
      limit
    ),
    requestErrorCorrelations: buildRequestErrorCorrelations(filteredRecords, limit),
    unlinkedErrors: buildUnlinkedErrors(filteredRecords, limit),
    recommendations: buildRecommendations(filteredRecords)
  };
}

function isIgnoredRecord(record: LogRecord): boolean {
  return hasIgnoredHealthEndpoint(record);
}

function hasIgnoredHealthEndpoint(record: LogRecord): boolean {
  const values = [
    record.name,
    record.url,
    stringValue(record.raw.Name),
    stringValue(record.raw.name),
    stringValue(record.raw.Url),
    stringValue(record.raw.url),
    stringValue(record.raw.Target),
    stringValue(record.raw.target)
  ];

  return values.some((value) => value?.toLowerCase().includes("/api/v2/health"));
}

function buildSummary(records: LogRecord[]): AnalysisResult["summary"] {
  const sorted = [...records].sort((a, b) => a.timestamp.localeCompare(b.timestamp));

  return {
    total: records.length,
    exceptions: records.filter((record) => record.table === "exceptions").length,
    traces: records.filter((record) => record.table === "traces").length,
    failedRequests: records.filter((record) => record.table === "requests").length,
    failedDependencies: records.filter((record) => record.table === "dependencies").length,
    from: sorted[0]?.timestamp,
    to: sorted.at(-1)?.timestamp
  };
}

function topCounts(
  records: LogRecord[],
  keySelector: (record: LogRecord) => string | undefined,
  limit: number
): CountItem[] {
  const counts = new Map<string, number>();

  for (const record of records) {
    const key = keySelector(record);

    if (!key) {
      continue;
    }

    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([key, count]) => ({ key, count }))
    .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key))
    .slice(0, limit);
}

function problemKey(record: LogRecord): string | undefined {
  return record.problemId ?? record.type ?? record.message;
}

function requestKey(record: LogRecord): string | undefined {
  const name = record.name ?? record.url;
  return name ? `${name} (${record.resultCode ?? "unknown"})` : undefined;
}

function dependencyKey(record: LogRecord): string | undefined {
  const name = record.name ?? record.raw.target;
  return typeof name === "string" ? `${name} (${record.resultCode ?? "unknown"})` : undefined;
}

function buildTimeline(records: LogRecord[], bucketMinutes: number): TimelineBucket[] {
  const bucketMs = bucketMinutes * 60 * 1000;
  const counts = new Map<string, number>();

  for (const record of records) {
    const time = new Date(record.timestamp).getTime();

    if (Number.isNaN(time)) {
      continue;
    }

    const bucket = new Date(Math.floor(time / bucketMs) * bucketMs).toISOString();
    counts.set(bucket, (counts.get(bucket) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([bucket, count]) => ({ bucket, count }))
    .sort((a, b) => a.bucket.localeCompare(b.bucket));
}

function buildCorrelatedOperations(records: LogRecord[], limit: number): OperationGroup[] {
  const groups = new Map<string, LogRecord[]>();

  for (const record of records) {
    if (!record.operationId) {
      continue;
    }

    const group = groups.get(record.operationId) ?? [];
    group.push(record);
    groups.set(record.operationId, group);
  }

  return [...groups.entries()]
    .map(([operationId, group]) => {
      const sorted = [...group].sort((a, b) => a.timestamp.localeCompare(b.timestamp));

      return {
        operationId,
        count: group.length,
        firstSeen: sorted[0]?.timestamp ?? "",
        lastSeen: sorted.at(-1)?.timestamp ?? "",
        roles: unique(group.map((record) => record.roleName).filter(isDefined)),
        messages: unique(group.map((record) => record.message).filter(isDefined)).slice(0, 5)
      };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

function buildErrorDetails(
  records: LogRecord[],
  keySelector: (record: LogRecord) => string | undefined,
  limit: number
): ErrorDetailGroup[] {
  return groupRecords(records, keySelector)
    .map(([key, group]) => {
      const sorted = sortByTimestamp(group);

      return {
        key,
        count: group.length,
        firstSeen: sorted[0]?.timestamp ?? "",
        lastSeen: sorted.at(-1)?.timestamp ?? "",
        roles: unique(group.map((record) => record.roleName).filter(isDefined)).slice(0, 5),
        operationIds: unique(group.map((record) => record.operationId).filter(isDefined)).slice(0, 5),
        messages: unique(group.map((record) => record.message).filter(isDefined)).slice(0, 5)
      };
    })
    .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key))
    .slice(0, limit);
}

function buildRequestDetails(records: LogRecord[], limit: number): RequestDetailGroup[] {
  return groupRecords(records, requestKey)
    .map(([key, group]) => {
      const sorted = sortByTimestamp(group);
      const durations = group.map((record) => record.durationMs).filter(isDefined);

      return {
        key,
        count: group.length,
        firstSeen: sorted[0]?.timestamp ?? "",
        lastSeen: sorted.at(-1)?.timestamp ?? "",
        resultCodes: unique(group.map((record) => record.resultCode).filter(isDefined)).slice(0, 8),
        roles: unique(group.map((record) => record.roleName).filter(isDefined)).slice(0, 5),
        operationIds: unique(group.map((record) => record.operationId).filter(isDefined)).slice(0, 5),
        urls: unique(group.map((record) => record.url).filter(isDefined)).slice(0, 5),
        averageDurationMs: average(durations),
        maxDurationMs: max(durations)
      };
    })
    .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key))
    .slice(0, limit);
}

function buildDependencyDetails(records: LogRecord[], limit: number): DependencyDetailGroup[] {
  return groupRecords(records, dependencyKey)
    .map(([key, group]) => {
      const sorted = sortByTimestamp(group);
      const durations = group.map((record) => record.durationMs).filter(isDefined);

      return {
        key,
        count: group.length,
        firstSeen: sorted[0]?.timestamp ?? "",
        lastSeen: sorted.at(-1)?.timestamp ?? "",
        resultCodes: unique(group.map((record) => record.resultCode).filter(isDefined)).slice(0, 8),
        roles: unique(group.map((record) => record.roleName).filter(isDefined)).slice(0, 5),
        operationIds: unique(group.map((record) => record.operationId).filter(isDefined)).slice(0, 5),
        targets: unique(group.map((record) => stringValue(record.raw.target ?? record.raw.Target)).filter(isDefined)).slice(0, 5),
        averageDurationMs: average(durations),
        maxDurationMs: max(durations)
      };
    })
    .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key))
    .slice(0, limit);
}

function buildRequestErrorCorrelations(records: LogRecord[], limit: number): RequestErrorCorrelation[] {
  const recordsByOperation = new Map<string, LogRecord[]>();

  for (const record of records) {
    if (!record.operationId) {
      continue;
    }

    const group = recordsByOperation.get(record.operationId) ?? [];
    group.push(record);
    recordsByOperation.set(record.operationId, group);
  }

  const correlations = new Map<
    string,
    {
      request: LogRecord;
      error: LogRecord;
      timestamps: string[];
      operations: string[];
      resultCodes: string[];
      messages: string[];
    }
  >();

  for (const group of recordsByOperation.values()) {
    const requests = group.filter((record) => record.table === "requests");
    const errors = group.filter(
      (record) => record.table === "exceptions" || record.table === "traces" || record.table === "dependencies"
    );

    for (const request of requests) {
      const requestName = requestKey(request);

      if (!requestName) {
        continue;
      }

      for (const error of errors) {
        const errorName = errorCorrelationKey(error);

        if (!errorName) {
          continue;
        }

        const key = `${requestName}\u0000${error.table}\u0000${errorName}`;
        const correlation = correlations.get(key) ?? {
          request,
          error,
          timestamps: [],
          operations: [],
          resultCodes: [],
          messages: []
        };
        correlation.timestamps.push(request.timestamp, error.timestamp);

        if (request.operationId) {
          correlation.operations.push(request.operationId);
        }

        if (request.resultCode) {
          correlation.resultCodes.push(request.resultCode);
        }

        if (error.message) {
          correlation.messages.push(error.message);
        }

        correlations.set(key, correlation);
      }
    }
  }

  return [...correlations.values()]
    .map((item) => {
      const sortedTimestamps = [...item.timestamps].sort((a, b) => a.localeCompare(b));

      return {
        request: requestKey(item.request) ?? "unknown",
        error: errorCorrelationKey(item.error) ?? "unknown",
        errorTable: item.error.table as RequestErrorCorrelation["errorTable"],
        count: item.operations.length,
        firstSeen: sortedTimestamps[0] ?? "",
        lastSeen: sortedTimestamps.at(-1) ?? "",
        resultCodes: unique(item.resultCodes).slice(0, 8),
        operationIds: unique(item.operations).slice(0, 5),
        messages: unique(item.messages).slice(0, 5)
      };
    })
    .sort((a, b) => b.count - a.count || a.request.localeCompare(b.request) || a.error.localeCompare(b.error))
    .slice(0, limit);
}

function buildUnlinkedErrors(records: LogRecord[], limit: number): UnlinkedErrorGroup[] {
  const requestOperationIds = new Set(
    records
      .filter((record) => record.table === "requests")
      .map((record) => record.operationId)
      .filter(isDefined)
  );
  const unlinked = records.filter(
    (record) =>
      (record.table === "exceptions" || record.table === "traces" || record.table === "dependencies") &&
      (!record.operationId || !requestOperationIds.has(record.operationId))
  );

  return groupRecords(unlinked, (record) => record.operationId ?? "n/a")
    .map(([operationId, group]) => {
      const sorted = sortByTimestamp(group);

      return {
        operationId,
        count: group.length,
        firstSeen: sorted[0]?.timestamp ?? "",
        lastSeen: sorted.at(-1)?.timestamp ?? "",
        errors: buildUnlinkedErrorTypeGroups(group)
      };
    })
    .sort((a, b) => b.count - a.count || a.operationId.localeCompare(b.operationId))
    .slice(0, limit);
}

function buildUnlinkedErrorTypeGroups(records: LogRecord[]): UnlinkedErrorGroup["errors"] {
  return groupRecords(records, errorCorrelationKey)
    .map(([error, group]) => {
      const sorted = sortByTimestamp(group);
      const table = group[0]?.table;

      return {
        error,
        errorTable: (table === "exceptions" || table === "traces" || table === "dependencies"
          ? table
          : "exceptions") as UnlinkedErrorGroup["errors"][number]["errorTable"],
        count: group.length,
        firstSeen: sorted[0]?.timestamp ?? "",
        lastSeen: sorted.at(-1)?.timestamp ?? "",
        messages: unique(group.map((record) => record.message).filter(isDefined)).slice(0, 3)
      };
    })
    .sort((a, b) => b.count - a.count || a.error.localeCompare(b.error))
    .slice(0, 5);
}

function errorCorrelationKey(record: LogRecord): string | undefined {
  if (record.table === "dependencies") {
    return dependencyKey(record);
  }

  return problemKey(record);
}

function buildRecommendations(records: LogRecord[]): string[] {
  const recommendations: string[] = [];
  const topProblem = topCounts(records, problemKey, 1)[0];
  const dependencyFailures = records.filter((record) => record.table === "dependencies").length;
  const requestFailures = records.filter((record) => record.table === "requests").length;

  if (topProblem && topProblem.count >= Math.max(3, records.length * 0.25)) {
    recommendations.push(`Investigate repeated problem '${topProblem.key}' (${topProblem.count} records).`);
  }

  if (dependencyFailures > 0) {
    recommendations.push(`Check failed dependencies first; ${dependencyFailures} dependency failure record(s) were found.`);
  }

  if (requestFailures > 0) {
    recommendations.push(`Review failed request endpoints; ${requestFailures} failed request record(s) were found.`);
  }

  if (records.some((record) => record.operationId)) {
    recommendations.push("Use correlated operation groups to reconstruct request chains around the failures.");
  }

  return recommendations.length > 0 ? recommendations : ["No strong automatic recommendation was detected."];
}

function unique(values: string[]): string[] {
  return [...new Set(values)];
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

function groupRecords(
  records: LogRecord[],
  keySelector: (record: LogRecord) => string | undefined
): Array<[string, LogRecord[]]> {
  const groups = new Map<string, LogRecord[]>();

  for (const record of records) {
    const key = keySelector(record);

    if (!key) {
      continue;
    }

    const group = groups.get(key) ?? [];
    group.push(record);
    groups.set(key, group);
  }

  return [...groups.entries()];
}

function sortByTimestamp(records: LogRecord[]): LogRecord[] {
  return [...records].sort((a, b) => a.timestamp.localeCompare(b.timestamp));
}

function average(values: number[]): number | undefined {
  if (values.length === 0) {
    return undefined;
  }

  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function max(values: number[]): number | undefined {
  return values.length > 0 ? Math.max(...values) : undefined;
}

function stringValue(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}
