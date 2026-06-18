import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type {
  AnalysisResult,
  ErrorFocusedGroup,
  RequestDetailGroup,
  RequestErrorCorrelation,
  UnlinkedErrorGroup
} from "../domain/analysisResult.js";

export async function writeMarkdownReport(filePath: string, result: AnalysisResult): Promise<void> {
  await mkdir(path.dirname(path.resolve(filePath)), { recursive: true });
  await writeFile(filePath, renderMarkdown(result), "utf8");
}

export function renderMarkdown(result: AnalysisResult): string {
  const lines: string[] = [
    "Summary",
    "-----",
    `- Total records: ${result.summary.total}`,
    `- Exceptions: ${result.summary.exceptions}`,
    `- Error traces: ${result.summary.traces}`,
    `- Failed requests: ${result.summary.failedRequests}`,
    `- Failed dependencies: ${result.summary.failedDependencies}`,
    `- From: ${result.summary.from ?? "n/a"}`,
    `- To: ${result.summary.to ?? "n/a"}`,
    "",
    renderErrors(result.errorFocusedGroups),
    renderTopFailedRequests(result.requestDetails, result.requestErrorCorrelations),
    renderUnlinkedErrors(result.unlinkedErrors)
  ];

  return lines.join("\n");
}

function renderErrors(items: ErrorFocusedGroup[]): string {
  const lines = [
    "Errors",
    "-----",
    "",
    "| Error | Count | First seen | Last seen | Operations |",
    "| --- | ---: | --- | --- | ---: |"
  ];

  if (items.length === 0) {
    lines.push("| n/a | 0 | n/a | n/a | 0 |", "");
    return lines.join("\n");
  }

  for (const item of items) {
    lines.push(
      `| ${escapePipe(item.error)} | ${item.count} | ${item.firstSeen} | ${item.lastSeen} | ${item.operationIds.length} |`
    );
  }

  lines.push("");

  for (const item of items) {
    lines.push(`### ${escapeHeading(item.error)}`);
    lines.push("");
    lines.push(`- Count: ${item.count}`);
    lines.push(`- First seen: ${item.firstSeen}`);
    lines.push(`- Last seen: ${item.lastSeen}`);
    lines.push(`- Roles: ${formatList(item.roles)}`);
    lines.push(`- Operation IDs: ${formatList(item.operationIds)}`);
    lines.push("- Sample messages:");
    lines.push(...renderSampleMessages(item.messages));
    lines.push("");
    lines.push("Related requests:");
    lines.push(...renderRelatedRequests(item.relatedRequests));
    lines.push("");
    lines.push("Related dependencies:");
    lines.push(...renderRelatedDependencies(item.relatedDependencies));
    lines.push("");
    lines.push("Related traces:");
    lines.push(...renderRelatedTraces(item.relatedTraces));
    lines.push("");
  }

  return lines.join("\n");
}

function renderRelatedRequests(items: ErrorFocusedGroup["relatedRequests"]): string[] {
  if (items.length === 0) {
    return ["- n/a"];
  }

  return items.map(
    (item) =>
      `- ${escapePipe(stripResultCode(item.key))} (${escapePipe(item.resultCodes.join(", ") || "unknown")}) - ${
        item.count
      } occurrence(s), first: ${item.firstSeen}, last: ${item.lastSeen}, max duration: ${
        item.maxDurationMs ?? "n/a"
      }ms`
  );
}

function renderSampleMessages(messages: string[]): string[] {
  const visible = [...new Set(messages.map((message) => truncate(message, 500)))].slice(0, 5);

  if (visible.length === 0) {
    return ["  - n/a"];
  }

  return visible.map((message) => `  - ${escapePipe(message)}`);
}

function renderRelatedDependencies(items: ErrorFocusedGroup["relatedDependencies"]): string[] {
  if (items.length === 0) {
    return ["- n/a"];
  }

  return items.map(
    (item) =>
      `- ${escapePipe(stripResultCode(item.key))} (${escapePipe(item.resultCodes.join(", ") || "unknown")}) - ${
        item.count
      } occurrence(s), targets: ${formatList(item.targets, 3)}, max duration: ${item.maxDurationMs ?? "n/a"}ms`
  );
}

