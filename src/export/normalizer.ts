import type { LogsTable } from "@azure/monitor-query-logs";
import type { LogRecord, LogTable } from "../domain/logRecord.js";

export function normalizeRows(table: LogTable, logsTable: LogsTable): LogRecord[] {
  return rowsFromLogsTable(logsTable).map((row) => normalizeRecord(table, row));
}

function rowsFromLogsTable(table: LogsTable): Record<string, unknown>[] {
  return table.rows.map((row) => {
    const record: Record<string, unknown> = {};

    for (const [index, column] of table.columnDescriptors.entries()) {
      record[column.name] = row[index];
    }

    return record;
  });
}

export function normalizeRecord(table: LogTable, row: Record<string, unknown>): LogRecord {
  const message =
    stringValue(row.innermostMessage) ??
    stringValue(row.InnermostMessage) ??
    stringValue(row.outerMessage) ??
    stringValue(row.OuterMessage) ??
    stringValue(row.message) ??
    stringValue(row.Message) ??
    stringValue(row.target) ??
    stringValue(row.Target);

  return {
    timestamp: dateValue(row.timestamp) ?? dateValue(row.TimeGenerated) ?? new Date().toISOString(),
    table,
    operationId:
      stringValue(row.operation_Id) ??
      stringValue(row.OperationId) ??
      stringValue(row.correlationId) ??
      stringValue(row.CorrelationId),
    roleName: stringValue(row.cloud_RoleName) ?? stringValue(row.AppRoleName),
    severityLevel: numberValue(row.severityLevel) ?? numberValue(row.SeverityLevel),
    message,
    type: stringValue(row.type) ?? stringValue(row.Type),
    problemId: stringValue(row.problemId) ?? stringValue(row.ProblemId),
    name: stringValue(row.name) ?? stringValue(row.Name),
    url: stringValue(row.url) ?? stringValue(row.Url),
    resultCode: stringValue(row.resultCode) ?? stringValue(row.ResultCode),
    durationMs: durationToMs(row.duration) ?? durationToMs(row.DurationMs),
    success: booleanValue(row.success) ?? booleanValue(row.Success),
    raw: row
  };
}

function stringValue(value: unknown): string | undefined {
  if (value instanceof Date) {
    return value.toISOString();
  }

  if (typeof value === "string" && value.length > 0) {
    return value;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  return undefined;
}

function dateValue(value: unknown): string | undefined {
  if (value instanceof Date) {
    return value.toISOString();
  }

  return stringValue(value);
}

function numberValue(value: unknown): number | undefined {
  return typeof value === "number" ? value : undefined;
}

function booleanValue(value: unknown): boolean | undefined {
  return typeof value === "boolean" ? value : undefined;
}

function durationToMs(value: unknown): number | undefined {
  if (typeof value === "number") {
    return value;
  }

  if (typeof value !== "string") {
    return undefined;
  }

  const number = Number(value);
  return Number.isFinite(number) ? number : undefined;
}
