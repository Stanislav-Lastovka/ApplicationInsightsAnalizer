import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { stringify } from "csv-stringify/sync";
import type { LogRecord } from "../domain/logRecord.js";

export type ExportFormat = "jsonl" | "json" | "csv";

export async function writeRecords(
  filePath: string,
  records: LogRecord[],
  format: ExportFormat
): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });

  if (format === "json") {
    await writeFile(filePath, `${JSON.stringify(records, null, 2)}\n`, "utf8");
    return;
  }

  if (format === "csv") {
    await writeFile(filePath, toCsv(records), "utf8");
    return;
  }

  const jsonl = records.map((record) => JSON.stringify(record)).join("\n");
  await writeFile(filePath, jsonl.length > 0 ? `${jsonl}\n` : "", "utf8");
}

function toCsv(records: LogRecord[]): string {
  return stringify(
    records.map((record) => ({
      timestamp: record.timestamp,
      table: record.table,
      operationId: record.operationId,
      roleName: record.roleName,
      severityLevel: record.severityLevel,
      type: record.type,
      problemId: record.problemId,
      name: record.name,
      resultCode: record.resultCode,
      durationMs: record.durationMs,
      message: record.message
    })),
    { header: true }
  );
}
