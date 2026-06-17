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
  it("ignores health endpoint records during analysis", () => {
    const records: LogRecord[] = [
      {
        timestamp: "2026-06-15T10:00:00.000Z",
        table: "requests",
        operationId: "op-health",
        name: "GET /api/v2/health",
        url: "https://example.test/api/v2/health",
        resultCode: "503",
        raw: {}
      },
      {
        timestamp: "2026-06-15T10:01:00.000Z",
        table: "requests",
        operationId: "op-orders",
        name: "GET /orders",
        url: "https://example.test/orders",
        resultCode: "500",
        raw: {}
      }
    ];

    const result = analyzeRecords(records);

    expect(result.summary.total).toBe(1);
    expect(result.summary.failedRequests).toBe(1);
    expect(result.topFailedRequests).toEqual([{ key: "GET /orders (500)", count: 1 }]);
  });
  it("ignores configured HTTP result codes during analysis", () => {
    const records: LogRecord[] = [
      {
        timestamp: "2026-06-15T10:00:00.000Z",
        table: "requests",
        operationId: "op-canceled",
        name: "GET /orders",
        resultCode: "499",
        raw: {}
      },
      {
        timestamp: "2026-06-15T10:01:00.000Z",
        table: "dependencies",
        operationId: "op-dep",
        name: "POST /v1/responses",
        resultCode: "499",
        raw: {}
      },
      {
        timestamp: "2026-06-15T10:02:00.000Z",
        table: "requests",
        operationId: "op-failed",
        name: "GET /orders",
        resultCode: "500",
        raw: {}
      }
    ];

    const result = analyzeRecords(records);

    expect(result.summary.total).toBe(1);
    expect(result.summary.failedRequests).toBe(1);
    expect(result.summary.failedDependencies).toBe(0);
    expect(result.topFailedRequests).toEqual([{ key: "GET /orders (500)", count: 1 }]);
  });
});
