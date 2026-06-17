import { createReadStream } from "node:fs";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import readline from "node:readline";
import type { LogRecord } from "../domain/logRecord.js";

export async function readExportedRecords(inputPath: string): Promise<LogRecord[]> {
  const resolved = path.resolve(inputPath);
  const stats = await stat(resolved);

  if (stats.isDirectory()) {
    const files = await readdir(resolved);
    const records: LogRecord[] = [];

    for (const file of files.filter(isExportDataFile)) {
      records.push(...(await readExportedRecords(path.join(resolved, file))));
    }

    return records;
  }

  if (resolved.endsWith(".json")) {
    const parsed = JSON.parse(await readFile(resolved, "utf8")) as unknown;

    if (!Array.isArray(parsed)) {
      throw new Error(`Expected ${resolved} to contain an array of log records.`);
    }

    return parsed as LogRecord[];
  }

  if (!resolved.endsWith(".jsonl")) {
    throw new Error("Only .jsonl, .json, or directories containing these files can be analyzed.");
  }

  const records: LogRecord[] = [];
  const rl = readline.createInterface({
    input: createReadStream(resolved, { encoding: "utf8" }),
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (line.trim().length > 0) {
      records.push(JSON.parse(line) as LogRecord);
    }
  }

  return records;
}

function isExportDataFile(fileName: string): boolean {
  if (fileName === "manifest.json") {
    return false;
  }

  return fileName.endsWith(".jsonl") || fileName.endsWith(".json");
}
