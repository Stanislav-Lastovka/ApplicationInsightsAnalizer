import { createLogsClient } from "./logsClient.js";
import type { AuthConfig } from "./auth.js";
import type { BuiltInQuery } from "../queries/builtInQueries.js";
import { renderQueryWithOptions } from "../queries/registry.js";
import { normalizeRows } from "../export/normalizer.js";
import type { LogRecord } from "../domain/logRecord.js";

export type QueryRunnerOptions = {
  auth: AuthConfig;
  workspaceId: string;
  from: string;
  to: string;
};

export async function runWorkspaceQuery(
  query: BuiltInQuery,
  options: QueryRunnerOptions
): Promise<LogRecord[]> {
  const renderedKql = renderQueryWithOptions(query.kql, {
    from: options.from,
    to: options.to
  });
  const client = createLogsClient(options.auth);
  const result = await client.queryWorkspace(options.workspaceId, renderedKql, {
    startTime: new Date(options.from),
    endTime: new Date(options.to)
  });

  if (result.status !== "Success") {
    const details =
      "partialError" in result && result.partialError
        ? ` ${result.partialError.code}: ${result.partialError.message}`
        : "";
    throw new Error(`Azure query '${query.id}' failed with status '${result.status}'.${details}`);
  }

  const table = result.tables[0];
  return normalizeRows(query.table, table);
}
