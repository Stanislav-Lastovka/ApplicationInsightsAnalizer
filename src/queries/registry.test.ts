import { describe, expect, it } from "vitest";
import { getQueryPreset, listQueryPresets, resolveQueries, renderQueryWithOptions } from "./registry.js";
import { queryPresets } from "./queryPresets.js";

describe("renderQueryWithOptions", () => {
  it("renders date placeholders", () => {
    const query = renderQueryWithOptions("AppRequests\n| where TimeGenerated between (datetime({from}) .. datetime({to}))", {
      from: "2026-06-15T00:00:00.000Z",
      to: "2026-06-16T00:00:00.000Z"
    });

    expect(query).toBe(
      "AppRequests\n| where TimeGenerated between (datetime(2026-06-15T00:00:00.000Z) .. datetime(2026-06-16T00:00:00.000Z))"
    );
  });
});

describe("query presets", () => {
  it("requires a preset id", () => {
    expect(() => resolveQueries({})).toThrow("Query preset id is required.");
  });

  it("resolves queries for the selected preset", () => {
    const { preset, queries } = resolveQueries({ presetId: "myaibou-connect-core-services-stream" });

    expect(preset?.id).toBe("myaibou-connect-core-services-stream");
    expect(preset?.queries).toBe(queries);
    expect(queries.map((query) => query.id)).toEqual([
      "errors",
      "errorTraces",
      "failedRequests",
      "failedDependencies"
    ]);
  });

  it("throws for an unknown preset", () => {
    expect(() => getQueryPreset("unknown-role")).toThrow("Unknown query preset: unknown-role");
  });

  it("lists the available role presets", () => {
    expect(listQueryPresets().map((preset) => preset.id)).toEqual([
      "myaibou-connect-core-services-stream",
      "myaibou-connect-indexer"
    ]);
  });

  it("uses the indexer preset id in indexer query role filters", () => {
    const { queries } = resolveQueries({ presetId: "myaibou-connect-indexer" });

    expect(queries[0]?.kql).toContain('| where AppRoleName == "myaibou-connect-indexer"');
  });

  it("does not filter indexer queries by AspNetCoreEnvironment", () => {
    const { queries } = resolveQueries({ presetId: "myaibou-connect-indexer" });

    expect(queries.every((query) => !query.kql.includes("AspNetCoreEnvironment"))).toBe(true);
  });

  it("does not filter indexer queries by the health endpoint", () => {
    const { queries } = resolveQueries({ presetId: "myaibou-connect-indexer" });

    expect(queries.every((query) => !query.kql.includes("/api/v2/health"))).toBe(true);
  });

  it("throws when the selected preset has no queries", () => {
    queryPresets.push({
      id: "empty-preset",
      description: "Empty preset for validation.",
      queries: []
    });

    try {
      expect(() => resolveQueries({ presetId: "empty-preset" })).toThrow(
        "Query preset 'empty-preset' does not define any queries."
      );
    } finally {
      queryPresets.pop();
    }
  });
});
