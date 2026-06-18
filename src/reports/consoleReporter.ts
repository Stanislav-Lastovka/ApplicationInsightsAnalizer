import Table from "cli-table3";
import type { AnalysisResult, CountItem } from "../domain/analysisResult.js";

export function printConsoleReport(result: AnalysisResult): void {
  console.log("\nSummary");
  const summary = new Table();
  summary.push(
    ["Total", result.summary.total],
    ["Exceptions", result.summary.exceptions],
    ["Error traces", result.summary.traces],
    ["Failed requests", result.summary.failedRequests],
    ["Failed dependencies", result.summary.failedDependencies],
    ["From", result.summary.from ?? "n/a"],
    ["To", result.summary.to ?? "n/a"]
  );
  console.log(summary.toString());

  printDetailTable(
    "Errors",
    result.errorFocusedGroups.map((item) => [
      item.error,
      item.count,
      item.firstSeen,
      item.lastSeen,
      item.operationIds.slice(0, 3).join("\n") || "n/a",
      item.messages.slice(0, 2).map((message) => truncate(message, 180)).join("\n") || "n/a"
    ]),
    ["Error", "Count", "First Seen", "Last Seen", "Operation IDs", "Messages"]
  );
  printCountTable("Top failed requests", result.topFailedRequests);
  printCountTable("Top failed dependencies", result.topFailedDependencies);

  console.log("\nRecommendations");
  for (const recommendation of result.recommendations) {
    console.log(`- ${recommendation}`);
  }
}

function truncate(value: string, maxLength: number): string {
  return value.length > maxLength ? `${value.slice(0, maxLength - 3)}...` : value;
}

function printDetailTable(title: string, rows: Array<Array<string | number>>, head: string[]): void {
  console.log(`\n${title}`);

  if (rows.length === 0) {
    console.log("No records.");
    return;
  }

  const table = new Table({ head });
  for (const row of rows) {
    table.push(row);
  }

  console.log(table.toString());
}

function printCountTable(title: string, items: CountItem[]): void {
  console.log(`\n${title}`);

  if (items.length === 0) {
    console.log("No records.");
    return;
  }

  const table = new Table({ head: ["Item", "Count"] });
  for (const item of items) {
    table.push([item.key, item.count]);
  }

  console.log(table.toString());
}
