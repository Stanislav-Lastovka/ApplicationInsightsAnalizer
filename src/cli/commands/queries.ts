import Table from "cli-table3";
import type { Command } from "commander";
import { listQueries, listQueryPresets } from "../../queries/registry.js";

export function registerQueriesCommand(program: Command): void {
  const command = program.command("queries").description("Inspect built-in KQL queries and presets.");

  command
    .command("list")
    .description("List built-in KQL query ids.")
    .requiredOption("--preset <id>", "Built-in query preset id.")
    .action((options: { preset: string }) => {
      const table = new Table({ head: ["ID", "Table", "Description"] });

      for (const query of listQueries(options.preset)) {
        table.push([query.id, query.table, query.description]);
      }

      console.log(table.toString());
    });

  command
    .command("presets")
    .description("List built-in query presets.")
    .action(() => {
      const table = new Table({ head: ["ID", "Role Filter", "Queries", "Description"] });

      for (const preset of listQueryPresets()) {
        table.push([preset.id, preset.id, preset.queries.map((query) => query.id).join(", "), preset.description]);
      }

      console.log(table.toString());
    });
}
