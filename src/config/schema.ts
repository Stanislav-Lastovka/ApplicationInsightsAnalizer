import { z } from "zod";

export const appConfigSchema = z.object({
  auth: z
    .object({
      mode: z.enum(["default", "azureCli", "deviceCode", "interactiveBrowser"]).default("azureCli"),
      tenantId: z.string().min(1).optional(),
      clientId: z.string().min(1).optional()
    })
    .default({ mode: "azureCli" }),
  azure: z
    .object({
      workspaceId: z.string().min(1).optional()
    })
    .default({}),
  defaults: z
    .object({
      timezone: z.string().default("UTC"),
      outputDir: z.string().default("./exports"),
      format: z.enum(["jsonl", "json", "csv"]).default("jsonl"),
      roleName: z.string().min(1).optional()
    })
    .default({ timezone: "UTC", outputDir: "./exports", format: "jsonl" }),
  profiles: z
    .record(
      z.object({
        workspaceId: z.string().min(1).optional(),
        outputDir: z.string().optional()
      })
    )
    .default({})
});

export type AppConfig = z.infer<typeof appConfigSchema>;
