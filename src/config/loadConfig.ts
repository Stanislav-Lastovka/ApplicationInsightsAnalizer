import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { appConfigSchema, type AppConfig } from "./schema.js";

const DEFAULT_CONFIG_FILES = ["logs-ai.config.json", "logs-ai.config.ci.json"];

export async function loadConfig(configPath?: string): Promise<AppConfig> {
  const resolvedPath = findConfigPath(configPath);

  if (!resolvedPath) {
    return appConfigSchema.parse({});
  }

  const contents = await readFile(resolvedPath, "utf8");
  return appConfigSchema.parse(JSON.parse(contents));
}

export function findConfigPath(configPath?: string): string | undefined {
  if (configPath) {
    const resolved = path.resolve(configPath);
    return existsSync(resolved) ? resolved : undefined;
  }

  for (const candidate of DEFAULT_CONFIG_FILES) {
    const resolved = path.resolve(candidate);
    if (existsSync(resolved)) {
      return resolved;
    }
  }

  return undefined;
}

export function resolveWorkspaceId(config: AppConfig, profile?: string, override?: string): string {
  const profileConfig = profile ? config.profiles[profile] : undefined;
  const workspaceId = override ?? profileConfig?.workspaceId ?? config.azure.workspaceId;

  if (!workspaceId) {
    throw new Error(
      "Log Analytics workspace id is required. Pass --workspace-id or set azure.workspaceId in logs-ai.config.json."
    );
  }

  return workspaceId;
}

export function resolveOutputDir(config: AppConfig, profile?: string, override?: string): string {
  const profileConfig = profile ? config.profiles[profile] : undefined;
  return override ?? profileConfig?.outputDir ?? config.defaults.outputDir;
}