function renderRelatedTraces(items: ErrorFocusedGroup["relatedTraces"]): string[] {
  if (items.length === 0) {
    return ["- n/a"];
  }

  return items.map(
    (item) =>
      `- ${escapePipe(item.key)} - ${item.count} occurrence(s), sample: ${escapePipe(
        truncate(item.messages[0] ?? "n/a", 300)
      )}`
  );
}

function renderUnlinkedErrors(items: UnlinkedErrorGroup[]): string {
  const lines = [
    "Unlinked Errors",
    "-----",
    "",
    "| OperationId / CorrelationId | Errors count | First seen | Last seen |",
    "| --- | ---: | --- | --- |"
  ];

  if (items.length === 0) {
    lines.push("| n/a | 0 | n/a | n/a |", "");
    return lines.join("\n");
  }

  for (const item of items) {
    lines.push(`| ${escapePipe(item.operationId)} | ${item.count} | ${item.firstSeen} | ${item.lastSeen} |`);
  }

  lines.push("");

  for (const item of items) {
    lines.push(`### ${escapeHeading(item.operationId)}`);
    lines.push("");
    lines.push("| Error source | Error type | Count | First seen | Last seen | Sample error text |");
    lines.push("| --- | --- | ---: | --- | --- | --- |");

    if (item.errors.length === 0) {
      lines.push("| n/a | n/a | 0 | n/a | n/a | n/a |");
    } else {
      for (const error of item.errors) {
        lines.push(
          `| ${error.errorTable} | ${escapePipe(error.error)} | ${error.count} | ${error.firstSeen} | ${
            error.lastSeen
          } | ${escapePipe(truncate(error.messages[0] ?? "n/a", 500))} |`
        );
      }
    }

    lines.push("");
  }

  lines.push("");
  return lines.join("\n");
}

function renderTopFailedRequests(
  requests: RequestDetailGroup[],
  correlations: RequestErrorCorrelation[]
): string {
  const lines = [
    "Top Failed Requests",
    "-----"
  ];

  if (requests.length === 0) {
    lines.push("| n/a | n/a | 0 |", "");
    return lines.join("\n");
  }

  for (const request of requests) {
    const requestCorrelations = correlations.filter((item) => item.request === request.key);
    const errorsCount = requestCorrelations.reduce((sum, item) => sum + item.count, 0);
    const responseCodes = request.resultCodes.length > 0 ? request.resultCodes : extractResultCodes(request.key);

    lines.push(
      `${escapePipe(stripResultCode(request.key))} (${escapePipe(responseCodes.join(", ") || "unknown")}) | Errors count: ${
        errorsCount || request.count
      } | First seen: ${request.firstSeen} | Last seen: ${request.lastSeen}`
    );

    if (requestCorrelations.length === 0) {
      lines.push("- grouped errors: n/a");
    } else {
      lines.push("- grouped errors:");
      for (const error of requestCorrelations) {
        lines.push(
          `  - ${error.errorTable}: ${escapePipe(error.error)} - ${error.count} occurrence(s)${
            error.messages.length > 0 ? `; sample: ${escapePipe(truncate(error.messages[0], 300))}` : ""
          }; first seen: ${error.firstSeen}; last seen: ${error.lastSeen}`
        );
      }
    }

    lines.push("");
  }

  return lines.join("\n");
}

function escapePipe(value: string): string {
  return value.replaceAll("|", "\\|").replace(/\r?\n/g, "<br>");
}

function escapeHeading(value: string): string {
  return value.replace(/\r?\n/g, " ").replaceAll("#", "\\#");
}

function stripResultCode(value: string): string {
  return value.replace(/\s+\(([^()]*)\)$/, "");
}

function extractResultCodes(value: string): string[] {
  const match = /\s+\(([^()]*)\)$/.exec(value);
  return match ? [match[1]] : [];
}

function formatList(values: string[], limit = 10): string {
  if (values.length === 0) {
    return "n/a";
  }

  const visible = values.slice(0, limit).map(escapePipe);
  const remaining = values.length - visible.length;
  return remaining > 0 ? `${visible.join(", ")} (+${remaining} more)` : visible.join(", ");
}

function truncate(value: string, maxLength: number): string {
  return value.length > maxLength ? `${value.slice(0, maxLength - 3)}...` : value;
}
