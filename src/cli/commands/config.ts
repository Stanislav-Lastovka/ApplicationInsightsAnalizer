import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import type { Command } from "commander";

export function registerConfigCommand(program: Command): void {
  const command = program.command("config").description("Manage CLI configuration.");

  command
    .command("init")
    .description("Create logs-ai.config.json in the current directory.")
    .option("--force", "Overwrite an existing config file.")
    .action(async (options: { force?: boolean }) => {
      const filePath = path.resolve("logs-ai.config.json");

      if (existsSync(filePath) && !options.force) {
        throw new Error("logs-ai.config.json already exists. Use --force to overwrite it.");
      }

      const config = {
        auth: {
          mode: "azureCli",
          tenantId: "optional-tenant-id"
        },
        azure: {
          workspaceId: "replace-with-log-analytics-workspace-id"
        },
        defaults: {
          timezone: "UTC",
          outputDir: "./exports",
          format: "jsonl",
          roleName: "optional-app-role-name"
        },
        profiles: {
          prod: {
            workspaceId: "replace-with-prod-log-analytics-workspace-id",
            outputDir: "./exports/prod"
          }
        }
      };

      await writeFile(filePath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
      console.log(`Created ${filePath}`);
    });
}
