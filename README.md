# Application Insights Logs CLI

Console TypeScript tool for exporting Azure Application Insights / Azure Monitor logs from a Log Analytics workspace and analyzing them locally.

The tool is intended for local use: it authenticates with Azure, exports selected built-in KQL query presets to files, then can build a console summary and a markdown report.

## Requirements

- Node.js 20 or newer
- Access to the Log Analytics workspace connected to Application Insights
- Azure CLI if you use the default `azureCli` authentication mode

## Install And Build

```bash
npm install
npm run build
```

During development you can run TypeScript directly:

```bash
npm run dev -- <command> [options]
```

After building, run the compiled CLI:

```bash
npm start -- <command> [options]
```

If installed globally or linked as a package, the binary name is:

```bash
logs-ai <command> [options]
```

## Authentication

The generated local config uses Azure CLI authentication by default:

```bash
az login
```

Supported auth modes in `logs-ai.config.json`:

| Mode | Description |
| --- | --- |
| `azureCli` | Uses the current `az login` session. Best default for local runs. |
| `deviceCode` | Prints a device login URL and one-time code. Useful when browser login is inconvenient. |
| `interactiveBrowser` | Opens an interactive browser login flow. |
| `default` | Uses Azure `DefaultAzureCredential`. Useful only when your environment is already configured for it. |

Optional auth fields:

| Field | Description |
| --- | --- |
| `tenantId` | Azure tenant id. Optional, but useful when you have access to multiple tenants. |
| `clientId` | Client id for credential flows that require it. Optional. |

## Configuration

Create a config file in the current directory:

```bash
npm run dev -- config init
```

Overwrite an existing config:

```bash
npm run dev -- config init --force
```

Example `logs-ai.config.json`:

```json
{
  "auth": {
    "mode": "azureCli",
    "tenantId": "optional-tenant-id"
  },
  "azure": {
    "workspaceId": "00000000-0000-0000-0000-000000000000"
  },
  "defaults": {
    "timezone": "UTC",
    "outputDir": "./exports",
    "format": "jsonl"
  },
  "profiles": {
    "prod": {
      "workspaceId": "00000000-0000-0000-0000-000000000000",
      "outputDir": "./exports/prod"
    }
  }
}
```

`workspaceId` is the Log Analytics workspace id that stores Application Insights tables such as `AppRequests`, `AppExceptions`, `AppTraces`, and `AppDependencies`.

By default, the CLI looks for config files in this order:

1. `logs-ai.config.json`
2. `logs-ai.config.ci.json`

You can pass a custom config path with the global `--config` option.

## Built-In Query Presets

Query presets define role-specific sets of built-in KQL queries.

List available built-in presets:

```bash
npm run dev -- queries presets
```

Current built-in presets:

| Preset id | Role filter | Queries |
| --- | --- | --- |
| `myaibou-connect-core-services-stream` | `myaibou-connect-core-services-stream` | `errors`, `errorTraces`, `failedRequests`, `failedDependencies` |
| `myaibou-connect-indexer` | `myaibou-connect-indexer` | `errors`, `errorTraces`, `failedRequests`, `failedDependencies` |

`--preset` is required for commands that read preset queries. The preset id is also used as the `AppRoleName` filter value inside the preset KQL, and `--queries` can narrow the selected preset to specific query ids.

## Built-In Queries

List built-in query ids for a preset:

```bash
npm run dev -- queries list --preset myaibou-connect-core-services-stream
```

Current queries in the `myaibou-connect-core-services-stream` preset:

| Query id | Table | Purpose |
| --- | --- | --- |
| `errors` | `AppExceptions` | Application exceptions with correlation fields. |
| `errorTraces` | `AppTraces` | Warning/error traces. |
| `failedRequests` | `AppRequests` | Failed HTTP requests and 5xx responses. |
| `failedDependencies` | `AppDependencies` | Failed external dependency calls. |

