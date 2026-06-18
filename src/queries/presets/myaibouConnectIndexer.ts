import type { QueryPreset } from "../queryPresets.js";

const presetId = "myaibou-connect-indexer";

export const myaibouConnectIndexerPreset: QueryPreset = {
  id: presetId,
  description: "Production errors for myaibou connect indexer role.",
  queries: [
    {
      id: "errors",
      table: "exceptions",
      description: "Application exceptions with core correlation fields.",
      kql: `
AppExceptions
| where TimeGenerated between (datetime({from}) .. datetime({to}))
| where tostring(column_ifexists("ResultCode", "")) !in ("401", "404", "499")
| where AppRoleName == "${presetId}"
| project TimeGenerated, Type, ProblemId, OuterMessage, InnermostMessage, OperationId, AppRoleName, SeverityLevel, ItemCount
| order by TimeGenerated desc
`.trim()
    },
    {
      id: "errorTraces",
      table: "traces",
      description: "Trace rows with warning or error severity.",
      kql: `
AppTraces
| where TimeGenerated between (datetime({from}) .. datetime({to}))
| where tostring(column_ifexists("ResultCode", "")) !in ("401", "404", "499")
| where AppRoleName == "${presetId}"
| where SeverityLevel >= 3
| project TimeGenerated, Message, SeverityLevel, OperationId, AppRoleName, Properties
| order by TimeGenerated desc
`.trim()
    },
    {
      id: "failedRequests",
      table: "requests",
      description: "Failed HTTP requests and 5xx responses.",
      kql: `
AppRequests
| where TimeGenerated between (datetime({from}) .. datetime({to}))
| where AppRoleName == "${presetId}"
| where Success == false or tostring(ResultCode) startswith "5"
| where tostring(ResultCode) !in ("401", "404", "499")
| project TimeGenerated, Name, Url, ResultCode, DurationMs, OperationId, AppRoleName, Success
| order by TimeGenerated desc
`.trim()
    },
    {
      id: "failedDependencies",
      table: "dependencies",
      description: "Failed external dependency calls.",
      kql: `
AppDependencies
| where TimeGenerated between (datetime({from}) .. datetime({to}))
| where AppRoleName == "${presetId}"
| where Success == false
| where tostring(ResultCode) !in ("401", "404", "499")
| project TimeGenerated, Name, Target, Type, ResultCode, DurationMs, OperationId, AppRoleName, Success
| order by TimeGenerated desc
`.trim()
    }
  ]
};
