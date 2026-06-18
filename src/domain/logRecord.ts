export type LogTable = "exceptions" | "traces" | "requests" | "dependencies";

export type LogRecord = {
  timestamp: string;
  table: LogTable;
  operationId?: string;
  roleName?: string;
  severityLevel?: number;
  message?: string;
  type?: string;
  problemId?: string;
  name?: string;
  url?: string;
  resultCode?: string;
  durationMs?: number;
  success?: boolean;
  raw: Record<string, unknown>;
};

export type ExportManifest = {
  createdAt: string;
  workspaceId: string;
  from: string;
  to: string;
  presetId?: string;
  queries: string[];
  files: string[];
};
