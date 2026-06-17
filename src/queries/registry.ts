import { builtInQueries, type BuiltInQuery } from "./builtInQueries.js";

export function listQueries(): BuiltInQuery[] {
  return builtInQueries;
}

export function getQueries(ids?: string[]): BuiltInQuery[] {
  if (!ids || ids.length === 0) {
    return builtInQueries;
  }

  const requested = new Set(ids);
  const queries = builtInQueries.filter((query) => requested.has(query.id));
  const missing = ids.filter((id) => !queries.some((query) => query.id === id));

  if (missing.length > 0) {
    throw new Error(`Unknown query id(s): ${missing.join(", ")}`);
  }

  return queries;
}

export type RenderQueryOptions = {
  from: string;
  to: string;
  roleName?: string;
};

export function renderQuery(kql: string, from: string, to: string, roleName?: string): string {
  return renderQueryWithOptions(kql, { from, to, roleName });
}

export function renderQueryWithOptions(kql: string, options: RenderQueryOptions): string {
  return kql
    .replaceAll("{from}", options.from)
    .replaceAll("{to}", options.to)
    .replaceAll("{roleFilter}", renderRoleFilter(options.roleName));
}

function renderRoleFilter(roleName?: string): string {
  if (!roleName) {
    return "";
  }

  return `| where AppRoleName == "${escapeKqlString(roleName)}"`;
}

function escapeKqlString(value: string): string {
  return value.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
}
