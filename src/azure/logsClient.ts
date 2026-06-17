import { LogsQueryClient } from "@azure/monitor-query-logs";
import { createCredential, type AuthConfig } from "./auth.js";

export function createLogsClient(auth: AuthConfig): LogsQueryClient {
  return new LogsQueryClient(createCredential(auth));
}
