import { describe, expect, it } from "vitest";
import { analyzeRecords } from "./analyzer.js";
import type { LogRecord } from "../domain/logRecord.js";

describe("analyzeRecords", () => {
  it("summarizes failures and groups repeated problems", () => {
    const records: LogRecord[] = [
      {
        timestamp: "2026-06-15T10:00:00.000Z",
        table: "exceptions",
        problemId: "NullReference",
        operationId: "op-1",
        roleName: "api",
        message: "Object reference not set",
        raw: {}
      },
      {
        timestamp: "2026-06-15T10:05:00.000Z",
        table: "requests",
        operationId: "op-1",
        roleName: "api",
        name: "GET /orders",
        resultCode: "500",
        raw: {}
      }
    ];

    const result = analyzeRecords(records);

    expect(result.summary.total).toBe(2);
    expect(result.summary.exceptions).toBe(1);
    expect(result.summary.failedRequests).toBe(1);
    expect(result.topProblems[0]).toEqual({ key: "NullReference", count: 1 });
    expect(result.correlatedOperations[0]?.operationId).toBe("op-1");
  });
});
