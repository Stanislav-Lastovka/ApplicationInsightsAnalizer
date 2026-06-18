Summary
-----
- Total records: 8441
- Exceptions: 4600
- Error traces: 0
- Failed requests: 936
- Failed dependencies: 2905
- From: 2026-06-11T13:09:08.554Z
- To: 2026-06-18T10:03:06.289Z

Errors
-----

| Error | Count | First seen | Last seen | Operations |
| --- | ---: | --- | --- | ---: |
| myAibouQAIndexer.Exceptions.FaultException at myAibouQAIndexer.Integrations.ExtractinatorClient+<AnalyzeDocument>d__5.MoveNext | 1991 | 2026-06-11T13:57:17.513Z | 2026-06-18T10:03:06.289Z | 1991 |
| myAibouQAIndexer.Exceptions.IntegrationException at myAibouQAIndexer.Integrations.ExtractinatorClient+<AnalyzeDocument>d__5.MoveNext | 1112 | 2026-06-12T02:15:21.716Z | 2026-06-18T02:37:44.446Z | 278 |
| Microsoft.Azure.WebJobs.Script.Workers.Rpc.RpcException at System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw | 946 | 2026-06-12T00:08:56.285Z | 2026-06-18T02:37:44.466Z | 473 |
| System.Threading.Tasks.TaskCanceledException at myAibouQAIndexer.Middlewares.LoggingMiddleware+<Invoke>d__1.MoveNext | 168 | 2026-06-12T00:08:56.223Z | 2026-06-16T02:09:06.573Z | 84 |
| System.Net.Http.HttpRequestException at myAibouQAIndexer.integrations.clients.ServiceNow.ServiceNowClient+<GetTableItemAsync>d__4.MoveNext | 140 | 2026-06-12T02:15:54.356Z | 2026-06-18T02:13:50.063Z | 28 |
| Azure.RequestFailedException at Azure.Search.Documents.IndexesRestClient+<GetAsync>d__21.MoveNext | 100 | 2026-06-15T13:52:23.996Z | 2026-06-15T15:29:18.103Z | 25 |
| System.Net.Sockets.SocketException at myAibouQAIndexer.Middlewares.LoggingMiddleware+<Invoke>d__1.MoveNext | 32 | 2026-06-13T00:55:44.683Z | 2026-06-18T02:08:15.107Z | 16 |
| System.Threading.Tasks.TaskCanceledException at myAibouQAIndexer.integrations.clients.ServiceNow.ServiceNowClient+<GetTableItemAsync>d__4.MoveNext | 30 | 2026-06-14T02:30:27.918Z | 2026-06-14T04:59:10.197Z | 6 |
| System.Net.Sockets.SocketException at myAibouQAIndexer.integrations.clients.ServiceNow.ServiceNowClient+<GetTableItemAsync>d__4.MoveNext | 21 | 2026-06-14T02:30:27.492Z | 2026-06-14T03:58:24.668Z | 7 |
| System.Net.Sockets.SocketException at myAibouQAIndexer.integrations.clients.ServiceNow.ServiceNowClient+<DownloadAttachmentAsync>d__5.MoveNext | 18 | 2026-06-14T02:30:27.319Z | 2026-06-14T03:00:03.724Z | 6 |
| System.ObjectDisposedException at myAibouQAIndexer.integrations.clients.ServiceNow.ServiceNowClient+<DownloadAttachmentAsync>d__5.MoveNext | 15 | 2026-06-14T03:00:03.655Z | 2026-06-14T03:47:48.587Z | 3 |
| System.Net.Sockets.SocketException at myAibouQAIndexer.Integrations.SharepointClient+<GetSharepointFile>d__5.MoveNext | 9 | 2026-06-13T00:55:44.631Z | 2026-06-18T02:08:15.095Z | 3 |
| System.Net.Sockets.SocketException at myAibouQAIndexer.Integrations.ExtractinatorClient+<AnalyzeDocument>d__5.MoveNext | 8 | 2026-06-12T00:08:56.189Z | 2026-06-14T00:08:37.360Z | 4 |
| System.Threading.Tasks.TaskCanceledException at myAibouQAIndexer.Integrations.SharepointClient+<GetSharepointListItem>d__6.MoveNext | 5 | 2026-06-14T02:30:28.018Z | 2026-06-14T02:30:28.478Z | 1 |
| System.InvalidOperationException at myAibouQAIndexer.Helpers.PythonChunkingRunner+<SplitTextAsync>d__2.MoveNext | 4 | 2026-06-13T00:05:25.776Z | 2026-06-13T00:05:26.066Z | 1 |
| System.InvalidOperationException at Grpc.AspNetCore.Server.Internal.HttpContextStreamWriter`1+<WriteCoreAsync>d__11.MoveNext | 1 | 2026-06-14T00:18:23.466Z | 2026-06-14T00:18:23.466Z | 0 |

### myAibouQAIndexer.Exceptions.FaultException at myAibouQAIndexer.Integrations.ExtractinatorClient+<AnalyzeDocument>d__5.MoveNext

- Count: 1991
- First seen: 2026-06-11T13:57:17.513Z
- Last seen: 2026-06-18T10:03:06.289Z
- Roles: myaibou-connect-indexer
- Operation IDs: 86ec4b595f013bff6f34d8e5df586855, e510ee859c4beb4d2a511aa535b4210f, af0c27ec901ce1732ba5ac2f7369546c, 8ec8ee8a1dd205f5e68284d646103324, 942d56dfafa3451055763864a9428073, 5be46af8541a48e3f60af4848726d215, 074822049f1e8e6b9ecf43c7bf3f8419, cc5de32366810acb6075a63b24ef3249, 71b0b8553281ce84133a9c6b858a4c5d, c6525306b6c80ee5a6011b65e8434b23 (+1981 more)
- Sample messages:
  - Extractinator API can not parse provided file. FileName: 09.2024 ERP_Ariba-P2P_Core_ILT_AB_Ariba-Buying_v12.0_EN.pdf. Error: Error creating the analysis job. Error: Invalid request. : The input file has 341 pages, which exceeds the maximum allowed page count of 300.
  - Extractinator API can not parse provided file. FileName: 8 Coaching and Capability Training Session Teams.pptx. Error: Unable to process content understanding document. Content understanding analysis failed with error: InvalidRequest - Invalid Request.
  - Extractinator API can not parse provided file. FileName: Skills Matrix and Training Plan - CIRCULATION.xlsx. Error: Unable to process spreadsheet. File does not appear to be a valid Excel or CSV file.
  - Extractinator API can not parse provided file. FileName: 7 Forecasting and planning - Team.pptx. Error: Unable to process content understanding document. Content understanding analysis failed with error: InvalidRequest - Invalid Request.
  - Extractinator API can not parse provided file. FileName: 9 Celebrating Success Training Session Teams.pptx. Error: Unable to process content understanding document. Content understanding analysis failed with error: InvalidRequest - Invalid Request.

Related requests:
- n/a

Related dependencies:
- POST /api/AnalyzeDocument (500) - 1583 occurrence(s), targets: myaibou-connect-extractionator.azurewebsites.net, max duration: 19521.1644ms
- POST /api/AnalyzeDocument (400) - 396 occurrence(s), targets: myaibou-connect-extractionator.azurewebsites.net, max duration: 9765.0633ms
- POST /api/AnalyzeDocument (504) - 10 occurrence(s), targets: myaibou-connect-extractionator.azurewebsites.net, max duration: 64678.4339ms
- POST /api/AnalyzeDocument (502) - 2 occurrence(s), targets: myaibou-connect-extractionator.azurewebsites.net, max duration: 11789.1087ms

Related traces:
- n/a

### myAibouQAIndexer.Exceptions.IntegrationException at myAibouQAIndexer.Integrations.ExtractinatorClient+<AnalyzeDocument>d__5.MoveNext

- Count: 1112
- First seen: 2026-06-12T02:15:21.716Z
- Last seen: 2026-06-18T02:37:44.446Z
- Roles: myaibou-connect-indexer
- Operation IDs: 1a7ed9d6881d348abeb4d23469dda63d, 1e28eba238d2fcd092b0080c44d6433a, cd2543e8d68ebe19e93d612eccb79744, c93c4719d723f41239be30e75e395b39, 6a8423193b1fe34f9bdea7d5e5fa8f6f, 20aa03d144827241904d9895a903ca48, 39937485a29a62dc8b14a8ed611a12e6, 394101836dedd59d55f53ecc320be539, d11325cd9381c8b65fb9e822a371a5d8, ef3cc7e4cd3f695bb03b2227eedef680 (+268 more)
- Sample messages:
  - One or more errors occurred. (Extractinator API can not parse provided file. FileName: Super Users for US under PEA scope.pptx. Error: Error creating the analysis job. Error: Requests to the ContentAnalyzers_AnalyzeBinary Operation under Microsoft Azure Multimodal Intelligence 2025-11-01 have exceeded call rate limit of your current AIServices S0 pricing tier. Please retry after 1 second. Please contact Azure support service if you would like to further increase the default rate limit.)
  - Extractinator API can not parse provided file. FileName: Super Users for US under PEA scope.pptx. Error: Error creating the analysis job. Error: Requests to the ContentAnalyzers_AnalyzeBinary Operation under Microsoft Azure Multimodal Intelligence 2025-11-01 have exceeded call rate limit of your current AIServices S0 pricing tier. Please retry after 1 second. Please contact Azure support service if you would like to further increase the default rate limit.
  - One or more errors occurred. (Extractinator API can not parse provided file. FileName: HRDP-Prod-PRH.png. Error: Error creating the analysis job. Error: Requests to the ContentAnalyzers_AnalyzeBinary Operation under Microsoft Azure Multimodal Intelligence 2025-11-01 have exceeded call rate limit of your current AIServices S0 pricing tier. Please retry after 1 second. Please contact Azure support service if you would like to further increase the default rate limit.)
  - Extractinator API can not parse provided file. FileName: HRDP-Prod-PRH.png. Error: Error creating the analysis job. Error: Requests to the ContentAnalyzers_AnalyzeBinary Operation under Microsoft Azure Multimodal Intelligence 2025-11-01 have exceeded call rate limit of your current AIServices S0 pricing tier. Please retry after 1 second. Please contact Azure support service if you would like to further increase the default rate limit.
  - One or more errors occurred. (Extractinator API can not parse provided file. FileName: Intune Enrollment iOS_DE(DE).docx. Error: Error creating the analysis job. Error: Requests to the ContentAnalyzers_AnalyzeBinary Operation under Microsoft Azure Multimodal Intelligence 2025-11-01 have exceeded call rate limit of your current AIServices S0 pricing tier. Please retry after 1 second. Please contact Azure support service if you would like to further increase the default rate limit.)

Related requests:
- v1-actionProcessing (0) - 278 occurrence(s), first: 2026-06-12T02:15:01.623Z, last: 2026-06-18T02:37:36.421Z, max duration: 21101.5592ms

Related dependencies:
- Invoke (unknown) - 278 occurrence(s), targets: Invoke, max duration: 19429.3155ms
- POST /api/AnalyzeDocument (429) - 278 occurrence(s), targets: myaibou-connect-extractionator.azurewebsites.net, max duration: 9911.5737ms

Related traces:
- n/a

### Microsoft.Azure.WebJobs.Script.Workers.Rpc.RpcException at System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw

- Count: 946
- First seen: 2026-06-12T00:08:56.285Z
- Last seen: 2026-06-18T02:37:44.466Z
- Roles: myaibou-connect-indexer
- Operation IDs: 1a7ed9d6881d348abeb4d23469dda63d, 1e28eba238d2fcd092b0080c44d6433a, cb39e8396257af1da1952a9802f5d722, 6a8423193b1fe34f9bdea7d5e5fa8f6f, cd2543e8d68ebe19e93d612eccb79744, c93c4719d723f41239be30e75e395b39, 39937485a29a62dc8b14a8ed611a12e6, 394101836dedd59d55f53ecc320be539, 20aa03d144827241904d9895a903ca48, b633be9da8b53ff886a156c684b66d69 (+463 more)
- Sample messages:
  - Exception while executing function: Functions.v1-actionProcessing

Related requests:
- v1-actionProcessing (0) - 473 occurrence(s), first: 2026-06-12T00:06:25.742Z, last: 2026-06-18T02:37:36.421Z, max duration: 1990190.3258ms

Related dependencies:
- Invoke (unknown) - 421 occurrence(s), targets: Invoke, max duration: 155964.3772ms
- POST /api/AnalyzeDocument (429) - 266 occurrence(s), targets: myaibou-connect-extractionator.azurewebsites.net, max duration: 9911.5737ms
- SearchIndexClient.GetIndex (unknown) - 25 occurrence(s), targets: SearchIndexClient.GetIndex, max duration: 451.8517ms
- POST /api/AnalyzeDocument (Canceled) - 4 occurrence(s), targets: myaibou-connect-extractionator.azurewebsites.net, max duration: 150004.9594ms
- GET /servicenow/now/attachment/0805895033132ed8fc3ca0d91e5c7b45/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 229.4347ms
- GET /servicenow/now/attachment/1ff4855033132ed8fc3ca0d91e5c7b2c/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 166.0506ms
- GET /servicenow/now/attachment/2bf4855033132ed8fc3ca0d91e5c7bfe/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 91.6865ms
- GET /servicenow/now/attachment/33f4095033132ed8fc3ca0d91e5c7bd2/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 118.1314ms
- GET /servicenow/now/attachment/3bf4095033132ed8fc3ca0d91e5c7b2e/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 81.313ms
- GET /servicenow/now/attachment/572203ff33917ad04b1679223d5c7bdb/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 42.9303ms

Related traces:
- n/a

### System.Threading.Tasks.TaskCanceledException at myAibouQAIndexer.Middlewares.LoggingMiddleware+<Invoke>d__1.MoveNext

- Count: 168
- First seen: 2026-06-12T00:08:56.223Z
- Last seen: 2026-06-16T02:09:06.573Z
- Roles: myaibou-connect-indexer
- Operation IDs: fd10e5fc1f779965f25160abbcc8bdec, 3dbe06dd4f40de7491c9627f2963d302, 1476e3a7ca8086fa995fe8e7134984be, abf0e3d022faddd2c0c33926ee78fc5e, 68bfe252a493b84d7fba26ce4df2207e, 1916c1ab767b8e281bd6d4b7e94bd4de, 9c294f4b3ce09a03a7e40d54b5e6095b, edd534744a0f676a54e1af01ff94bbcd, 5be4d0997a308718c8f93359d0d24e82, 6a5f87d5f8a631d9ca2db7baa8235006 (+74 more)
- Sample messages:
  - One or more errors occurred. (A task was canceled.)

Related requests:
- v1-actionProcessing (0) - 84 occurrence(s), first: 2026-06-12T00:06:25.742Z, last: 2026-06-16T02:08:39.135Z, max duration: 156044.4001ms

Related dependencies:
- Invoke (unknown) - 84 occurrence(s), targets: Invoke, max duration: 155964.3772ms
- POST /api/AnalyzeDocument (Canceled) - 4 occurrence(s), targets: myaibou-connect-extractionator.azurewebsites.net, max duration: 150004.9594ms
- POST /v1/embeddings (Canceled) - 1 occurrence(s), targets: api.openai.com, max duration: 588.5744ms

Related traces:
- n/a

### System.Net.Http.HttpRequestException at myAibouQAIndexer.integrations.clients.ServiceNow.ServiceNowClient+<GetTableItemAsync>d__4.MoveNext

- Count: 140
- First seen: 2026-06-12T02:15:54.356Z
- Last seen: 2026-06-18T02:13:50.063Z
- Roles: myaibou-connect-indexer
- Operation IDs: b633be9da8b53ff886a156c684b66d69, b581d34de46548dae097a95a82e6d9be, 7d07d6dc08048973abc0ee72c4f12e18, 6fa884f260e3d0fa3a7d2171f3902d3b, ed33aa12768a3c435ffc2cf54ed99b91, 50073ae90f2b7ee831b39c1e1589a2e8, d0ef2837c2be1b34c0bae1b9871c7788, f8d951d72851083009993859147a813b, 508d6e7dbd0fbc5ffbc1f77ff24ed47d, 04a5aa97629814ee00a16ef25020d2ce (+18 more)
- Sample messages:
  - One or more errors occurred. (Can not get data from service now)
  - Can not get data from service now
  - {"error":{"message":"No Record found","detail":"Record doesn't exist or ACL restricts the record retrieval"},"status":"failure"}

Related requests:
- v1-actionProcessing (0) - 28 occurrence(s), first: 2026-06-12T02:15:53.847Z, last: 2026-06-18T02:13:48.553Z, max duration: 7464.4856ms

Related dependencies:
- Invoke (unknown) - 28 occurrence(s), targets: Invoke, max duration: 5537.9551ms

Related traces:
- n/a

### Azure.RequestFailedException at Azure.Search.Documents.IndexesRestClient+<GetAsync>d__21.MoveNext

- Count: 100
- First seen: 2026-06-15T13:52:23.996Z
- Last seen: 2026-06-15T15:29:18.103Z
- Roles: myaibou-connect-indexer
- Operation IDs: 9b8c796ad38ba53bc4ebbaa122ddd217, 63c6e49e83baf89d214e25cf379ada1a, add30f375d0b83572d4a3e3a28445daf, 7ad08eaca254a484ae62d0048b40cc46, 99979c38d1483bbcfa7ed4ec113c82d8, 087dfc8dd12b47515530f5ee5b31abb4, 7aa131d4e62ba3088d43d75996d3d53e, d636e707d5815232d7698f19da5911cd, 297b5dd27a913a6f28aaa7947dc3978c, 001d094d22655b074cae834ce9b3fe3d (+15 more)
- Sample messages:
  - One or more errors occurred. (SearchClientError: search client could not return successful response)
  - SearchClientError: search client could not return successful response

Related requests:
- v1-actionProcessing (0) - 25 occurrence(s), first: 2026-06-15T13:52:20.215Z, last: 2026-06-15T15:29:17.546Z, max duration: 4707.6007ms

Related dependencies:
- Invoke (unknown) - 25 occurrence(s), targets: Invoke, max duration: 4635.3209ms
- SearchIndexClient.GetIndex (unknown) - 25 occurrence(s), targets: SearchIndexClient.GetIndex, max duration: 451.8517ms

Related traces:
- n/a

### System.Net.Sockets.SocketException at myAibouQAIndexer.Middlewares.LoggingMiddleware+<Invoke>d__1.MoveNext

- Count: 32
- First seen: 2026-06-13T00:55:44.683Z
- Last seen: 2026-06-18T02:08:15.107Z
- Roles: myaibou-connect-indexer
- Operation IDs: 68e1f318dd40c1663d1f6f52186ce2a8, 134af4840fcf856bfea797e9dc6cf144, 77210a5b7fbc20543671c990ee937181, f76e7f79cccd637c6a1300dc30c19528, d02eb0695c6e3ea3112dea546dabb63a, 550ad8fb4d0dc29ecf17cde02f3b5a04, ac943ad1b204437c4d5cb748e25e7f7e, 55a61c0d083cb907152b2b46dd654110, 1012b4dbfb5b05ea27de2659b7b9f012, 80c31a1fa7890fa9c16da1603bb395d7 (+6 more)
- Sample messages:
  - One or more errors occurred. (The operation was canceled.)
  - One or more errors occurred. (Could not find SharePoint file to download at https://graph.microsoft.com/v1.0/sites/mytakeda.sharepoint.com:/sites/GlobalTravel:/lists/Documents/items/41/driveItem)
  - One or more errors occurred. (Can not get data from service now)

Related requests:
- v1-actionProcessing (0) - 16 occurrence(s), first: 2026-06-13T00:55:44.114Z, last: 2026-06-18T02:08:14.017Z, max duration: 3152.2977ms

Related dependencies:
- Invoke (unknown) - 16 occurrence(s), targets: Invoke, max duration: 2874.1698ms
- GET /servicenow/now/attachment/0805895033132ed8fc3ca0d91e5c7b45/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 229.4347ms
- GET /servicenow/now/attachment/1ff4855033132ed8fc3ca0d91e5c7b2c/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 166.0506ms
- GET /servicenow/now/attachment/2bf4855033132ed8fc3ca0d91e5c7bfe/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 91.6865ms
- GET /servicenow/now/attachment/33f4095033132ed8fc3ca0d91e5c7bd2/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 118.1314ms
- GET /servicenow/now/attachment/3bf4095033132ed8fc3ca0d91e5c7b2e/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 81.313ms
- GET /servicenow/now/attachment/472203ff33917ad04b1679223d5c7b4c/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 70.7966ms
- GET /servicenow/now/table/sys_attachment/1c05c95033132ed8fc3ca0d91e5c7b3a (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 296.1637ms
- GET /servicenow/now/table/sys_attachment/2ff4855033132ed8fc3ca0d91e5c7b8c (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 366.5832ms
- GET /servicenow/now/table/sys_attachment/4ac0689433ac7a10bb0daf913d5c7b86 (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 214.6115ms

Related traces:
- n/a

### System.Threading.Tasks.TaskCanceledException at myAibouQAIndexer.integrations.clients.ServiceNow.ServiceNowClient+<GetTableItemAsync>d__4.MoveNext

- Count: 30
- First seen: 2026-06-14T02:30:27.918Z
- Last seen: 2026-06-14T04:59:10.197Z
- Roles: myaibou-connect-indexer
- Operation IDs: 0ee40ec3d9cc95cbab3c6e20ea1e64e6, d8157007a6449f24d4af51d1a2a3fb13, f5d5a0296fedbe7b71ebc5df8cebdd9b, 86d955b7ff3bc84dffbd3c25be2cd04e, 143572f04f3c091e5b8337cb59241b33, 8a0c83584f6c19d23a3452a194fcafee
- Sample messages:
  - One or more errors occurred. (Can not get data from service now)
  - Can not get data from service now
  - A task was canceled.

Related requests:
- v1-actionProcessing (0) - 6 occurrence(s), first: 2026-06-14T02:30:25.478Z, last: 2026-06-14T04:59:10.007Z, max duration: 5602.9299ms

Related dependencies:
- Invoke (unknown) - 6 occurrence(s), targets: Invoke, max duration: 5244.1795ms
- GET /servicenow/now/table/kb_knowledge/d7b4590033d1be14bb0daf913d5c7b7e (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 75.5855ms

Related traces:
- n/a

### System.Net.Sockets.SocketException at myAibouQAIndexer.integrations.clients.ServiceNow.ServiceNowClient+<GetTableItemAsync>d__4.MoveNext

- Count: 21
- First seen: 2026-06-14T02:30:27.492Z
- Last seen: 2026-06-14T03:58:24.668Z
- Roles: myaibou-connect-indexer
- Operation IDs: 77210a5b7fbc20543671c990ee937181, f76e7f79cccd637c6a1300dc30c19528, d02eb0695c6e3ea3112dea546dabb63a, 550ad8fb4d0dc29ecf17cde02f3b5a04, 55a61c0d083cb907152b2b46dd654110, 80c31a1fa7890fa9c16da1603bb395d7, 269a2277c28c19552f20be7dd0fa4538
- Sample messages:
  - Can not get data from service now
  - The operation was canceled.

Related requests:
- v1-actionProcessing (0) - 7 occurrence(s), first: 2026-06-14T02:30:26.785Z, last: 2026-06-14T03:58:24.195Z, max duration: 1707.0657ms

Related dependencies:
- Invoke (unknown) - 7 occurrence(s), targets: Invoke, max duration: 1220.5306ms
- GET /servicenow/now/table/sys_attachment/1c05c95033132ed8fc3ca0d91e5c7b3a (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 296.1637ms
- GET /servicenow/now/table/sys_attachment/2ff4855033132ed8fc3ca0d91e5c7b8c (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 366.5832ms
- GET /servicenow/now/table/sys_attachment/4ac0689433ac7a10bb0daf913d5c7b86 (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 214.6115ms
- GET /servicenow/now/table/sys_attachment/5ac0a89433ac7a10bb0daf913d5c7b06 (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 262.5425ms
- GET /servicenow/now/table/sys_attachment/5ec0689433ac7a10bb0daf913d5c7b94 (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 177.4382ms
- GET /servicenow/now/table/sys_attachment/82c0689433ac7a10bb0daf913d5c7b8a (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 122.7653ms
- GET /servicenow/now/table/sys_attachment/832203ff33917ad04b1679223d5c7bab (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 80.3117ms

Related traces:
- n/a

### System.Net.Sockets.SocketException at myAibouQAIndexer.integrations.clients.ServiceNow.ServiceNowClient+<DownloadAttachmentAsync>d__5.MoveNext

- Count: 18
- First seen: 2026-06-14T02:30:27.319Z
- Last seen: 2026-06-14T03:00:03.724Z
- Roles: myaibou-connect-indexer
- Operation IDs: ac943ad1b204437c4d5cb748e25e7f7e, 1012b4dbfb5b05ea27de2659b7b9f012, ff9a2acce06495791f03df04f4cc455e, 17abc5c174b73bda9de63861ea9dec4d, 01a0ff95135045255cc466a7b31b0377, 74bca91c043868dc922e854deee9f613
- Sample messages:
  - The operation was canceled.

Related requests:
- v1-actionProcessing (0) - 6 occurrence(s), first: 2026-06-14T02:30:25.494Z, last: 2026-06-14T03:00:02.262Z, max duration: 3152.2977ms

Related dependencies:
- Invoke (unknown) - 6 occurrence(s), targets: Invoke, max duration: 2874.1698ms
- GET /servicenow/now/attachment/0805895033132ed8fc3ca0d91e5c7b45/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 229.4347ms
- GET /servicenow/now/attachment/1ff4855033132ed8fc3ca0d91e5c7b2c/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 166.0506ms
- GET /servicenow/now/attachment/2bf4855033132ed8fc3ca0d91e5c7bfe/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 91.6865ms
- GET /servicenow/now/attachment/33f4095033132ed8fc3ca0d91e5c7bd2/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 118.1314ms
- GET /servicenow/now/attachment/3bf4095033132ed8fc3ca0d91e5c7b2e/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 81.313ms
- GET /servicenow/now/attachment/472203ff33917ad04b1679223d5c7b4c/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 70.7966ms

Related traces:
- n/a

### System.ObjectDisposedException at myAibouQAIndexer.integrations.clients.ServiceNow.ServiceNowClient+<DownloadAttachmentAsync>d__5.MoveNext

- Count: 15
- First seen: 2026-06-14T03:00:03.655Z
- Last seen: 2026-06-14T03:47:48.587Z
- Roles: myaibou-connect-indexer
- Operation IDs: 8bc0aecae2e8648eec6b96c90dd7657f, 0aefbee73be1370f29f35988251ab7a7, 516f552ffaa263f0ebd39a7b0e7ab2d6
- Sample messages:
  - One or more errors occurred. (The operation was canceled.)
  - The operation was canceled.

Related requests:
- v1-actionProcessing (0) - 3 occurrence(s), first: 2026-06-14T03:00:01.973Z, last: 2026-06-14T03:47:46.399Z, max duration: 2205.9398ms

Related dependencies:
- Invoke (unknown) - 3 occurrence(s), targets: Invoke, max duration: 2176.5732ms
- GET /servicenow/now/attachment/572203ff33917ad04b1679223d5c7bdb/file (Canceled) - 1 occurrence(s), targets: api.mytakeda.com, max duration: 42.9303ms

Related traces:
- n/a

### System.Net.Sockets.SocketException at myAibouQAIndexer.Integrations.SharepointClient+<GetSharepointFile>d__5.MoveNext

- Count: 9
- First seen: 2026-06-13T00:55:44.631Z
- Last seen: 2026-06-18T02:08:15.095Z
- Roles: myaibou-connect-indexer
- Operation IDs: 68e1f318dd40c1663d1f6f52186ce2a8, 134af4840fcf856bfea797e9dc6cf144, 283ea1515a1ab783515ab20a3ff86214
- Sample messages:
  - The operation was canceled.
  - Could not find SharePoint file to download at https://graph.microsoft.com/v1.0/sites/mytakeda.sharepoint.com:/sites/GlobalTravel:/lists/Documents/items/41/driveItem
  - An error occurred while sending the request.

Related requests:
- v1-actionProcessing (0) - 3 occurrence(s), first: 2026-06-13T00:55:44.114Z, last: 2026-06-18T02:08:14.017Z, max duration: 1114.4459ms

Related dependencies:
- Invoke (unknown) - 3 occurrence(s), targets: Invoke, max duration: 1086.6214ms
- GET /sites/GlobalTravel/_layouts/15/download.aspx (Faulted) - 1 occurrence(s), targets: mytakeda.sharepoint.com, max duration: 3.1322ms
- GET /sites/Procurement/_layouts/15/download.aspx (Canceled) - 1 occurrence(s), targets: mytakeda.sharepoint.com, max duration: 195.135ms

Related traces:
- n/a

### System.Net.Sockets.SocketException at myAibouQAIndexer.Integrations.ExtractinatorClient+<AnalyzeDocument>d__5.MoveNext

- Count: 8
- First seen: 2026-06-12T00:08:56.189Z
- Last seen: 2026-06-14T00:08:37.360Z
- Roles: myaibou-connect-indexer
- Operation IDs: 8079429df4700ac09ce957bfd8f70240, f6aa8e942d4e70ed1998395d5044db21, 0c00b6e9f7829d637411217620b5f31e, 34efdff3b5c1365d499d8d3415f5760a
- Sample messages:
  - The request was canceled due to the configured HttpClient.Timeout of 150 seconds elapsing.

Related requests:
- v1-actionProcessing (0) - 4 occurrence(s), first: 2026-06-12T00:06:25.742Z, last: 2026-06-14T00:06:06.528Z, max duration: 151476.5547ms

Related dependencies:
- Invoke (unknown) - 4 occurrence(s), targets: Invoke, max duration: 151398.2552ms
- POST /api/AnalyzeDocument (Canceled) - 4 occurrence(s), targets: myaibou-connect-extractionator.azurewebsites.net, max duration: 150004.9594ms

Related traces:
- n/a

### System.Threading.Tasks.TaskCanceledException at myAibouQAIndexer.Integrations.SharepointClient+<GetSharepointListItem>d__6.MoveNext

- Count: 5
- First seen: 2026-06-14T02:30:28.018Z
- Last seen: 2026-06-14T02:30:28.478Z
- Roles: myaibou-connect-indexer
- Operation IDs: 6c3d251d02567b285e2907afb0b0442d
- Sample messages:
  - One or more errors occurred. (A task was canceled.)
  - A task was canceled.

Related requests:
- v1-actionProcessing (0) - 1 occurrence(s), first: 2026-06-14T02:30:25.475Z, last: 2026-06-14T02:30:25.475Z, max duration: 3207.4161ms

Related dependencies:
- Invoke (unknown) - 1 occurrence(s), targets: Invoke, max duration: 2983.4911ms

Related traces:
- n/a

### System.InvalidOperationException at myAibouQAIndexer.Helpers.PythonChunkingRunner+<SplitTextAsync>d__2.MoveNext

- Count: 4
- First seen: 2026-06-13T00:05:25.776Z
- Last seen: 2026-06-13T00:05:26.066Z
- Roles: myaibou-connect-indexer
- Operation IDs: c1eec7d18d4f4f65a8932ff8a7b9e085
- Sample messages:
  - One or more errors occurred. (Python chunking script failed with exit code 137. Error: )
  - Python chunking script failed with exit code 137. Error: 

Related requests:
- v1-actionProcessing (0) - 1 occurrence(s), first: 2026-06-13T00:03:50.148Z, last: 2026-06-13T00:03:50.148Z, max duration: 96244.123ms

Related dependencies:
- Invoke (unknown) - 1 occurrence(s), targets: Invoke, max duration: 95915.9165ms

Related traces:
- n/a

### System.InvalidOperationException at Grpc.AspNetCore.Server.Internal.HttpContextStreamWriter`1+<WriteCoreAsync>d__11.MoveNext

