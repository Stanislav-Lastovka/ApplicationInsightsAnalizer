#!/usr/bin/env node
import { Command } from "commander";
import { registerAnalyzeCommand } from "./commands/analyze.js";
import { registerConfigCommand } from "./commands/config.js";
import { registerExportCommand } from "./commands/export.js";
import { registerQueriesCommand } from "./commands/queries.js";
import { registerRunCommand } from "./commands/run.js";

const program = new Command();

program
  .name("logs-ai")
  .description("Export Azure Application Insights logs and analyze them locally.")
  .version("0.1.0");

program.option("-c, --config <path>", "Path to logs-ai config file.");

registerConfigCommand(program);
registerQueriesCommand(program);
registerExportCommand(program);
registerAnalyzeCommand(program);
registerRunCommand(program);

program.parseAsync().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Error: ${message}`);
  process.exitCode = 1;
});
