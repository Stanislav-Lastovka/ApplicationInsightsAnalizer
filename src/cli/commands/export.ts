import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import type { Command } from "commander";
import { loadConfig, resolveOutputDir, resolveWorkspaceId } from "../../config/loadConfig.js";
import type { ExportManifest } from "../../domain/logRecord.js";
import { runWorkspaceQuery } from "../../azure/queryRunner.js";
import { resolveQueries } from "../../queries/registry.js";
import { parseDateRange } from "../../utils/dateRange.js";
import { writeRecords, type ExportFormat } from "../../export/writer.js";

type ExportOptions = {
  config?: string;
  profile?: string;
  workspaceId?: string;
  from: string;
  to?: string;
  preset: string;
  queries?: string;
  out?: string;
  format?: ExportFormat;
};

export function registerExportCommand(program: Command): void {
  program
    .command("export")
    .description("Export logs from Azure Monitor / Application Insights.")
    .requiredOption("--from <date-or-relative>", "Start date or relative duration, e.g. 24h, 7d.")
    .option("--to <date>", "End date. Defaults to now.")
    .option("--profile <name>", "Config profile to use.")
    .option("--workspace-id <id>", "Log Analytics workspace id.")
    .requiredOption("--preset <id>", "Built-in query preset id.")
    .option("--queries <ids>", "Comma-separated built-in query ids.")
    .option("--out <dir>", "Output directory.")
    .option("--format <format>", "Output format: jsonl, json, csv.", "jsonl")
    .action(async (options: ExportOptions, command: Command) => {
      const globalOptions = command.parent?.opts<{ config?: string }>() ?? {};
      await exportLogs({ ...options, config: globalOptions.config });
    });
}

export async function exportLogs(options: ExportOptions): Promise<string> {
  const config = await loadConfig(options.config);
  const workspaceId = resolveWorkspaceId(config, options.profile, options.workspaceId);
  const outputDir = path.resolve(resolveOutputDir(config, options.profile, options.out));
  const format = options.format ?? config.defaults.format;
  const dateRange = parseDateRange(options.from, options.to);
  const queryIds = options.queries?.split(",").map((item) => item.trim()).filter(Boolean);
  const { preset, queries } = resolveQueries({ presetId: options.preset, queryIds });
  const files: string[] = [];

  await mkdir(outputDir, { recursive: true });

  for (const query of queries) {
    console.log(`Running query '${query.id}'...`);
    const records = await runWorkspaceQuery(query, {
      auth: config.auth,
      workspaceId,
      from: dateRange.from,
      to: dateRange.to
    });
    const fileName = `${query.id}.${format}`;
    const filePath = path.join(outputDir, fileName);
    await writeRecords(filePath, records, format);
    files.push(fileName);
    console.log(`Wrote ${records.length} record(s) to ${filePath}`);
  }

  const manifest: ExportManifest = {
    createdAt: new Date().toISOString(),
    workspaceId,
    from: dateRange.from,
    to: dateRange.to,
    presetId: preset.id,
    queries: queries.map((query) => query.id),
    files
  };

  await writeFile(path.join(outputDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  console.log(`Wrote manifest to ${path.join(outputDir, "manifest.json")}`);

  return outputDir;
}