- Count: 1
- First seen: 2026-06-14T00:18:23.466Z
- Last seen: 2026-06-14T00:18:23.466Z
- Roles: myaibou-connect-indexer
- Operation IDs: n/a
- Sample messages:
  - Can't write the message because the request is complete.

Related requests:
- n/a

Related dependencies:
- n/a

Related traces:
- n/a

Top Failed Requests
-----
v1-actionProcessing (0) | Errors count: 3273 | First seen: 2026-06-12T00:06:25.742Z | Last seen: 2026-06-18T02:37:36.421Z
- grouped errors:
  - exceptions: myAibouQAIndexer.Exceptions.IntegrationException at myAibouQAIndexer.Integrations.ExtractinatorClient+<AnalyzeDocument>d__5.MoveNext - 1112 occurrence(s); sample: One or more errors occurred. (Extractinator API can not parse provided file. FileName: Super Users for US under PEA scope.pptx. Error: Error creating the analysis job. Error: Requests to the ContentAnalyzers_AnalyzeBinary Operation under Microsoft Azure Multimodal Intelligence 2025-11-01 have exc...; first seen: 2026-06-12T02:15:01.623Z; last seen: 2026-06-18T02:37:44.446Z
  - exceptions: Microsoft.Azure.WebJobs.Script.Workers.Rpc.RpcException at System.Runtime.ExceptionServices.ExceptionDispatchInfo.Throw - 946 occurrence(s); sample: Exception while executing function: Functions.v1-actionProcessing; first seen: 2026-06-12T00:06:25.742Z; last seen: 2026-06-18T02:37:44.466Z
  - dependencies: Invoke (unknown) - 442 occurrence(s); sample: Invoke; first seen: 2026-06-12T00:06:25.742Z; last seen: 2026-06-18T02:37:37.324Z
  - dependencies: POST /api/AnalyzeDocument (429) - 278 occurrence(s); sample: myaibou-connect-extractionator.azurewebsites.net; first seen: 2026-06-12T02:15:01.623Z; last seen: 2026-06-18T02:37:43.644Z
  - exceptions: System.Threading.Tasks.TaskCanceledException at myAibouQAIndexer.Middlewares.LoggingMiddleware+<Invoke>d__1.MoveNext - 168 occurrence(s); sample: One or more errors occurred. (A task was canceled.); first seen: 2026-06-12T00:06:25.742Z; last seen: 2026-06-16T02:09:06.573Z
  - exceptions: System.Net.Http.HttpRequestException at myAibouQAIndexer.integrations.clients.ServiceNow.ServiceNowClient+<GetTableItemAsync>d__4.MoveNext - 140 occurrence(s); sample: One or more errors occurred. (Can not get data from service now); first seen: 2026-06-12T02:15:53.847Z; last seen: 2026-06-18T02:13:50.063Z
  - exceptions: Azure.RequestFailedException at Azure.Search.Documents.IndexesRestClient+<GetAsync>d__21.MoveNext - 100 occurrence(s); sample: One or more errors occurred. (SearchClientError: search client could not return successful response); first seen: 2026-06-15T13:52:20.215Z; last seen: 2026-06-15T15:29:18.103Z
  - exceptions: System.Net.Sockets.SocketException at myAibouQAIndexer.Middlewares.LoggingMiddleware+<Invoke>d__1.MoveNext - 32 occurrence(s); sample: One or more errors occurred. (The operation was canceled.); first seen: 2026-06-13T00:55:44.114Z; last seen: 2026-06-18T02:08:15.107Z
  - exceptions: System.Threading.Tasks.TaskCanceledException at myAibouQAIndexer.integrations.clients.ServiceNow.ServiceNowClient+<GetTableItemAsync>d__4.MoveNext - 30 occurrence(s); sample: One or more errors occurred. (Can not get data from service now); first seen: 2026-06-14T02:30:25.478Z; last seen: 2026-06-14T04:59:10.197Z
  - dependencies: SearchIndexClient.GetIndex (unknown) - 25 occurrence(s); sample: SearchIndexClient.GetIndex; first seen: 2026-06-15T13:52:20.215Z; last seen: 2026-06-15T15:29:17.745Z

v1-async-status (500) | Errors count: 1 | First seen: 2026-06-14T00:17:52.614Z | Last seen: 2026-06-14T00:17:52.614Z
- grouped errors: n/a

v2-upsert (500) | Errors count: 1 | First seen: 2026-06-11T14:12:52.921Z | Last seen: 2026-06-11T14:12:52.921Z
- grouped errors: n/a

Unlinked Errors
-----

| OperationId / CorrelationId | Errors count | First seen | Last seen |
| --- | ---: | --- | --- |
| df202b144af4528cbf9a9ebdbab507e9 | 45 | 2026-06-11T13:09:08.554Z | 2026-06-11T13:22:15.605Z |
| 8ff8b493e65198687aa016bdbc9666d6 | 44 | 2026-06-17T14:28:56.087Z | 2026-06-17T14:42:00.919Z |
| 51431f2763183d36aa8066c4abceda81 | 43 | 2026-06-15T10:24:53.540Z | 2026-06-15T10:38:01.926Z |
| 862ad48c50e3e58be222d682880bb229 | 12 | 2026-06-11T18:26:53.072Z | 2026-06-11T18:31:07.321Z |
| 004829ee1fc6d70d7495c0faac49cad2 | 2 | 2026-06-13T00:03:09.791Z | 2026-06-13T00:03:12.366Z |
| 004af96416e04428aecc9419a7a966e1 | 2 | 2026-06-14T13:54:40.423Z | 2026-06-14T13:54:46.953Z |
| 006f3ee473062a628df26580b72622a9 | 2 | 2026-06-17T00:21:52.687Z | 2026-06-17T00:21:56.247Z |
| 00aaa13255b98da14cdaa47dfe6624ef | 2 | 2026-06-18T01:08:25.766Z | 2026-06-18T01:08:26.942Z |
| 00b95d10405d7911732367277ca3195a | 2 | 2026-06-14T00:05:47.581Z | 2026-06-14T00:05:50.509Z |
| 00b9c8ee1abd5d45467c304e8695be4c | 2 | 2026-06-14T00:04:50.360Z | 2026-06-14T00:04:51.474Z |

### df202b144af4528cbf9a9ebdbab507e9

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| dependencies | POST /openai/deployments/text-embedding-3-large/embeddings (429) | 45 | 2026-06-11T13:09:08.554Z | 2026-06-11T13:22:15.605Z | futurebot-uksouth.openai.azure.com |

### 8ff8b493e65198687aa016bdbc9666d6

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| dependencies | POST /openai/deployments/text-embedding-3-large/embeddings (429) | 44 | 2026-06-17T14:28:56.087Z | 2026-06-17T14:42:00.919Z | futurebot-uksouth.openai.azure.com |

### 51431f2763183d36aa8066c4abceda81

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| dependencies | POST /openai/deployments/text-embedding-3-large/embeddings (429) | 43 | 2026-06-15T10:24:53.540Z | 2026-06-15T10:38:01.926Z | futurebot-uksouth.openai.azure.com |

### 862ad48c50e3e58be222d682880bb229

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| dependencies | POST /openai/deployments/text-embedding-3-large/embeddings (429) | 12 | 2026-06-11T18:26:53.072Z | 2026-06-11T18:31:07.321Z | futurebot-uksouth.openai.azure.com |

### 004829ee1fc6d70d7495c0faac49cad2

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| exceptions | myAibouQAIndexer.Exceptions.FaultException at myAibouQAIndexer.Integrations.ExtractinatorClient+<AnalyzeDocument>d__5.MoveNext | 1 | 2026-06-13T00:03:12.366Z | 2026-06-13T00:03:12.366Z | Extractinator API can not parse provided file. FileName: Veeva Bee toolkit_e-Banner_Ninlaro2.jpg. Error: Unable to process content understanding document. Content understanding analysis failed with error: InvalidRequest - Invalid Request. |
| dependencies | POST /api/AnalyzeDocument (500) | 1 | 2026-06-13T00:03:09.791Z | 2026-06-13T00:03:09.791Z | myaibou-connect-extractionator.azurewebsites.net |

### 004af96416e04428aecc9419a7a966e1

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| exceptions | myAibouQAIndexer.Exceptions.FaultException at myAibouQAIndexer.Integrations.ExtractinatorClient+<AnalyzeDocument>d__5.MoveNext | 1 | 2026-06-14T13:54:46.953Z | 2026-06-14T13:54:46.953Z | Extractinator API can not parse provided file. FileName: 8 Coaching and Capability Training Session Teams.pptx. Error: Unable to process content understanding document. Content understanding analysis failed with error: InvalidRequest - Invalid Request. |
| dependencies | POST /api/AnalyzeDocument (500) | 1 | 2026-06-14T13:54:40.423Z | 2026-06-14T13:54:40.423Z | myaibou-connect-extractionator.azurewebsites.net |

### 006f3ee473062a628df26580b72622a9

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| exceptions | myAibouQAIndexer.Exceptions.FaultException at myAibouQAIndexer.Integrations.ExtractinatorClient+<AnalyzeDocument>d__5.MoveNext | 1 | 2026-06-17T00:21:56.247Z | 2026-06-17T00:21:56.247Z | Extractinator API can not parse provided file. FileName: _Takeda_Safety_icons20.png. Error: Unable to process content understanding document. Content understanding analysis failed with error: InvalidRequest - Invalid Request. |
| dependencies | POST /api/AnalyzeDocument (500) | 1 | 2026-06-17T00:21:52.687Z | 2026-06-17T00:21:52.687Z | myaibou-connect-extractionator.azurewebsites.net |

### 00aaa13255b98da14cdaa47dfe6624ef

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| exceptions | myAibouQAIndexer.Exceptions.FaultException at myAibouQAIndexer.Integrations.ExtractinatorClient+<AnalyzeDocument>d__5.MoveNext | 1 | 2026-06-18T01:08:26.942Z | 2026-06-18T01:08:26.942Z | Extractinator API can not parse provided file. FileName: _Takeda_Treatment_icons5.png. Error: Unable to process content understanding document. Content understanding analysis failed with error: InvalidRequest - Invalid Request. |
| dependencies | POST /api/AnalyzeDocument (500) | 1 | 2026-06-18T01:08:25.766Z | 2026-06-18T01:08:25.766Z | myaibou-connect-extractionator.azurewebsites.net |

### 00b95d10405d7911732367277ca3195a

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| exceptions | myAibouQAIndexer.Exceptions.FaultException at myAibouQAIndexer.Integrations.ExtractinatorClient+<AnalyzeDocument>d__5.MoveNext | 1 | 2026-06-14T00:05:50.509Z | 2026-06-14T00:05:50.509Z | Extractinator API can not parse provided file. FileName: playwright.config.ts. Error: Unable to process content understanding document. Content understanding analysis failed with error: InvalidRequest - Invalid Request. |
| dependencies | POST /api/AnalyzeDocument (500) | 1 | 2026-06-14T00:05:47.581Z | 2026-06-14T00:05:47.581Z | myaibou-connect-extractionator.azurewebsites.net |

### 00b9c8ee1abd5d45467c304e8695be4c

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| exceptions | myAibouQAIndexer.Exceptions.FaultException at myAibouQAIndexer.Integrations.ExtractinatorClient+<AnalyzeDocument>d__5.MoveNext | 1 | 2026-06-14T00:04:51.474Z | 2026-06-14T00:04:51.474Z | Extractinator API can not parse provided file. FileName: Open Notebook.onetoc2. Error: Unable to process content understanding document. Content understanding analysis failed with error: InvalidRequest - Invalid Request. |
| dependencies | POST /api/AnalyzeDocument (500) | 1 | 2026-06-14T00:04:50.360Z | 2026-06-14T00:04:50.360Z | myaibou-connect-extractionator.azurewebsites.net |

