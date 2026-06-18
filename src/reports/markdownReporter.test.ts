import { describe, expect, it } from "vitest";
import type { AnalysisResult } from "../domain/analysisResult.js";
import { renderMarkdown } from "./markdownReporter.js";

describe("renderMarkdown", () => {
  it("renders sample messages as a nested list", () => {
    const result = createEmptyAnalysisResult();
    result.errorFocusedGroups = [
      {
        error: "IndexerFailure",
        count: 1,
        firstSeen: "2026-06-15T10:00:00.000Z",
        lastSeen: "2026-06-15T10:00:00.000Z",
        roles: [],
        operationIds: [],
        messages: ["Inner timeout", "Index batch failed"],
        relatedRequests: [],
        relatedDependencies: [],
        relatedTraces: []
      }
    ];

    const markdown = renderMarkdown(result);

    expect(markdown).toContain("- Sample messages:\n  - Inner timeout\n  - Index batch failed");
  });
});

function createEmptyAnalysisResult(): AnalysisResult {
  return {
    summary: {
      total: 0,
      exceptions: 0,
      traces: 0,
      failedRequests: 0,
      failedDependencies: 0
    },
    topProblems: [],
    topMessages: [],
    topRoles: [],
    topFailedRequests: [],
    topFailedDependencies: [],
    timeline: [],
    correlatedOperations: [],
    exceptionDetails: [],
    traceDetails: [],
    requestDetails: [],
    dependencyDetails: [],
    requestErrorCorrelations: [],
    unlinkedErrors: [],
    errorFocusedGroups: [],
    recommendations: []
  };
}
