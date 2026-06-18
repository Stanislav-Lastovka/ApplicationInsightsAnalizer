Summary
-----
- Total records: 15049
- Exceptions: 8110
- Error traces: 0
- Failed requests: 1305
- Failed dependencies: 5634
- From: 2026-06-03T09:42:18.588Z
- To: 2026-06-18T06:40:55.982Z

Top Failed Requests
-----
v1-actionProcessing (0) | Errors count: 4753 | First seen: 2026-06-04T00:04:10.951Z | Last seen: 2026-06-18T02:37:36.421Z
- grouped errors:
  - exceptions: myAibouQAIndexer.Exceptions.IntegrationException at myAibouQAIndexer.Integrations.ExtractinatorClient+<AnalyzeDocument>d__5.MoveNext - 1440 occurrence(s); sample: One or more errors occurred. (Extractinator API can not parse provided file. FileName: Super Users for US under PEA scope.pptx. Error: Error creating the analysis job. Error: Requests to the ContentAnalyzers_AnalyzeBinary Operation under Microsoft Azure Multimodal Intelligence 2025-11-01 have exc...; first seen: 2026-06-04T02:22:40.898Z; last seen: 2026-06-18T02:37:44.446Z
  - exceptions: Microsoft.Azure.WebJobs.Script.Workers.Rpc.RpcException at System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw - 1394 occurrence(s); sample: Exception while executing function: Functions.v1-actionProcessing; first seen: 2026-06-04T00:04:10.951Z; last seen: 2026-06-18T02:37:44.466Z
  - dependencies: Invoke (unknown) - 642 occurrence(s); sample: Invoke; first seen: 2026-06-04T00:04:10.951Z; last seen: 2026-06-18T02:37:37.324Z
  - exceptions: System.Net.Http.HttpRequestException at myAibouQAIndexer.integrations.clients.ServiceNow.ServiceNowClient+<GetTableItemAsync>d__4.MoveNext - 395 occurrence(s); sample: One or more errors occurred. (Can not get data from service now); first seen: 2026-06-04T02:15:10.278Z; last seen: 2026-06-18T02:13:50.063Z
  - dependencies: POST /api/AnalyzeDocument (429) - 360 occurrence(s); sample: myaibou-connect-extractionator.azurewebsites.net; first seen: 2026-06-04T02:22:40.898Z; last seen: 2026-06-18T02:37:43.644Z
  - exceptions: System.Threading.Tasks.TaskCanceledException at myAibouQAIndexer.Middlewares.LoggingMiddleware+<Invoke>d__1.MoveNext - 256 occurrence(s); sample: One or more errors occurred. (A task was canceled.); first seen: 2026-06-04T00:05:23.625Z; last seen: 2026-06-16T02:09:06.573Z
  - exceptions: Azure.RequestFailedException at Azure.Search.Documents.IndexesRestClient+<GetAsync>d__21.MoveNext - 160 occurrence(s); sample: One or more errors occurred. (SearchClientError: search client could not return successful response); first seen: 2026-06-04T14:23:19.678Z; last seen: 2026-06-15T15:29:18.103Z
  - dependencies: SearchIndexClient.GetIndex (unknown) - 40 occurrence(s); sample: SearchIndexClient.GetIndex; first seen: 2026-06-04T14:23:19.678Z; last seen: 2026-06-15T15:29:17.745Z
  - exceptions: System.Net.Sockets.SocketException at myAibouQAIndexer.Middlewares.LoggingMiddleware+<Invoke>d__1.MoveNext - 36 occurrence(s); sample: One or more errors occurred. (The operation was canceled.); first seen: 2026-06-04T02:15:13.034Z; last seen: 2026-06-18T02:08:15.107Z
  - exceptions: System.Threading.Tasks.TaskCanceledException at myAibouQAIndexer.integrations.clients.ServiceNow.ServiceNowClient+<GetTableItemAsync>d__4.MoveNext - 30 occurrence(s); sample: One or more errors occurred. (Can not get data from service now); first seen: 2026-06-14T02:30:25.478Z; last seen: 2026-06-14T04:59:10.197Z

v1-async-status (500) | Errors count: 8 | First seen: 2026-06-04T00:28:14.873Z | Last seen: 2026-06-14T00:17:52.614Z
- grouped errors: n/a

v2-upsert (500) | Errors count: 3 | First seen: 2026-06-10T16:13:40.181Z | Last seen: 2026-06-11T14:12:52.921Z
- grouped errors: n/a

Unlinked Errors
-----

| OperationId / CorrelationId | Errors count | First seen | Last seen |
| --- | ---: | --- | --- |
| 7e2bae06e1bc28323030fb4777e36c17 | 55 | 2026-06-08T19:31:32.149Z | 2026-06-08T19:50:06.627Z |
| 778b6a7ee448dd1c380fead85f650807 | 53 | 2026-06-09T14:43:48.443Z | 2026-06-09T14:56:55.000Z |
| df202b144af4528cbf9a9ebdbab507e9 | 45 | 2026-06-11T13:09:08.554Z | 2026-06-11T13:22:15.605Z |
| 8ff8b493e65198687aa016bdbc9666d6 | 44 | 2026-06-17T14:28:56.087Z | 2026-06-17T14:42:00.919Z |
| 137b98aa3a13a8b3d794949d2f3a574b | 43 | 2026-06-06T15:11:05.414Z | 2026-06-06T15:24:17.630Z |
| 51431f2763183d36aa8066c4abceda81 | 43 | 2026-06-15T10:24:53.540Z | 2026-06-15T10:38:01.926Z |
| 862ad48c50e3e58be222d682880bb229 | 12 | 2026-06-11T18:26:53.072Z | 2026-06-11T18:31:07.321Z |
| n/a | 8 | 2026-06-04T00:28:18.825Z | 2026-06-14T00:18:23.466Z |
| 0006b468a9dea638fc32e475863d1951 | 2 | 2026-06-10T00:37:54.724Z | 2026-06-10T00:37:56.450Z |
| 000a7e0bed710befc5fe5413d2c45057 | 2 | 2026-06-09T00:45:52.409Z | 2026-06-09T00:45:53.670Z |

### 7e2bae06e1bc28323030fb4777e36c17

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| dependencies | POST /openai/deployments/text-embedding-3-large/embeddings (429) | 55 | 2026-06-08T19:31:32.149Z | 2026-06-08T19:50:06.627Z | futurebot-uksouth.openai.azure.com |

### 778b6a7ee448dd1c380fead85f650807

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| dependencies | POST /openai/deployments/text-embedding-3-large/embeddings (429) | 53 | 2026-06-09T14:43:48.443Z | 2026-06-09T14:56:55.000Z | futurebot-uksouth.openai.azure.com |

### df202b144af4528cbf9a9ebdbab507e9

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| dependencies | POST /openai/deployments/text-embedding-3-large/embeddings (429) | 45 | 2026-06-11T13:09:08.554Z | 2026-06-11T13:22:15.605Z | futurebot-uksouth.openai.azure.com |

### 8ff8b493e65198687aa016bdbc9666d6

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| dependencies | POST /openai/deployments/text-embedding-3-large/embeddings (429) | 44 | 2026-06-17T14:28:56.087Z | 2026-06-17T14:42:00.919Z | futurebot-uksouth.openai.azure.com |

### 137b98aa3a13a8b3d794949d2f3a574b

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| dependencies | POST /openai/deployments/text-embedding-3-large/embeddings (429) | 43 | 2026-06-06T15:11:05.414Z | 2026-06-06T15:24:17.630Z | futurebot-uksouth.openai.azure.com |

### 51431f2763183d36aa8066c4abceda81

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| dependencies | POST /openai/deployments/text-embedding-3-large/embeddings (429) | 43 | 2026-06-15T10:24:53.540Z | 2026-06-15T10:38:01.926Z | futurebot-uksouth.openai.azure.com |

### 862ad48c50e3e58be222d682880bb229

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| dependencies | POST /openai/deployments/text-embedding-3-large/embeddings (429) | 12 | 2026-06-11T18:26:53.072Z | 2026-06-11T18:31:07.321Z | futurebot-uksouth.openai.azure.com |

### n/a

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| exceptions | System.Exception at Microsoft.Azure.WebJobs.Script.Workers.WorkerProcess.ThrowIfExitError | 6 | 2026-06-04T00:28:18.825Z | 2026-06-11T00:39:08.734Z | dotnet exited with code 137 (0x89) |
| exceptions | System.InvalidOperationException at Grpc.AspNetCore.Server.Internal.HttpContextStreamWriter`1+<WriteCoreAsync>d__11.MoveNext | 2 | 2026-06-06T01:01:43.758Z | 2026-06-14T00:18:23.466Z | Can't write the message because the request is complete. |

### 0006b468a9dea638fc32e475863d1951

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| exceptions | myAibouQAIndexer.Exceptions.FaultException at myAibouQAIndexer.Integrations.ExtractinatorClient+<AnalyzeDocument>d__5.MoveNext | 1 | 2026-06-10T00:37:56.450Z | 2026-06-10T00:37:56.450Z | Extractinator API can not parse provided file. FileName: pack-96e5494e2c4c3fe2aae8b0fef72798f9d5a1b789.pack. Error: Unable to process content understanding document. Content understanding analysis failed with error: InvalidRequest - Invalid Request. |
| dependencies | POST /api/AnalyzeDocument (500) | 1 | 2026-06-10T00:37:54.724Z | 2026-06-10T00:37:54.724Z | myaibou-connect-extractionator.azurewebsites.net |

### 000a7e0bed710befc5fe5413d2c45057

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| exceptions | myAibouQAIndexer.Exceptions.FaultException at myAibouQAIndexer.Integrations.ExtractinatorClient+<AnalyzeDocument>d__5.MoveNext | 1 | 2026-06-09T00:45:53.670Z | 2026-06-09T00:45:53.670Z | Extractinator API can not parse provided file. FileName: _Ninlaro_Treatment_icons5.png. Error: Unable to process content understanding document. Content understanding analysis failed with error: InvalidRequest - Invalid Request. |
| dependencies | POST /api/AnalyzeDocument (500) | 1 | 2026-06-09T00:45:52.409Z | 2026-06-09T00:45:52.409Z | myaibou-connect-extractionator.azurewebsites.net |

