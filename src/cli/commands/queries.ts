import Table from "cli-table3";
import type { Command } from "commander";
import { listQueries } from "../../queries/registry.js";

export function registerQueriesCommand(program: Command): void {
  const command = program.command("queries").description("Inspect built-in KQL queries.");

  command
    .command("list")
    .description("List built-in KQL query ids.")
    .action(() => {
      const table = new Table({ head: ["ID", "Table", "Description"] });

      for (const query of listQueries()) {
        table.push([query.id, query.table, query.description]);
      }

      console.log(table.toString());
    });
}
