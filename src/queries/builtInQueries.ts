export type BuiltInQuery = {
  id: string;
  table: "exceptions" | "traces" | "requests" | "dependencies";
  description: string;
  kql: string;
};

export const builtInQueries: BuiltInQuery[] = [
  {
    id: "errors",
    table: "exceptions",
    description: "Application exceptions with core correlation fields.",
    kql: `
AppExceptions
| where TimeGenerated between (datetime({from}) .. datetime({to}))
| extend PropertiesBag = todynamic(column_ifexists("Properties", dynamic({}))), CustomDimensionsBag = todynamic(column_ifexists("customDimensions", dynamic({})))
| where tostring(coalesce(PropertiesBag["AspNetCoreEnvironment"], CustomDimensionsBag["AspNetCoreEnvironment"])) == "Production"
| where tostring(column_ifexists("ResultCode", "")) !in ("401", "404")
| where tostring(column_ifexists("Url", "")) !contains "/api/v2/health"
{roleFilter}
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
| extend PropertiesBag = todynamic(column_ifexists("Properties", dynamic({}))), CustomDimensionsBag = todynamic(column_ifexists("customDimensions", dynamic({})))
| where tostring(coalesce(PropertiesBag["AspNetCoreEnvironment"], CustomDimensionsBag["AspNetCoreEnvironment"])) == "Production"
| where tostring(column_ifexists("ResultCode", "")) !in ("401", "404")
| where tostring(column_ifexists("Url", "")) !contains "/api/v2/health"
{roleFilter}
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
| extend PropertiesBag = todynamic(column_ifexists("Properties", dynamic({}))), CustomDimensionsBag = todynamic(column_ifexists("customDimensions", dynamic({})))
| where tostring(coalesce(PropertiesBag["AspNetCoreEnvironment"], CustomDimensionsBag["AspNetCoreEnvironment"])) == "Production"
{roleFilter}
| where Success == false or tostring(ResultCode) startswith "5"
| where tostring(ResultCode) !in ("401", "404")
| where tostring(Url) !contains "/api/v2/health"
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
| extend PropertiesBag = todynamic(column_ifexists("Properties", dynamic({}))), CustomDimensionsBag = todynamic(column_ifexists("customDimensions", dynamic({})))
| where tostring(coalesce(PropertiesBag["AspNetCoreEnvironment"], CustomDimensionsBag["AspNetCoreEnvironment"])) == "Production"
{roleFilter}
| where Success == false
| where tostring(ResultCode) !in ("401", "404")
| where tostring(Name) !contains "/api/v2/health" and tostring(Target) !contains "/api/v2/health"
| project TimeGenerated, Name, Target, Type, ResultCode, DurationMs, OperationId, AppRoleName, Success
| order by TimeGenerated desc
`.trim()
  }
];
