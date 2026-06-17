import type { Command } from "commander";
import { analyzeExport } from "./analyze.js";
import { exportLogs } from "./export.js";

type RunOptions = {
  config?: string;
  profile?: string;
  workspaceId?: string;
  from: string;
  to?: string;
  queries?: string;
  out?: string;
  format?: "jsonl" | "json" | "csv";
  role?: string;
  report?: string;
};

export function registerRunCommand(program: Command): void {
  program
    .command("run")
    .description("Export logs and immediately analyze them.")
    .requiredOption("--from <date-or-relative>", "Start date or relative duration, e.g. 24h, 7d.")
    .option("--to <date>", "End date. Defaults to now.")
    .option("--profile <name>", "Config profile to use.")
    .option("--workspace-id <id>", "Log Analytics workspace id.")
    .option("--role <name>", "Filter logs by Application Insights role name.")
    .option("--queries <ids>", "Comma-separated built-in query ids.")
    .option("--out <dir>", "Output directory.")
    .option("--format <format>", "Output format: jsonl, json, csv.", "jsonl")
    .option("--report <path>", "Write a markdown analysis report.")
    .action(async (options: RunOptions, command: Command) => {
      const globalOptions = command.parent?.opts<{ config?: string }>() ?? {};
      const outputDir = await exportLogs({ ...options, config: globalOptions.config });
      await analyzeExport(outputDir, { report: options.report });
    });
}
