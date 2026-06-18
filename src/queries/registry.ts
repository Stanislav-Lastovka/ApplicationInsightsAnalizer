import type { BuiltInQuery } from "./builtInQueries.js";
import { queryPresets, type QueryPreset } from "./queryPresets.js";

export function listQueries(presetId: string): BuiltInQuery[] {
  return getQueries(undefined, presetId);
}

export function listQueryPresets(): QueryPreset[] {
  return queryPresets;
}

export function getQueries(ids: string[] | undefined, presetId: string): BuiltInQuery[] {
  const preset = getQueryPreset(presetId);
  ensurePresetHasQueries(preset);

  if (!ids || ids.length === 0) {
    return preset.queries;
  }

  const requested = new Set(ids);
  const queries = preset.queries.filter((query) => requested.has(query.id));
  const missing = ids.filter((id) => !queries.some((query) => query.id === id));

  if (missing.length > 0) {
    throw new Error(`Unknown query id(s) for preset '${preset.id}': ${missing.join(", ")}`);
  }

  return queries;
}

export function getQueryPreset(id: string): QueryPreset {
  if (!id) {
    throw new Error("Query preset id is required.");
  }

  const preset = queryPresets.find((item) => item.id === id);

  if (!preset) {
    throw new Error(`Unknown query preset: ${id}`);
  }

  return preset;
}

export function resolveQueries(options: { presetId?: string; queryIds?: string[] }): {
  preset: QueryPreset;
  queries: BuiltInQuery[];
} {
  const preset = getQueryPreset(options.presetId ?? "");

  return {
    preset,
    queries: getQueries(options.queryIds, preset.id)
  };
}

function ensurePresetHasQueries(preset: QueryPreset): void {
  if (preset.queries.length === 0) {
    throw new Error(`Query preset '${preset.id}' does not define any queries.`);
  }
}

export type RenderQueryOptions = {
  from: string;
  to: string;
};

export function renderQuery(kql: string, from: string, to: string): string {
  return renderQueryWithOptions(kql, { from, to });
}

export function renderQueryWithOptions(kql: string, options: RenderQueryOptions): string {
  return kql
    .replaceAll("{from}", options.from)
    .replaceAll("{to}", options.to);
}
