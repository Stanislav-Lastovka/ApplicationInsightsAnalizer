# Application Insights Logs CLI

Console TypeScript tool for exporting Azure Application Insights / Azure Monitor logs and analyzing them locally.

## Quick start

```bash
npm install
npm run build
npm run dev -- config init
npm run dev -- queries list
```

Export logs:

```bash
npm run dev -- export --from 24h --queries errors,failedRequests,failedDependencies --out ./exports/latest
```

Filter by Application Insights role:

```bash
npm run dev -- export --from 24h --role my-api-role --out ./exports/latest
```

Analyze exported logs:

```bash
npm run dev -- analyze ./exports/latest --report ./reports/latest.md
```

Run both phases:

```bash
npm run dev -- run --from 24h --profile prod --report ./reports/prod-latest.md
```

For local use, the default generated config uses Azure CLI authentication:

```json
{
  "auth": {
    "mode": "azureCli"
  },
  "azure": {
    "workspaceId": "00000000-0000-0000-0000-000000000000"
  }
}
```

Run `az login` before exporting logs:

```bash
az login
```

If browser login is awkward, use `"deviceCode"` instead; the CLI prints a one-time code and URL.