The `myaibou-connect-indexer` preset currently exposes the same query ids with `AppRoleName == "myaibou-connect-indexer"` and does not filter by `AspNetCoreEnvironment` or `/api/v2/health`.

The `myaibou-connect-core-services-stream` queries currently filter to `Production` using `AspNetCoreEnvironment` and ignore `/api/v2/health` endpoint records. Both presets ignore response codes `401` and `404`.

## Date Ranges

`--from` accepts either an absolute date or a relative duration.

Relative examples:

| Value | Meaning |
| --- | --- |
| `30m` | Last 30 minutes. |
| `24h` | Last 24 hours. |
| `7d` | Last 7 days. |

Absolute examples:

```bash
--from 2026-06-01T00:00:00Z --to 2026-06-17T00:00:00Z
--from 2026-06-01 --to 2026-06-17
```

If `--to` is omitted, the current time is used.

## Commands

All commands support the global option:

| Option | Description |
| --- | --- |
| `-c, --config <path>` | Path to config file. |

### `config init`

Creates `logs-ai.config.json` in the current directory.

```bash
npm run dev -- config init [options]
```

Options:

| Option | Description |
| --- | --- |
| `--force` | Overwrite an existing config file. |

Examples:

```bash
npm run dev -- config init
npm run dev -- config init --force
```

### `queries list`

Shows built-in KQL query ids for a preset.

```bash
npm run dev -- queries list --preset myaibou-connect-core-services-stream
```

Example:

```bash
npm run dev -- queries list --preset myaibou-connect-core-services-stream
```

### `queries presets`

Shows built-in query presets.

```bash
npm run dev -- queries presets
```

### `export`

Exports logs from Azure Monitor / Application Insights workspace tables.

```bash
npm run dev -- export --from <date-or-relative> [options]
```

Options:

| Option | Required | Description |
| --- | --- | --- |
| `--from <date-or-relative>` | Yes | Start date or relative duration, for example `24h`, `7d`, or `2026-06-01T00:00:00Z`. |
| `--to <date>` | No | End date. Defaults to now. |
| `--profile <name>` | No | Config profile to use. |
| `--workspace-id <id>` | No | Override Log Analytics workspace id from config. |
| `--preset <id>` | Yes | Built-in query preset id. |
| `--queries <ids>` | No | Comma-separated built-in query ids. Defaults to the selected preset queries. |
| `--out <dir>` | No | Output directory. Overrides config default/profile output directory. |
| `--format <format>` | No | Output format: `jsonl`, `json`, or `csv`. Defaults to `jsonl`. |

Output files:

- one file per selected query, for example `errors.jsonl` or `failedRequests.jsonl`
- `manifest.json` with export metadata

Examples:

```bash
npm run dev -- export --from 24h --preset myaibou-connect-core-services-stream --out ./exports/latest
```

```bash
npm run dev -- export --from 24h --preset myaibou-connect-core-services-stream --out ./exports/core-services-stream
```

```bash
npm run dev -- export --from 24h --preset myaibou-connect-indexer --out ./exports/indexer
```

```bash
npm run dev -- export --from 7d --to 2026-06-17T00:00:00Z --preset myaibou-connect-core-services-stream --queries errors,failedRequests,failedDependencies --out ./exports/prod-week
```

```bash
npm run dev -- export --from 24h --preset myaibou-connect-core-services-stream --profile prod --format json --out ./exports/prod-json
```

```bash
npm run dev -- --config ./logs-ai.config.json export --from 12h --preset myaibou-connect-core-services-stream --workspace-id 00000000-0000-0000-0000-000000000000
```

### `analyze`

Analyzes exported JSONL/JSON logs from a file or directory.

```bash
npm run dev -- analyze <input> [options]
```

Arguments:

| Argument | Description |
| --- | --- |
| `<input>` | Export file or directory. Usually an export directory such as `./exports/latest`. |

Options:

| Option | Description |
| --- | --- |
| `--report <path>` | Write a markdown report. |
| `--bucket-minutes <number>` | Timeline bucket size in minutes. Defaults to `15`. |
| `--limit <number>` | Top list size. Defaults to `10`. |

