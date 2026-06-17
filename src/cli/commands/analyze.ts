import type { Command } from "commander";
import { analyzeRecords } from "../../analysis/analyzer.js";
import { readExportedRecords } from "../../export/reader.js";
import { printConsoleReport } from "../../reports/consoleReporter.js";
import { writeMarkdownReport } from "../../reports/markdownReporter.js";

type AnalyzeOptions = {
  report?: string;
  bucketMinutes?: string;
  limit?: string;
};

export function registerAnalyzeCommand(program: Command): void {
  program
    .command("analyze")
    .description("Analyze exported JSONL/JSON logs.")
    .argument("<input>", "Export file or directory.")
    .option("--report <path>", "Write a markdown report.")
    .option("--bucket-minutes <number>", "Timeline bucket size.", "15")
    .option("--limit <number>", "Top list size.", "10")
    .action(async (input: string, options: AnalyzeOptions) => {
      await analyzeExport(input, options);
    });
}

export async function analyzeExport(input: string, options: AnalyzeOptions = {}): Promise<void> {
  const records = await readExportedRecords(input);
  const result = analyzeRecords(records, {
    timelineBucketMinutes: Number(options.bucketMinutes ?? 15),
    limit: Number(options.limit ?? 10)
  });

  printConsoleReport(result);

  if (options.report) {
    await writeMarkdownReport(options.report, result);
    console.log(`\nWrote report to ${options.report}`);
  }
}