Examples:

```bash
npm run dev -- analyze ./exports/latest
```

```bash
npm run dev -- analyze ./exports/latest --report ./reports/latest.md
```

```bash
npm run dev -- analyze ./exports/latest --bucket-minutes 60 --limit 25 --report ./reports/hourly.md
```

```bash
npm run dev -- analyze ./exports/latest/errors.jsonl --limit 20
```

The markdown report contains:

- `Summary`
- `Top Failed Requests`
- grouped errors linked to failed requests
- `Unlinked Errors`, grouped by operation/correlation id and then by error type

### `run`

Exports logs and immediately analyzes the produced export directory.

```bash
npm run dev -- run --from <date-or-relative> [options]
```

Options:

| Option | Required | Description |
| --- | --- | --- |
| `--from <date-or-relative>` | Yes | Start date or relative duration. |
| `--to <date>` | No | End date. Defaults to now. |
| `--profile <name>` | No | Config profile to use. |
| `--workspace-id <id>` | No | Override Log Analytics workspace id from config. |
| `--preset <id>` | Yes | Built-in query preset id. |
| `--queries <ids>` | No | Comma-separated built-in query ids. Defaults to the selected preset queries. |
| `--out <dir>` | No | Output directory. |
| `--format <format>` | No | Output format: `jsonl`, `json`, or `csv`. Defaults to `jsonl`. |
| `--report <path>` | No | Write a markdown analysis report. |

Examples:

```bash
npm run dev -- run --from 24h --preset myaibou-connect-core-services-stream --out ./exports/latest --report ./reports/latest.md
```

```bash
npm run dev -- run --from 24h --preset myaibou-connect-core-services-stream --report ./reports/core-services-stream.md
```

```bash
npm run dev -- run --from 2026-06-01T00:00:00Z --to 2026-06-17T00:00:00Z --preset myaibou-connect-core-services-stream --format json --out ./exports/date-range --report ./reports/date-range.md
```

## Typical Workflows

Initialize local config, then export and analyze the last 24 hours:

```bash
npm run dev -- config init
az login
npm run dev -- run --from 24h --preset myaibou-connect-core-services-stream --out ./exports/latest --report ./reports/latest.md
```

Analyze an existing export again with a larger report limit:

```bash
npm run dev -- analyze ./exports/latest --limit 50 --report ./reports/latest.md
```

Export only request and exception data for the selected preset:

```bash
npm run dev -- export --from 48h --preset myaibou-connect-core-services-stream --queries errors,failedRequests --out ./exports/role-errors
```

Export CSV for external analysis in Excel or another tool:

```bash
npm run dev -- export --from 24h --preset myaibou-connect-core-services-stream --format csv --out ./exports/latest-csv
```

Use compiled JavaScript instead of `tsx`:

```bash
npm run build
npm start -- run --from 24h --preset myaibou-connect-core-services-stream --out ./exports/latest --report ./reports/latest.md
```

Use a custom config file:

```bash
npm run dev -- --config ./configs/prod.json run --from 24h --preset myaibou-connect-core-services-stream --report ./reports/prod-latest.md
```

## NPM Scripts

| Script | Description |
| --- | --- |
| `npm run dev -- <command>` | Run the CLI from TypeScript source with `tsx`. |
| `npm run build` | Compile TypeScript to `dist`. |
| `npm start -- <command>` | Run the compiled CLI from `dist`. |
| `npm test` | Run unit tests. |
| `npm run lint` | Run ESLint. |

## Troubleshooting

If export fails because the workspace id is missing, set `azure.workspaceId` in config or pass `--workspace-id`.

If authentication fails with `DefaultAzureCredential`, use the default local mode instead:

```json
{
  "auth": {
    "mode": "azureCli"
  }
}
```

Then run:

```bash
az login
```

If browser login is inconvenient, switch to device code authentication:

```json
{
  "auth": {
    "mode": "deviceCode"
  }
}
```
