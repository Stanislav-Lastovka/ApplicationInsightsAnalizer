Summary
-----
- Total records: 208586
- Exceptions: 4007
- Error traces: 0
- Failed requests: 722
- Failed dependencies: 203857
- From: 2026-06-16T06:59:48.997Z
- To: 2026-06-23T06:58:55.675Z

Errors
-----

| Error | Count | First seen | Last seen | Operations |
| --- | ---: | --- | --- | ---: |
| System.OperationCanceledException at MyAibou.Services.Services.Responses.ResponsesService+<ProcessStream>d__39.MoveNext | 1634 | 2026-06-16T12:18:09.003Z | 2026-06-23T06:51:04.101Z | 1634 |
| MyAibou.Services.Exceptions.ServiceException at MyAibouConnect.Services.Core.Services.Agents.AgentAccessEvaluator+<EnsureCurrentUserHasAccessAsync>d__4.MoveNext | 460 | 2026-06-16T07:17:49.791Z | 2026-06-23T06:27:10.578Z | 460 |
| MyAibou.Services.Exceptions.ClientException at MyAibouConnect.Services.Clients.BaseClient.ThrowError | 329 | 2026-06-16T07:22:33.476Z | 2026-06-23T05:24:25.361Z | 311 |
| Azure.RequestFailedException at Azure.Storage.Queues.MessagesRestClient+<EnqueueAsync>d__14.MoveNext | 258 | 2026-06-16T06:59:49.218Z | 2026-06-16T12:16:37.125Z | 258 |
| MyAibou.Services.Exceptions.ServiceException at MyAibouConnect.Services.Core.Services.Agents.AgentService+<FetchAndValidateAgent>d__22.MoveNext | 238 | 2026-06-16T07:20:51.237Z | 2026-06-23T06:51:58.153Z | 238 |
| System.IO.FileNotFoundException at MyAibouConnect.Services.Core.Services.Integration.OpenAIFileHandler+<GetBlobSasUrlAsync>d__9.MoveNext | 151 | 2026-06-16T12:56:14.993Z | 2026-06-23T05:44:52.521Z | 151 |
| System.OperationCanceledException at MyAibou.Services.Services.Responses.ResponsesService+<ProcessStream>d__38.MoveNext | 121 | 2026-06-16T07:02:54.901Z | 2026-06-16T12:16:42.270Z | 121 |
| System.UnauthorizedAccessException at MyAibou.Services.Middlewares.UserTokenAccessorMiddleware+<ReadTokenData>d__7.MoveNext | 114 | 2026-06-16T07:52:54.000Z | 2026-06-23T03:39:18.513Z | 114 |
| MyAibou.Services.Exceptions.ServiceException at MyAibou.Services.Services.Responses.Pipeline.PreProcessors.AttachmentProcessingStep+<ExecuteAsync>d__13.MoveNext | 95 | 2026-06-16T07:18:31.626Z | 2026-06-23T03:27:57.957Z | 95 |
| System.Net.Sockets.SocketException at MyAibouConnect.Services.Clients.OpenAI.OpenAIClient+<PostAsync>d__99.MoveNext | 86 | 2026-06-16T07:47:25.177Z | 2026-06-22T15:24:00.439Z | 86 |
| Microsoft.IdentityModel.Tokens.SecurityTokenMalformedException at MyAibou.Services.Middlewares.UserTokenAccessorMiddleware+<ReadTokenData>d__7.MoveNext | 60 | 2026-06-16T07:52:54.000Z | 2026-06-23T03:39:18.512Z | 60 |
| System.Collections.Generic.KeyNotFoundException at MyAibouConnect.Services.Core.Services.Conversations.ConversationService+<GetConversationInternalAsync>d__25.MoveNext | 56 | 2026-06-18T12:14:43.183Z | 2026-06-18T12:16:30.931Z | 56 |
| Microsoft.IdentityModel.Tokens.SecurityTokenExpiredException at MyAibou.Services.Middlewares.UserTokenAccessorMiddleware+<ReadTokenData>d__7.MoveNext | 54 | 2026-06-16T18:53:50.053Z | 2026-06-22T23:10:41.409Z | 54 |
| System.Threading.Tasks.TaskCanceledException at MyAibouConnect.Services.Core.Services.Realtime.RealtimeService+<SendWithLockAsync>d__12.MoveNext | 53 | 2026-06-16T13:11:25.987Z | 2026-06-21T14:54:17.593Z | 53 |
| Microsoft.Identity.Client.MsalUiRequiredException at MyAibouConnect.Services.Clients.AAD.AADClient+<GetOBOTokenAsync>d__5.MoveNext | 46 | 2026-06-16T10:53:57.637Z | 2026-06-23T06:33:25.741Z | 44 |
| System.Threading.Tasks.TaskCanceledException at Azure.Core.CancellationHelper.ThrowOperationCanceledException | 38 | 2026-06-16T07:33:37.410Z | 2026-06-23T06:50:16.780Z | 38 |
| System.Net.Http.HttpIOException at MyAibou.Services.Services.Responses.ResponsesService+<ProcessStream>d__39.MoveNext | 36 | 2026-06-16T14:01:26.135Z | 2026-06-22T20:31:49.457Z | 36 |
| MyAibou.Services.Exceptions.ServiceException at MyAibouConnect.Services.Clients.Mcp.McpClient+<SendJsonRpcAsync>d__7.MoveNext | 23 | 2026-06-16T14:23:18.968Z | 2026-06-19T11:11:32.246Z | 23 |
| System.OperationCanceledException at MyAibou.Services.Services.Responses.ResponsesService+<ProcessStreamEventAsync>d__40.MoveNext | 23 | 2026-06-16T16:12:57.241Z | 2026-06-23T05:13:53.202Z | 23 |
| System.Net.Sockets.SocketException at MyAibouConnect.Services.Clients.Extractionator.ExtractionatorClient+<AnalyzeDocumentAsync>d__4.MoveNext | 20 | 2026-06-16T07:44:16.738Z | 2026-06-23T06:40:38.730Z | 15 |
| System.Threading.Tasks.TaskCanceledException at MyAibouConnect.Services.Clients.OpenAI.OpenAIClient+<PostAsync>d__99.MoveNext | 19 | 2026-06-16T14:34:00.497Z | 2026-06-22T22:39:32.886Z | 19 |
| System.InvalidOperationException at MyAibouConnect.Services.Clients.OpenAI.OpenAIClient..ctor | 16 | 2026-06-16T13:09:13.233Z | 2026-06-22T03:50:57.680Z | 16 |
| System.Net.Sockets.SocketException at MyAibouConnect.Services.Clients.AAD.AADClient+<GetOBOTokenAsync>d__5.MoveNext | 11 | 2026-06-16T09:02:52.961Z | 2026-06-23T04:29:22.981Z | 11 |
| System.InvalidOperationException at MyAibouConnect.Services.Web.Middlewares.TelemetryMiddleware+<Invoke>d__2.MoveNext | 10 | 2026-06-18T09:02:14.777Z | 2026-06-19T01:55:29.276Z | 10 |
| FluentValidation.ValidationException at FluentValidation.AbstractValidator`1.RaiseValidationException | 9 | 2026-06-16T18:51:16.884Z | 2026-06-16T19:08:50.006Z | 9 |
| Microsoft.Data.SqlClient.SqlException at MyAibouConnect.Services.Repositories.DatabaseConnectionFactory+<GetConnection>d__3.MoveNext | 8 | 2026-06-23T03:24:17.610Z | 2026-06-23T03:24:19.617Z | 8 |
| System.OperationCanceledException at MyAibouConnect.Services.Core.Services.Realtime.RealtimeConversationCoordinator+<PersistConversationItemAsync>d__4.MoveNext | 8 | 2026-06-16T13:01:14.521Z | 2026-06-22T11:09:33.924Z | 8 |
| System.ObjectDisposedException at MyAibou.Services.Services.Responses.ResponsesServiceHelpers+<WriteEventAsync>d__0.MoveNext | 6 | 2026-06-16T11:39:48.093Z | 2026-06-22T12:45:45.922Z | 6 |
| System.OperationCanceledException at MyAibouConnect.Services.Clients.AAD.AADClient+<GetOBOTokenAsync>d__5.MoveNext | 6 | 2026-06-17T13:05:47.272Z | 2026-06-22T12:54:02.176Z | 6 |
| System.IO.FileNotFoundException at MyAibouConnect.Services.Core.Services.Integration.OpenAIFileHandler+<GetBlobSasUrlAsync>d__4.MoveNext | 5 | 2026-06-16T08:26:21.899Z | 2026-06-16T12:05:42.327Z | 5 |
| System.Net.Http.HttpIOException at MyAibou.Services.Services.Responses.ResponsesService+<ProcessStream>d__38.MoveNext | 2 | 2026-06-16T09:56:59.720Z | 2026-06-16T10:08:31.423Z | 2 |
| System.Net.Sockets.SocketException at MyAibouConnect.Services.Clients.Graph.GraphClient+<>c__DisplayClass10_0+<<CheckMemberGroupsForUser>b__0>d.MoveNext | 2 | 2026-06-18T14:56:42.729Z | 2026-06-18T17:41:52.049Z | 2 |
| System.Net.Sockets.SocketException at MyAibouConnect.Services.Clients.OpenAI.OpenAIClient+<ConnectRealtimeSocketAsync>d__80.MoveNext | 2 | 2026-06-16T15:20:44.967Z | 2026-06-18T04:55:36.078Z | 2 |
| System.Net.Sockets.SocketException at MyAibouConnect.Services.Web.Services.OpenAIHealthCheck+<CheckHealthAsync>d__2.MoveNext | 2 | 2026-06-19T01:53:47.166Z | 2026-06-19T19:29:07.172Z | 1 |
| System.OperationCanceledException at MyAibou.Services.Services.Responses.ResponsesService+<ProcessStreamEventAsync>d__39.MoveNext | 2 | 2026-06-16T08:54:13.507Z | 2026-06-16T10:59:15.395Z | 2 |
| System.Net.Sockets.SocketException at MyAibouConnect.Services.Clients.OpenAI.OpenAIClient+<>c__DisplayClass100_0`1+<<PostAsJsonAsync>b__0>d.MoveNext | 1 | 2026-06-17T21:19:09.320Z | 2026-06-17T21:19:09.320Z | 1 |
| System.Net.Sockets.SocketException at MyAibouConnect.Services.Clients.Sanity.SanityClient+<>c__DisplayClass6_0`1+<<Query>b__0>d.MoveNext | 1 | 2026-06-17T09:17:27.061Z | 2026-06-17T09:17:27.061Z | 1 |
| System.ObjectDisposedException at MyAibouConnect.Services.Clients.OpenAI.OpenAIClient+<PostAsync>d__99.MoveNext | 1 | 2026-06-18T16:52:33.732Z | 2026-06-18T16:52:33.732Z | 1 |
| System.OperationCanceledException at MyAibou.Services.Services.Responses.ResponsesInternalToolService+<ProcessToolCallAsync>d__8.MoveNext | 1 | 2026-06-22T02:31:47.074Z | 2026-06-22T02:31:47.074Z | 1 |

### System.OperationCanceledException at MyAibou.Services.Services.Responses.ResponsesService+<ProcessStream>d__39.MoveNext

- Count: 1634
- First seen: 2026-06-16T12:18:09.003Z
- Last seen: 2026-06-23T06:51:04.101Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: f58e1dcc77fb13235594cd4e76e77780, cb257eaed17c6d81fba090547b21cf38, 39491e4611e7f43ac37a44ab4f00a195, 63b73390f8a05dc4d931b25c76750499, 16e35f9472c0308e2390439c6f1a84dd, 02b5c3bd235bf9aaa9b63c74fff5ffeb, 80bf032b72ad30f8610235239c768365, 4f6f925315955bb135674a8b791add1e, ed06117474305fa8fcb727f902d7d111, 67265e12b8f96f868c238a6f5aea8037 (+1624 more)
- Sample messages:
  - The operation was canceled.

Related requests:
- n/a

Related dependencies:
- n/a

Related traces:
- n/a

### MyAibou.Services.Exceptions.ServiceException at MyAibouConnect.Services.Core.Services.Agents.AgentAccessEvaluator+<EnsureCurrentUserHasAccessAsync>d__4.MoveNext

- Count: 460
- First seen: 2026-06-16T07:17:49.791Z
- Last seen: 2026-06-23T06:27:10.578Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: cb2a8e826fb8fa65f528999ad50d6f7c, 3c23292ece9a65cd6aade78ac7782c53, 7c739d6ac4c000aebf38fdd8e96d28ab, 5df89068c177d150606f82636f49e536, ff795c44dfa74eb9988a0cdbcc1cb89b, 5ec707304873c09611f4d13a4ac8bf5d, a872820d71c195ca8f019b1169aa5757, f088f1115b8d6a75894eb847732cc9f6, 460538676fa1485b245b350d5120151b, 5bbd98815566d8b84b3cc80073b8d1d6 (+450 more)
- Sample messages:
  - User does not have access to Agent.

Related requests:
- n/a

Related dependencies:
- n/a

Related traces:
- n/a

### MyAibou.Services.Exceptions.ClientException at MyAibouConnect.Services.Clients.BaseClient.ThrowError

- Count: 329
- First seen: 2026-06-16T07:22:33.476Z
- Last seen: 2026-06-23T05:24:25.361Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: d5e0fc1ec2959d28043f10e0e1aad7c3, a8226e6ab429e7025355a1cdfe242860, 21e831373ad6e32aa23577fd15ed3b47, 9674687eb99999ec2131c24129e58d1c, 69ed2ccf2a2836209bc23581e59209ab, 0988167b30f979291baf1ee56bb0e6cc, 1ef9735abfe1d42f18274c0e26b533aa, cc7b337ba2de45996fa566c5f270c8df, b53b215ebc6b6ee2f95ea572605ca7d1, 3fd1c7f576e563262a3009485f0647bf (+301 more)
- Sample messages:
  - The server had an error while processing your request. Sorry about that!
  - Container is expired.
  - Response with id 'resp_01de1d8237f48192006a0d81d3368c8199bf2497fe67c853d6' not found.
  - The server had an error processing your request. Sorry about that! You can retry your request, or contact us through our help center at help.openai.com if you keep seeing this error. (Please include the request ID req_1f958959161c4ebbbdcc58bed028149a in your email.)
  - Request was cancelled by event received. If attempting to delete a non-empty folder, it's possible that it's on hold

Related requests:
- GET Conversations/GetConversation [conversationId/version] (500) - 54 occurrence(s), first: 2026-06-16T17:40:43.231Z, last: 2026-06-22T13:57:15.635Z, max duration: 92996.8098ms
- POST Responses/CreateResponse [version] (503) - 47 occurrence(s), first: 2026-06-17T07:25:55.001Z, last: 2026-06-18T13:38:26.175Z, max duration: 5570.5668ms
- GET Audit/GetResponseCompleteAudit [conversation_id/version] (500) - 30 occurrence(s), first: 2026-06-18T12:14:35.075Z, last: 2026-06-18T12:16:42.152Z, max duration: 15250.9208ms
- GET Conversations/GetConversation [conversationId/version] (503) - 22 occurrence(s), first: 2026-06-16T14:22:27.929Z, last: 2026-06-22T13:15:35.937Z, max duration: 31360.3464ms
- POST Responses/CreateResponse [version] (500) - 13 occurrence(s), first: 2026-06-17T20:15:21.817Z, last: 2026-06-23T05:24:19.262Z, max duration: 36654.1208ms
- POST Responses/CreateResponse [version] (400) - 10 occurrence(s), first: 2026-06-16T07:45:13.683Z, last: 2026-06-19T09:02:02.920Z, max duration: 7273.1454ms
- POST Responses/CreateResponse [version] (424) - 2 occurrence(s), first: 2026-06-16T09:27:51.431Z, last: 2026-06-16T11:18:45.575Z, max duration: 3700.7066ms
- POST Skills/CreateSkill [version] (400) - 2 occurrence(s), first: 2026-06-16T14:56:39.184Z, last: 2026-06-16T14:58:04.110Z, max duration: 241.5976ms
- POST Responses/CreateResponse [version] (520) - 1 occurrence(s), first: 2026-06-21T17:10:04.669Z, last: 2026-06-21T17:10:04.669Z, max duration: 14301.9617ms
- POST Responses/ResolveResponse [response_id/version] (503) - 1 occurrence(s), first: 2026-06-22T13:46:28.315Z, last: 2026-06-22T13:46:28.315Z, max duration: 282.9864ms

Related dependencies:
- POST /v1/conversations (503) - 47 occurrence(s), targets: api.openai.com, us.api.openai.com, max duration: 5542.2702ms
- GET /v1/conversations/conv_6a304424f3d4819080b4ec23edfcb7e90d7dddb8edfa4324/items (500) - 35 occurrence(s), targets: api.openai.com, max duration: 1495.2335ms
- POST /v1/responses (500) - 26 occurrence(s), targets: us.api.openai.com, api.openai.com, max duration: 36293.5188ms
- GET /v1/conversations/conv_6a2817508634819494465e470e1019890176870071e3a281/items (500) - 20 occurrence(s), targets: us.api.openai.com, max duration: 3453.8376ms
- POST /v1/responses (400) - 19 occurrence(s), targets: api.openai.com, us.api.openai.com, max duration: 1255.1884ms
- GET /v1/conversations/conv_6a0d014287808193b5f1133437aa3d070c60e865189afa29/items (500) - 8 occurrence(s), targets: us.api.openai.com, max duration: 2196.5829ms
- POST /v1/conversations/conv_6a373804481c81948558d36ce752e9cf00502eaf20f51e88/items (400) - 8 occurrence(s), targets: api.openai.com, max duration: 428.9651ms
- POST /v2023-05-03/data/query/myaibou-connect (400) - 8 occurrence(s), targets: bi4m2yex.apicdn.sanity.io, max duration: 45.3661ms
- GET /v1/conversations/conv_698b77714b98819098215de8632ffc300e60eb3b3b7cac2d/items (500) - 6 occurrence(s), targets: api.openai.com, max duration: 1636.9124ms
- GET /v1/conversations/conv_6a22a6de1a408193b7fe1590e4c244a207b358a44d0095c5/items (500) - 6 occurrence(s), targets: api.openai.com, max duration: 2757.6836ms

Related traces:
- n/a

### Azure.RequestFailedException at Azure.Storage.Queues.MessagesRestClient+<EnqueueAsync>d__14.MoveNext

- Count: 258
- First seen: 2026-06-16T06:59:49.218Z
- Last seen: 2026-06-16T12:16:37.125Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: f5e6f0e35d9af8de8de828025828cf7b, 10f21e3d22012b543655b8eb3eacc637, e6503de8ea80e7787a718d969eed0aab, f7f73707e393237729202943c465d767, 1fe3f9ede0a1a6d38a6325547951625c, d423de8bf3550d0fb62504043d72c1dc, faeea459575473b368d1251a86060996, 42ae95ee2a2dab1e588b49a804aae610, 0817eb67bf8a1194f74f5b3b597868af, 89d56f0d44f13daf91a1426430a20ec8 (+248 more)
- Sample messages:
  - The request body is too large and exceeds the maximum permissible limit.<br>RequestId:c2ba1eb6-5003-0027-4489-fdbf98000000<br>Time:2026-06-16T12:16:37.0899722Z<br>Status: 413 (The request body is too large and exceeds the maximum permissible limit.)<br>ErrorCode: RequestBodyTooLarge<br><br>Additional Information:<br>MaxLimit: 65536<br><br>Content:<br>﻿<?xml version="1.0" encoding="utf-8"?><Error><Code>RequestBodyTooLarge</Code><Message>The request body is too large and exceeds the maximum permissible limit.<br>RequestId:c2ba...
  - The request body is too large and exceeds the maximum permissible limit.<br>RequestId:3ea2d265-e003-0017-0d89-fde5b2000000<br>Time:2026-06-16T12:16:15.3551517Z<br>Status: 413 (The request body is too large and exceeds the maximum permissible limit.)<br>ErrorCode: RequestBodyTooLarge<br><br>Additional Information:<br>MaxLimit: 65536<br><br>Content:<br>﻿<?xml version="1.0" encoding="utf-8"?><Error><Code>RequestBodyTooLarge</Code><Message>The request body is too large and exceeds the maximum permissible limit.<br>RequestId:3ea2...
  - The request body is too large and exceeds the maximum permissible limit.<br>RequestId:3ea2cac6-e003-0017-2f89-fde5b2000000<br>Time:2026-06-16T12:16:09.1030348Z<br>Status: 413 (The request body is too large and exceeds the maximum permissible limit.)<br>ErrorCode: RequestBodyTooLarge<br><br>Additional Information:<br>MaxLimit: 65536<br><br>Content:<br>﻿<?xml version="1.0" encoding="utf-8"?><Error><Code>RequestBodyTooLarge</Code><Message>The request body is too large and exceeds the maximum permissible limit.<br>RequestId:3ea2...
  - The request body is too large and exceeds the maximum permissible limit.<br>RequestId:d32971b1-a003-0076-0c89-fda16d000000<br>Time:2026-06-16T12:16:02.9511926Z<br>Status: 413 (The request body is too large and exceeds the maximum permissible limit.)<br>ErrorCode: RequestBodyTooLarge<br><br>Additional Information:<br>MaxLimit: 65536<br><br>Content:<br>﻿<?xml version="1.0" encoding="utf-8"?><Error><Code>RequestBodyTooLarge</Code><Message>The request body is too large and exceeds the maximum permissible limit.<br>RequestId:d329...
  - The request body is too large and exceeds the maximum permissible limit.<br>RequestId:b94b650c-9003-003a-7889-fd6672000000<br>Time:2026-06-16T12:15:52.6244305Z<br>Status: 413 (The request body is too large and exceeds the maximum permissible limit.)<br>ErrorCode: RequestBodyTooLarge<br><br>Additional Information:<br>MaxLimit: 65536<br><br>Content:<br>﻿<?xml version="1.0" encoding="utf-8"?><Error><Code>RequestBodyTooLarge</Code><Message>The request body is too large and exceeds the maximum permissible limit.<br>RequestId:b94b...

Related requests:
- n/a

Related dependencies:
- POST myaibouconnect/conversation-ediscovery-updates (413) - 258 occurrence(s), targets: myaibouconnect.queue.core.windows.net, max duration: 447.1509ms
- QueueClient.SendMessage (unknown) - 258 occurrence(s), targets: QueueClient.SendMessage, max duration: 448.8176ms

Related traces:
- n/a

### MyAibou.Services.Exceptions.ServiceException at MyAibouConnect.Services.Core.Services.Agents.AgentService+<FetchAndValidateAgent>d__22.MoveNext

- Count: 238
- First seen: 2026-06-16T07:20:51.237Z
- Last seen: 2026-06-23T06:51:58.153Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: bd97c33944ee5c68fee3bbb816dbfca4, 7d9bc47467c0bf86deaf82529d41fb9e, 1745bbb3a478a3215119b5bdbc8d4a33, d7d48d3ea9fa9a8153e99c6475d1817d, 0aa1f48fa2379b19fbd522ed4d0bcef0, fecc0cf21ca65bb2c4f2d9cc9c341662, a188b3663ebe76e223d5174a73d32539, 03224c983c5ac1f587333cdd87ea5680, f2c907229134c149fd55e4e4574a764f, 848ade2bf673d5e4a140f024305fd3ec (+228 more)
- Sample messages:
  - Agent cannot be found.

Related requests:
- n/a

Related dependencies:
- n/a

Related traces:
- n/a

### System.IO.FileNotFoundException at MyAibouConnect.Services.Core.Services.Integration.OpenAIFileHandler+<GetBlobSasUrlAsync>d__9.MoveNext

- Count: 151
- First seen: 2026-06-16T12:56:14.993Z
- Last seen: 2026-06-23T05:44:52.521Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 1548102b469db39591097357486fbc5e, 9bcf93858f7c4aedb14858898f4a88ed, 7b309e3060e04e521ab41433c8cde977, 3afcdfa3bfa6c082aa34f02a5906bc07, 2dcc03d3f233a85b7aa91d15e7356843, 4393ebaf2b03a44f037fceb49b0d6238, 8cbfbf57c48961a1180d7e069f653103, 14c7e4f54ba99fe7a16bcbb6f7fe3200, a9aedd19762fd9ea6921625e7d4b6a02, ca994ffa2ff839df3380ccf9380b05a6 (+141 more)
- Sample messages:
  - cfile_69cce751bce48191b38b5e9bfef4ca17
  - cfile_69cce751ba548191a413aa12c6195610
  - cfile_69cce751bb3c819186229f87dc88234e
  - cfile_69d772f152d88191a4ad5740e4d84314
  - cfile_69cce751bba48191a95756c89296e933

Related requests:
- GET Download/Index [version] (500) - 151 occurrence(s), first: 2026-06-16T12:56:14.912Z, last: 2026-06-23T05:44:52.220Z, max duration: 327.0763ms

Related dependencies:
- n/a

Related traces:
- n/a

### System.OperationCanceledException at MyAibou.Services.Services.Responses.ResponsesService+<ProcessStream>d__38.MoveNext

- Count: 121
- First seen: 2026-06-16T07:02:54.901Z
- Last seen: 2026-06-16T12:16:42.270Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: ec1b3c57e8204569ef92acff83f5913d, 27017f4546f3a47418431a50cce6985e, 546f52fe79dc6cc544525c1cd28bd098, f43b3a19585e44979baf36c78fbab302, e1d51d73de803b4d72453bd272a86f98, 5238711e6c2abe20f35b376cc41561bb, feca447d7ed0ba88ba741306217b539e, c0ec26293c449dad4121337eec9c019a, 9501d553b535ee0f11d13cb6f19a9902, a1d12d4b234f18fed117fa8fe13a2616 (+111 more)
- Sample messages:
  - The operation was canceled.

Related requests:
- n/a

Related dependencies:
- n/a

Related traces:
- n/a

### System.UnauthorizedAccessException at MyAibou.Services.Middlewares.UserTokenAccessorMiddleware+<ReadTokenData>d__7.MoveNext

- Count: 114
- First seen: 2026-06-16T07:52:54.000Z
- Last seen: 2026-06-23T03:39:18.513Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: df3e5fff2c4c097ba9daf6c4002a326c, 8f45d820de14c813763a09d5e55b33c2, e5a1d95ce2cba1a683a41682dd3a71ca, 38e0849310cdb40ed1011e1f74d4c39f, d31acc883977497ff7be18a4e536d6dc, ccdaf972d4b366dc5a200a3c18917267, 66894b17345655271c2d4d92554fd62c, f865bf634c5d6b7a5864390ddaff53b9, b6043e584784f9e826c7b1402bc25440, 7f9073a5eb5f792ed860d15231841c79 (+104 more)
- Sample messages:
  - Unauthorized

Related requests:
- n/a

Related dependencies:
- n/a

Related traces:
- n/a

### MyAibou.Services.Exceptions.ServiceException at MyAibou.Services.Services.Responses.Pipeline.PreProcessors.AttachmentProcessingStep+<ExecuteAsync>d__13.MoveNext

- Count: 95
- First seen: 2026-06-16T07:18:31.626Z
- Last seen: 2026-06-23T03:27:57.957Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: c1ed22d234616218b4e5b15929b39970, 4a856412e742826f443272a7f3163867, eb4b51d77e92103917be1765f3c9f07b, b1f6d7679d813316786949eebe0947b4, 3183f2c07e14e48ddc928a88260e397a, 6eebaa92ed5f74e35daecd717ca80dd1, 0a9c23545d92a8d5cfe59d0254243903, 8afeabae1df4902c74e96a9931dd549c, 42339d4ca756a5974acf77dbb5b87db5, 685c1122ddf3c71ee001b73aa8f3b3b0 (+85 more)
- Sample messages:
  - Attachment 'Psoriasis Disease State cSSD（VV-MEDMAT-91598）.pptx' could not be extracted by Extractionator.
  - Attachment 'Document.pdf' could not be extracted by Extractionator.
  - Attachment 'GERMANYexp.xml' extracted document envelope exceeds the Responses input_text limit of 10485760 characters.
  - Attachment 'ItchROドシエ.pdf' could not be extracted by Extractionator.
  - Attachment 'mirum-pharmaceuticals-inc-2020-tdn-000243634.pdf' could not be extracted by Extractionator.

Related requests:
- n/a

Related dependencies:
- POST /api/AnalyzeDocument (400) - 37 occurrence(s), targets: myaibou-connect-extractionator.azurewebsites.net, max duration: 12024.5331ms
- POST /api/AnalyzeDocument (500) - 22 occurrence(s), targets: myaibou-connect-extractionator.azurewebsites.net, max duration: 6394.6253ms
- POST /api/AnalyzeDocument (504) - 20 occurrence(s), targets: myaibou-connect-extractionator.azurewebsites.net, max duration: 65995.0417ms
- POST /v1/files (500) - 1 occurrence(s), targets: api.openai.com, max duration: 15356.4418ms

Related traces:
- n/a

### System.Net.Sockets.SocketException at MyAibouConnect.Services.Clients.OpenAI.OpenAIClient+<PostAsync>d__99.MoveNext

- Count: 86
- First seen: 2026-06-16T07:47:25.177Z
- Last seen: 2026-06-22T15:24:00.439Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 84c8354aa150b90918da1c3432316353, 3c8f8ac54cd2bb6f47f319d09df0acc5, 19079031c244dfdb832307fe8dfb5c84, f6e0b69828bc0f5cf667925d92605edf, 65a472680165f8337aa669b67ed2c310, 20879f1cea88180ce2ad36b45717321c, 7cff1749c1cdf9913ee46c05d1091132, ad2fc5ec5d580d6bfe400416546a2530, 96834d055878012d09b61812aef882e1, 26f8126a3231fc51fa40c5fb75fccefb (+76 more)
- Sample messages:
  - Operation canceled

Related requests:
- n/a

Related dependencies:
- POST /v1/responses (Canceled) - 85 occurrence(s), targets: api.openai.com, us.api.openai.com, eu.api.openai.com, max duration: 124972.0955ms
- POST /workflows/5d086d48bb634ed38a7595ec2157a0b5/triggers/When_an_HTTP_request_is_received/paths/invoke (502) - 2 occurrence(s), targets: prod-12.swedencentral.logic.azure.com, max duration: 122763.4589ms
- POST /v1/files (Canceled) - 1 occurrence(s), targets: api.openai.com, max duration: 4742.1306ms

Related traces:
- n/a

### Microsoft.IdentityModel.Tokens.SecurityTokenMalformedException at MyAibou.Services.Middlewares.UserTokenAccessorMiddleware+<ReadTokenData>d__7.MoveNext

- Count: 60
- First seen: 2026-06-16T07:52:54.000Z
- Last seen: 2026-06-23T03:39:18.512Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: df3e5fff2c4c097ba9daf6c4002a326c, 8f45d820de14c813763a09d5e55b33c2, ccdaf972d4b366dc5a200a3c18917267, f865bf634c5d6b7a5864390ddaff53b9, b6043e584784f9e826c7b1402bc25440, 7f9073a5eb5f792ed860d15231841c79, a9e0d8f2a464895bd940a0a40fb883d0, d0576269bb359bd2edb1d9c9ba80450e, bc9aaa39a50d6e0dc8c2baef2d664e27, 9aa164f701c24fbf07390c7649f13f74 (+50 more)
- Sample messages:
  - IDX12709: CanReadToken() returned false. JWT is not well formed.<br>The token needs to be in JWS or JWE Compact Serialization Format. (JWS): 'EncodedHeader.EncodedPayload.EncodedSignature'. (JWE): 'EncodedProtectedHeader.EncodedEncryptedKey.EncodedInitializationVector.EncodedCiphertext.EncodedAuthenticationTag'.

Related requests:
- n/a

Related dependencies:
- n/a

Related traces:
- n/a

### System.Collections.Generic.KeyNotFoundException at MyAibouConnect.Services.Core.Services.Conversations.ConversationService+<GetConversationInternalAsync>d__25.MoveNext

- Count: 56
- First seen: 2026-06-18T12:14:43.183Z
- Last seen: 2026-06-18T12:16:30.931Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 1ca67d70e4eb04411d12cb14625e2725, 02d8bc3d9ff3ca28449d442790a39df0, 92462bc649e80d62e50ac1f909ab3895, 1d858a8092a8b26a4f380f5532722dd2, 29cd04b08bb027c4748ecaec7f019955, f62101ddc07fcb276e29b76417fc477e, 8d6324e75ec43e078b220c72c5377bdb, 57d549ff372d3835e86478760242939d, 7dc4ef06d52829d0dbd0bd1a23429240, 1b6230026593164c649452aab4682cee (+46 more)
- Sample messages:
  - Conversation with ID conv_6a3391bff36c81979d22495a76387f6a0836883f71d78cfe not found.
  - Conversation with ID conv_6a3390075eb881949d747666414f3db2098fc9804525a390 not found.
  - Conversation with ID conv_6a32e184a2e88193afc6a15a0f8505040c8f8f5c14344b33 not found.
  - Conversation with ID conv_6a32cccee39c8195b6ec08f6258bcfcf04b908694d7547e5 not found.
  - Conversation with ID conv_6a32c7b60d6c8194b28e5028e8099166012988c5ff959ad8 not found.

Related requests:
- GET Audit/GetResponseCompleteAudit [conversation_id/version] (500) - 56 occurrence(s), first: 2026-06-18T12:14:43.152Z, last: 2026-06-18T12:16:30.898Z, max duration: 51.2391ms

Related dependencies:
- n/a

Related traces:
- n/a

### Microsoft.IdentityModel.Tokens.SecurityTokenExpiredException at MyAibou.Services.Middlewares.UserTokenAccessorMiddleware+<ReadTokenData>d__7.MoveNext

- Count: 54
- First seen: 2026-06-16T18:53:50.053Z
- Last seen: 2026-06-22T23:10:41.409Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: e5a1d95ce2cba1a683a41682dd3a71ca, 38e0849310cdb40ed1011e1f74d4c39f, d31acc883977497ff7be18a4e536d6dc, 66894b17345655271c2d4d92554fd62c, 5f8ea61e63a102470c4a3654bf9eacb7, e327b2c01c9c81eedae02a2dd277a882, 2dc415f374c6d7d853617aba548667c7, 2c600417db009c9b937d6be89003064d, 6877c31774100f92c7909233d2a10366, 6a2e6a1874c60924a0dc2a780ec3cc73 (+44 more)
- Sample messages:
  - IDX10223: Lifetime validation failed. The token is expired. ValidTo (UTC): '05/29/2026 00:24:42', Current time (UTC): '06/22/2026 23:10:41'.
  - IDX10223: Lifetime validation failed. The token is expired. ValidTo (UTC): '05/29/2026 00:24:42', Current time (UTC): '06/22/2026 23:05:01'.
  - IDX10223: Lifetime validation failed. The token is expired. ValidTo (UTC): '05/29/2026 00:24:42', Current time (UTC): '06/22/2026 23:00:01'.
  - IDX10223: Lifetime validation failed. The token is expired. ValidTo (UTC): '06/22/2026 20:42:56', Current time (UTC): '06/22/2026 22:22:52'.
  - IDX10223: Lifetime validation failed. The token is expired. ValidTo (UTC): '04/13/2026 10:03:03', Current time (UTC): '06/22/2026 09:22:51'.

Related requests:
- n/a

Related dependencies:
- n/a

Related traces:
- n/a

### System.Threading.Tasks.TaskCanceledException at MyAibouConnect.Services.Core.Services.Realtime.RealtimeService+<SendWithLockAsync>d__12.MoveNext

- Count: 53
- First seen: 2026-06-16T13:11:25.987Z
- Last seen: 2026-06-21T14:54:17.593Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 9cd004c1b05599c85c0da30573a069eb, 519e65a236a28f19d987dfb6bb7874cb, e4635991e8c3b82c5283e30cbd245a9b, e3f02144f5781d896896cbd3624af3be, e1ab6b6e6c6896be991f0ba378a34c90, 68c34ea4aa9b3e70adcb506c25308f7b, 20147922186a6d5ddb5962e0e4b074cf, 44f6e01b47828b7863d34303c438d7a6, c22858f5a097e332be2ca06728c4a53c, d76a184207a172f1e5c7f56ed9ef43fd (+43 more)
- Sample messages:
  - A task was canceled.

Related requests:
- n/a

Related dependencies:
- n/a

Related traces:
- n/a

### Microsoft.Identity.Client.MsalUiRequiredException at MyAibouConnect.Services.Clients.AAD.AADClient+<GetOBOTokenAsync>d__5.MoveNext

- Count: 46
- First seen: 2026-06-16T10:53:57.637Z
- Last seen: 2026-06-23T06:33:25.741Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 6a95d6b281888e006ab313feed458419, 1761d0a5c60efcdbfabbb25853b78e97, f6b836fdc25a478ddb050bc7e6f405eb, 7c24f62a4879da5bf211d33cd5009d81, 878e3d2706e01a4da993d196f0c2e4fe, cc291cb808e06c5371598c34ac4d509e, dccdfee8c1eba7a9968b27cb5e3303e7, 289d5ddca2042d1316a7cd83b9477a82, e04b7eda7ffa169e9c2065d7a46cd21a, 20f2def124f958eff9b6c24535ed5846 (+34 more)
- Sample messages:
  - AADSTS500133: Assertion is not within its valid time range. Ensure that the access token is not expired before using it for user assertion, or request a new token. Current time: 2026-06-23T06:33:25.7148737Z, expiry time of assertion 2026-06-23T06:33:04.0000000Z. Trace ID: f5c0226d-5b2c-464d-af4e-ed19dbaf2700 Correlation ID: 04891968-d42a-4352-836c-79c66636f85c Timestamp: 2026-06-23 06:33:25Z
  - AADSTS500133: Assertion is not within its valid time range. Ensure that the access token is not expired before using it for user assertion, or request a new token. Current time: 2026-06-23T06:23:07.3740935Z, expiry time of assertion 2026-06-23T06:14:48.0000000Z. Trace ID: e0ad57fa-679b-4fe5-9d29-30f530142800 Correlation ID: 29764603-9e7c-40e0-91c8-ef7720ac66a1 Timestamp: 2026-06-23 06:23:07Z
  - AADSTS500133: Assertion is not within its valid time range. Ensure that the access token is not expired before using it for user assertion, or request a new token. Current time: 2026-06-23T04:03:02.6977782Z, expiry time of assertion 2026-06-23T03:55:17.0000000Z. Trace ID: 9324e8e8-31c8-419a-b656-9ecbb3463d00 Correlation ID: 0b7b4961-f3b2-4e15-8252-4878f6ada1de Timestamp: 2026-06-23 04:03:02Z
  - AADSTS500133: Assertion is not within its valid time range. Ensure that the access token is not expired before using it for user assertion, or request a new token. Current time: 2026-06-23T02:38:03.3798923Z, expiry time of assertion 2026-06-23T02:31:16.0000000Z. Trace ID: b6b78b82-ea5e-40ef-9c9d-14bcdfda2700 Correlation ID: 6f67c73a-9722-4544-bf26-ca7b53941df0 Timestamp: 2026-06-23 02:38:03Z
  - AADSTS500133: Assertion is not within its valid time range. Ensure that the access token is not expired before using it for user assertion, or request a new token. Current time: 2026-06-22T18:13:40.7303876Z, expiry time of assertion 2026-06-22T18:11:07.0000000Z. Trace ID: 8258f30d-d7ef-4d4f-b243-0ec5531c2200 Correlation ID: 19522967-b1e6-474c-852c-28b51699f38a Timestamp: 2026-06-22 18:13:40Z

Related requests:
- POST Responses/CreateResponse [version] (500) - 4 occurrence(s), first: 2026-06-17T11:40:20.579Z, last: 2026-06-17T12:03:53.542Z, max duration: 788.1974ms

Related dependencies:
- POST /57fdf63b-7e22-45a3-83dc-d37003163aae/oauth2/v2.0/token (400) - 49 occurrence(s), targets: login.microsoftonline.com, max duration: 907.4126ms
- POST /workflows/5d086d48bb634ed38a7595ec2157a0b5/triggers/When_an_HTTP_request_is_received/paths/invoke (504) - 1 occurrence(s), targets: prod-12.swedencentral.logic.azure.com, max duration: 128063.998ms

Related traces:
- n/a

### System.Threading.Tasks.TaskCanceledException at Azure.Core.CancellationHelper.ThrowOperationCanceledException

- Count: 38
- First seen: 2026-06-16T07:33:37.410Z
- Last seen: 2026-06-23T06:50:16.780Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: f752078c6ac4e8dd2b1a3b077ff04a3e, b7e03d86b75e392cab131ffc0e27a9d9, f124d11f4e656afa113c132f3ea7dd5a, e825e19212ec2ccf05edb33b9b69ec69, 8779590938514ddeb77abc01d09f3e68, 2a3a2b079652736dd0e155c39a088909, c7524dcae02a0f5ca842938552686888, f0800c67709c64583e3a79d13181e025, 1b0ddc9965b1db891eeda370dae574dd, ff5720e7591f40813428e7d35d7627d8 (+28 more)
- Sample messages:
  - The operation was canceled.

Related requests:
- n/a

Related dependencies:
- PUT myaibouconnect/conversation-ediscovery-updates (unknown) - 33 occurrence(s), targets: myaibouconnect.queue.core.windows.net, max duration: 54.1033ms
- QueueClient.CreateIfNotExists (unknown) - 33 occurrence(s), targets: QueueClient.CreateIfNotExists, max duration: 55.0809ms
- POST myaibouconnect/conversation-ediscovery-updates (unknown) - 5 occurrence(s), targets: myaibouconnect.queue.core.windows.net, max duration: 139.9399ms
- QueueClient.SendMessage (unknown) - 5 occurrence(s), targets: QueueClient.SendMessage, max duration: 141.6543ms

Related traces:
- n/a

### System.Net.Http.HttpIOException at MyAibou.Services.Services.Responses.ResponsesService+<ProcessStream>d__39.MoveNext

- Count: 36
- First seen: 2026-06-16T14:01:26.135Z
- Last seen: 2026-06-22T20:31:49.457Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: b9fd606feba399ccb0f1900d85d657cb, 02417b980d2138dc064e80e56fe00489, 31c2a6610a2de5b4be0010d51c4b7254, 3bfcff9c996167be90d52ec35e67da32, 5ea091cd1a21cee5b7fa89e06d34736e, 48652b1f7c7bed3b87ec206470e198f9, 6b2ff915103de868741679e65ecd2916, 0ac545914215e72615ccbb6ca873c76c, 5f009165cb73a5221573665f6b002c33, f641b482e7394d2b3df309c309c01e29 (+26 more)
- Sample messages:
  - The response ended prematurely. (ResponseEnded)

Related requests:
- n/a

Related dependencies:
- n/a

Related traces:
- n/a

### MyAibou.Services.Exceptions.ServiceException at MyAibouConnect.Services.Clients.Mcp.McpClient+<SendJsonRpcAsync>d__7.MoveNext

- Count: 23
- First seen: 2026-06-16T14:23:18.968Z
- Last seen: 2026-06-19T11:11:32.246Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 50f0fadd610edecb024fe6d04119d3d9, 015744776f6934eae0188688f25931bf, 8f31da4c1542cd794541636fdd4bdd6f, 35b4c9b294002b9f37e2d9c4e8348ee6, 4ee76e273a8a916ec56dc7f3b57d36a0, a25c678dbf380b764824c7a8c68edb19, 360afe007a9ad072ef8f7139cf219e01, 67a8481c9dd21f852646ec6d45b0dd37, 8daebea317efc58f5d250247d5369a07, dbbf9f7af93bc8aade76db6801b722a6 (+13 more)
- Sample messages:
  - Failed to call MCP tools/list on 'p8zgs9dm-7186.euw.devtunnels.ms'.
  - Failed to call MCP tools/list on 'w5s15l8x-7186.euw.devtunnels.ms'.
  - Failed to call MCP tools/list on 'vvrx8177-5158.euw.devtunnels.ms'.
  - Failed to call MCP tools/list on 'tmqxt7s8-5158.euw.devtunnels.ms'.
  - Failed to call MCP tools/list on '8pssz7cv-5093.euw.devtunnels.ms'.

Related requests:
- POST McpProxy/ListTools [version] (502) - 19 occurrence(s), first: 2026-06-18T06:43:35.718Z, last: 2026-06-19T11:11:31.873Z, max duration: 4232.3853ms

Related dependencies:
- POST /mcp (502) - 19 occurrence(s), targets: p8zgs9dm-7186.euw.devtunnels.ms, w5s15l8x-7186.euw.devtunnels.ms, vvrx8177-5158.euw.devtunnels.ms (+2 more), max duration: 3555.9893ms

Related traces:
- n/a

### System.OperationCanceledException at MyAibou.Services.Services.Responses.ResponsesService+<ProcessStreamEventAsync>d__40.MoveNext

- Count: 23
- First seen: 2026-06-16T16:12:57.241Z
- Last seen: 2026-06-23T05:13:53.202Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 9de159d15865369493f59002f317faf4, 9d0e3b1d669857aa8214226014849f74, a1ef0c82ab5cc9f682b24ba730f07020, 1bb0da24460ed4c960932bb59b6dd667, fbd016b67f037a1120d63e12120eceeb, 2af3767ad7edc9be57c11aa5458cf7b5, 0da12faacad0a966ccd399f6fbcd1c9f, 1c6ffcb02264c6f53fb9a24759725851, 9ca13ff8f10fd62b190d2e41a8b39692, fb7f624183fd40369a625a92426dcbfb (+13 more)
- Sample messages:
  - The operation was canceled.

Related requests:
- n/a

Related dependencies:
- n/a

Related traces:
- n/a

### System.Net.Sockets.SocketException at MyAibouConnect.Services.Clients.Extractionator.ExtractionatorClient+<AnalyzeDocumentAsync>d__4.MoveNext

- Count: 20
- First seen: 2026-06-16T07:44:16.738Z
- Last seen: 2026-06-23T06:40:38.730Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 81524f4eb869837dddc4e767291c4a14, 8e7184d14d3f369f3493b68c5c867e39, c103ac960b29aedf8157d97b3c0ed3c4, 1f41e908a4703c3020a52e82be8b172f, 4c54bc04da58c6401aefa8697742a92e, 9fcb905efead4593ba4c4939dc9f488f, ca64c02767d0c0b81d6c4ae10b92a411, 4c1a64179a0f7e17e698977c5b7dc621, df13e7e8517805ebaa833809eb903f08, 1a6146cded3ab98ceebcfa0cbadcc2bb (+5 more)
- Sample messages:
  - Operation canceled

Related requests:
- n/a

Related dependencies:
- POST /api/AnalyzeDocument (Canceled) - 20 occurrence(s), targets: myaibou-connect-extractionator.azurewebsites.net, max duration: 124973.4562ms

Related traces:
- n/a

### System.Threading.Tasks.TaskCanceledException at MyAibouConnect.Services.Clients.OpenAI.OpenAIClient+<PostAsync>d__99.MoveNext

- Count: 19
- First seen: 2026-06-16T14:34:00.497Z
- Last seen: 2026-06-22T22:39:32.886Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 22f31c26b2b874f0b3e046a81a2053b2, bd339e9364618afe09f1e525720c38a4, 1f9be3300846858d094fcaa2a7b58bcd, 57b9aa6cb513df39cdb9ef66503d73e4, 8965df38a00283a8d8f3df530d29db0c, d4883a2d0d4093b9812751833ae0c244, 64d3fdee889911c238240b7dfe5fc1c6, 6e3f162a5d052e4d74cbb26c37e71fca, 539ad6522982da31fd8876ab7052ce33, 2efebcb8859ff0cb19fcfc30b682ea6d (+9 more)
- Sample messages:
  - A task was canceled.

Related requests:
- n/a

Related dependencies:
- POST /workflows/5d086d48bb634ed38a7595ec2157a0b5/triggers/When_an_HTTP_request_is_received/paths/invoke (504) - 7 occurrence(s), targets: prod-12.swedencentral.logic.azure.com, max duration: 128236.8312ms
- POST /workflows/5d086d48bb634ed38a7595ec2157a0b5/triggers/When_an_HTTP_request_is_received/paths/invoke (502) - 3 occurrence(s), targets: prod-12.swedencentral.logic.azure.com, max duration: 123455.9337ms
- POST /workflows/6f140c9d3c444864a5f3dd2c495e94fc/triggers/When_an_HTTP_request_is_received/paths/invoke (504) - 2 occurrence(s), targets: prod-20.swedencentral.logic.azure.com, max duration: 127950.9582ms
- PUT myaibouconnect (409) - 2 occurrence(s), targets: myaibouconnect.blob.core.windows.net, max duration: 76.9509ms

Related traces:
- n/a

### System.InvalidOperationException at MyAibouConnect.Services.Clients.OpenAI.OpenAIClient..ctor

- Count: 16
- First seen: 2026-06-16T13:09:13.233Z
- Last seen: 2026-06-22T03:50:57.680Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 47c213bc45e32fe637cf510431502df0, f66b0a0abc34248b8927cd75f7b17d8b, 87e727fc930dfec660b0f208630e133d, ce2a7ca8768373e67aeb58c0311cde79, d5760fe9f77d0b2d8a4dbd26cc9d8291, cd53102227eb07b183d0148f3f06844d, cad2af22d38e3ae7e81e654620721f6c, d2a408126b9c3b50a7553c7d44060537, c5e4fac4c5ddbfc7c60678d2e8899038, bfbb4e3071ee10c177261aa2531d8b50 (+6 more)
- Sample messages:
  - OpenAI service is not configured for this agent.

Related requests:
- POST Mcp/GetToolDiscovery (500) - 6 occurrence(s), first: 2026-06-16T15:14:55.775Z, last: 2026-06-22T03:50:57.678Z, max duration: 9.5345ms
- GET Conversations/GetPinnedConversations [version] (500) - 4 occurrence(s), first: 2026-06-16T13:09:13.225Z, last: 2026-06-18T14:29:09.616Z, max duration: 108.778ms
- GET Conversations/Index [version] (500) - 4 occurrence(s), first: 2026-06-16T13:09:13.150Z, last: 2026-06-18T14:29:09.617Z, max duration: 109.0578ms
- POST Responses/CreateResponse [version] (500) - 2 occurrence(s), first: 2026-06-17T16:50:57.270Z, last: 2026-06-18T14:29:43.642Z, max duration: 270.7975ms

Related dependencies:
- n/a

Related traces:
- n/a

### System.Net.Sockets.SocketException at MyAibouConnect.Services.Clients.AAD.AADClient+<GetOBOTokenAsync>d__5.MoveNext

- Count: 11
- First seen: 2026-06-16T09:02:52.961Z
- Last seen: 2026-06-23T04:29:22.981Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: d824d529f83d26cfe2f83f6a2d08d6ea, 401c9b83b207f9ed732035142b9403f8, bc56490f590347cfc47a6da7fc0cd10e, 8a7e871aadbda6dab745e6657eda0c32, f78a759963a39c430074f947dbf104ad, 4d1344ac303376a13e2dabfed393953f, 650ef0a891710681c66c7c656a315ba1, 3a9cfa1d323497af36a91283ab24e081, 3048b1475a8a1e9a56f979e84ef3672f, 7e0cf9bf9cde1f0267d1bb660b5ffb9c (+1 more)
- Sample messages:
  - Connection reset by peer
  - Operation canceled

Related requests:
- GET Agents/GetRecentAgents [version] (500) - 2 occurrence(s), first: 2026-06-18T15:32:41.329Z, last: 2026-06-22T21:03:23.722Z, max duration: 95809.7889ms
- GET Agents/GetAgentPeers [agent_key/version] (500) - 1 occurrence(s), first: 2026-06-22T20:21:11.219Z, last: 2026-06-22T20:21:11.219Z, max duration: 92739.367ms

Related dependencies:
- POST /57fdf63b-7e22-45a3-83dc-d37003163aae/oauth2/v2.0/token (Faulted) - 7 occurrence(s), targets: login.microsoftonline.com, max duration: 98099.316ms
- POST /57fdf63b-7e22-45a3-83dc-d37003163aae/oauth2/v2.0/token (Canceled) - 4 occurrence(s), targets: login.microsoftonline.com, max duration: 391.4445ms

Related traces:
- n/a

### System.InvalidOperationException at MyAibouConnect.Services.Web.Middlewares.TelemetryMiddleware+<Invoke>d__2.MoveNext

- Count: 10
- First seen: 2026-06-18T09:02:14.777Z
- Last seen: 2026-06-19T01:55:29.276Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: a3c23f5dd16a258d8493df916516649d, f8843d9f8401be36f7f9bd0892f31655, 2f899061ac1deea194bed9704657086d, 1d6ea23af4c00bb92428a40c90967c2e, a8638036433fd823fcb824bfe01eb96f, f8feec749f624cc5e4d6cd48bd4acc45, 56d40a7086957f2316d4c92496df8b0e, 4eebc7966f008abd82dc339beb3ca92a, e559364f7c6e7095d67e874bccecbb2b, 898576e0495a2bf1910307efc2221d4c
- Sample messages:
  - Invalid non-ASCII or control character in header: 0x518D
  - Invalid non-ASCII or control character in header: 0x5206
  - Invalid non-ASCII or control character in header: 0x9001

Related requests:
- GET Download/Index [version] (500) - 10 occurrence(s), first: 2026-06-18T09:02:14.697Z, last: 2026-06-19T01:55:29.197Z, max duration: 85.9895ms

Related dependencies:
- n/a

Related traces:
- n/a

### FluentValidation.ValidationException at FluentValidation.AbstractValidator`1.RaiseValidationException

- Count: 9
- First seen: 2026-06-16T18:51:16.884Z
- Last seen: 2026-06-16T19:08:50.006Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 8282c8b9209c36cc0a50af00a7c38d68, aa9211abd50a4dfd96c4a969a4e708bd, ea2ae417f738dba79662e08202662bdd, c52e93b5940b3d7be3e8bd56ee90a708, a7d2567faae8fae905d31d65e42416d7, f4263a376b4548c9573768508c516a13, 57689435b3739bd91f0cf5d255280cb1, 57e479feb613caa12dca6f5b5b727c0a, db4074d2b8c37ad1c1b93d1b1f3300e7
- Sample messages:
  - Validation failed: <br> -- title: Title must be less than 100 characters Severity: Error

Related requests:
- POST Threads/CreateThreadAndRun [version] (500) - 9 occurrence(s), first: 2026-06-16T18:51:16.680Z, last: 2026-06-16T19:08:49.978Z, max duration: 205.086ms

Related dependencies:
- n/a

Related traces:
- n/a

### Microsoft.Data.SqlClient.SqlException at MyAibouConnect.Services.Repositories.DatabaseConnectionFactory+<GetConnection>d__3.MoveNext

- Count: 8
- First seen: 2026-06-23T03:24:17.610Z
- Last seen: 2026-06-23T03:24:19.617Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 03a8a6f58cb6683195f969a003efdaea, f46d61f59dd81c6c709c1b21d61e7169, db1233cb728f00746dbf2d9808af9343, dc9a526e332cea125eeea4fd8a8f73fd, ea52f6ad0e57fcc4a75b4b15e97d5bfb, 314a5199ac8a684cc453aa1d8f95da4c, d3d7bbf3c8d639421795effea3a88e05, e044101f1fac5ea7d28c2e1963863357
- Sample messages:
  - Database 'myaibou-connect-services' on server 'myaibou-connect' is not currently available.  Please retry the connection later.  If the problem persists, contact customer support, and provide them the session tracing ID of '4258D59D-E3A5-44F3-8363-903A40FD3249'.
  - Database 'myaibou-connect-services' on server 'myaibou-connect' is not currently available.  Please retry the connection later.  If the problem persists, contact customer support, and provide them the session tracing ID of '5D612D45-3CEA-46EB-896A-5C9687551B78'.
  - Database 'myaibou-connect-services' on server 'myaibou-connect' is not currently available.  Please retry the connection later.  If the problem persists, contact customer support, and provide them the session tracing ID of '8418D5DC-135A-40D3-8B32-407F50A92BE9'.
  - Database 'myaibou-connect-services' on server 'myaibou-connect' is not currently available.  Please retry the connection later.  If the problem persists, contact customer support, and provide them the session tracing ID of 'EAEA9AD6-DD12-44F4-BAB9-2FB1061F9A9B'.
  - Database 'myaibou-connect-services' on server 'myaibou-connect' is not currently available.  Please retry the connection later.  If the problem persists, contact customer support, and provide them the session tracing ID of 'E8CC968F-886A-4D99-B480-7B8EB2423566'.

Related requests:
- GET Agents/GetRecentAgents [version] (500) - 2 occurrence(s), first: 2026-06-23T03:24:18.734Z, last: 2026-06-23T03:24:19.554Z, max duration: 35.8428ms
- GET UserPreferences/GetUserPreferences [preference_key/version] (500) - 2 occurrence(s), first: 2026-06-23T03:24:19.225Z, last: 2026-06-23T03:24:19.553Z, max duration: 33.8495ms
- GET Agents/GetPinnedAgents [version] (500) - 1 occurrence(s), first: 2026-06-23T03:24:19.555Z, last: 2026-06-23T03:24:19.555Z, max duration: 63.9112ms
- GET Conversations/Index [version] (500) - 1 occurrence(s), first: 2026-06-23T03:24:19.544Z, last: 2026-06-23T03:24:19.544Z, max duration: 72.8264ms
- POST Responses/CreateResponse [version] (500) - 1 occurrence(s), first: 2026-06-23T03:24:17.536Z, last: 2026-06-23T03:24:17.536Z, max duration: 74.0897ms

Related dependencies:
- SQL: tcp:myaibou-connect.database.windows.net,1433 \| myaibou-connect-services (40613) - 4 occurrence(s), targets: tcp:myaibou-connect.database.windows.net,1433 \| myaibou-connect-services, max duration: 38.3459ms
- SQL: tcp:myaibou-connect.database.windows.net,1433 \| myaibou-connect-services (unknown) - 4 occurrence(s), targets: tcp:myaibou-connect.database.windows.net,1433 \| myaibou-connect-services, max duration: 59.6054ms

Related traces:
- n/a

### System.OperationCanceledException at MyAibouConnect.Services.Core.Services.Realtime.RealtimeConversationCoordinator+<PersistConversationItemAsync>d__4.MoveNext

- Count: 8
- First seen: 2026-06-16T13:01:14.521Z
- Last seen: 2026-06-22T11:09:33.924Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 08fee37d8756ced473fb7565c81dbb3c, 2c9c59682b1eb6b07daae18c08e12942, bf8a437a2c7c1d8aeca742637b6628ce, c900a24f8ba4a41799526d628c487ab0, af25a186629308fb79729f5b1bbc08eb, 37b1e8df086dd648dcfb7ae8093fd9fb, 1a963075b03de239ea4627fa7ab48308, 7e9ff67c5f38085a5f42a0e1a10bd97a
- Sample messages:
  - The operation was canceled.

Related requests:
- n/a

Related dependencies:
- n/a

Related traces:
- n/a

### System.ObjectDisposedException at MyAibou.Services.Services.Responses.ResponsesServiceHelpers+<WriteEventAsync>d__0.MoveNext

- Count: 6
- First seen: 2026-06-16T11:39:48.093Z
- Last seen: 2026-06-22T12:45:45.922Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 4a9544950f4c8a5126260784f6b9daae, 890f6e84d3f29828b55e0bb38b6abf2f, 85be67bda7136510144947f47717d6ee, 0a28df1fa32e4e4a580a5e0f322e30a5, c94c6f88647bee89f78fd24afc2b524e, 0f12cf6ed719b8b84ddcbd1e2c16530c
- Sample messages:
  - Cannot access a disposed object.<br>Object name: 'System.Threading.SemaphoreSlim'.

Related requests:
- n/a

Related dependencies:
- n/a

Related traces:
- n/a

### System.OperationCanceledException at MyAibouConnect.Services.Clients.AAD.AADClient+<GetOBOTokenAsync>d__5.MoveNext

- Count: 6
- First seen: 2026-06-17T13:05:47.272Z
- Last seen: 2026-06-22T12:54:02.176Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 3e1b53d68069313b7c5252f4ce37b35e, 0cc7f7d4b0c46a2fdf406a81fa80b33c, dab613341c3bd12a5e7151f3d4b11bbb, 59b73aff66518ec49bf7ae7c889bf242, 7cd8d96be2661547a12aefb5576ad1ce, 9c1c9e496835dce28027ae74a46f73c0
- Sample messages:
  - The operation was canceled.

Related requests:
- n/a

Related dependencies:
- POST /v1/responses (Canceled) - 1 occurrence(s), targets: api.openai.com, max duration: 179999.3278ms

Related traces:
- n/a

### System.IO.FileNotFoundException at MyAibouConnect.Services.Core.Services.Integration.OpenAIFileHandler+<GetBlobSasUrlAsync>d__4.MoveNext

- Count: 5
- First seen: 2026-06-16T08:26:21.899Z
- Last seen: 2026-06-16T12:05:42.327Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: f0ff90f0738802dee245bbe8e6ca4434, b332651b29f93fdbec96828389c52559, 95a158bbfb641521216ac763ff64ef49, f405050a7a17e7480c44c23ca263157d, 681947f7064c412bfe36c0aca2bca865
- Sample messages:
  - cfile_6a313c0eaf7081918f919beb67764f87
  - cfile_6a313c0eaed08191a3089e153a402bc7
  - cfile_6a31125932748191b39c01efdc947737
  - cfile_6a3112593128819195164e1e948a2477
  - cfile_6a300fdbb734819191441233b211d985

Related requests:
- GET Download/Index [version] (500) - 5 occurrence(s), first: 2026-06-16T08:26:21.817Z, last: 2026-06-16T12:05:42.245Z, max duration: 327.0274ms

Related dependencies:
- n/a

Related traces:
- n/a

### System.Net.Http.HttpIOException at MyAibou.Services.Services.Responses.ResponsesService+<ProcessStream>d__38.MoveNext

- Count: 2
- First seen: 2026-06-16T09:56:59.720Z
- Last seen: 2026-06-16T10:08:31.423Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: d12cb63cf0a9e432b3f1e0b0141d1ed6, 789c9e18dcbecaaf1cc7c32a13a9da0c
- Sample messages:
  - The response ended prematurely. (ResponseEnded)

Related requests:
- n/a

Related dependencies:
- n/a

Related traces:
- n/a

### System.Net.Sockets.SocketException at MyAibouConnect.Services.Clients.Graph.GraphClient+<>c__DisplayClass10_0+<<CheckMemberGroupsForUser>b__0>d.MoveNext

- Count: 2
- First seen: 2026-06-18T14:56:42.729Z
- Last seen: 2026-06-18T17:41:52.049Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 958b8a3d00b5c25c02c0012778337ba0, f7bbf4d03807137a5cd5b703174fcbe0
- Sample messages:
  - Operation canceled

Related requests:
- GET Agents/GetRecentAgents [version] (504) - 2 occurrence(s), first: 2026-06-18T14:56:32.547Z, last: 2026-06-18T17:41:41.932Z, max duration: 10183.5902ms

Related dependencies:
- POST /v1.0/me/checkMemberGroups (Canceled) - 2 occurrence(s), targets: graph.microsoft.com, max duration: 9998.7494ms

Related traces:
- n/a

### System.Net.Sockets.SocketException at MyAibouConnect.Services.Clients.OpenAI.OpenAIClient+<ConnectRealtimeSocketAsync>d__80.MoveNext

- Count: 2
- First seen: 2026-06-16T15:20:44.967Z
- Last seen: 2026-06-18T04:55:36.078Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 677ea9bb242b6597ce0f2b71deb74c1a, 492c73e6cffc42fbe8d7dbb571dec6d6
- Sample messages:
  - Operation canceled

Related requests:
- n/a

Related dependencies:
- GET /v1/realtime (Canceled) - 2 occurrence(s), targets: api.openai.com, max duration: 72.4802ms

Related traces:
- n/a

### System.Net.Sockets.SocketException at MyAibouConnect.Services.Web.Services.OpenAIHealthCheck+<CheckHealthAsync>d__2.MoveNext

- Count: 2
- First seen: 2026-06-19T01:53:47.166Z
- Last seen: 2026-06-19T19:29:07.172Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 822c4df3ac21ba0da59e8d3f0707120f
- Sample messages:
  - Connection reset by peer
  - Operation canceled

Related requests:
- n/a

Related dependencies:
- GET /api/v2/summary.json (Canceled) - 1 occurrence(s), targets: status.openai.com, max duration: 100003.1906ms
- GET /api/v2/summary.json (Faulted) - 1 occurrence(s), targets: status.openai.com, max duration: 4.6633ms

Related traces:
- n/a

### System.OperationCanceledException at MyAibou.Services.Services.Responses.ResponsesService+<ProcessStreamEventAsync>d__39.MoveNext

- Count: 2
- First seen: 2026-06-16T08:54:13.507Z
- Last seen: 2026-06-16T10:59:15.395Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: eff0955519d5597a618bb39ab6a08214, 8ca843f17648ac1f23f95e0e526aecfc
- Sample messages:
  - The operation was canceled.

Related requests:
- n/a

Related dependencies:
- n/a

Related traces:
- n/a

### System.Net.Sockets.SocketException at MyAibouConnect.Services.Clients.OpenAI.OpenAIClient+<>c__DisplayClass100_0`1+<<PostAsJsonAsync>b__0>d.MoveNext

- Count: 1
- First seen: 2026-06-17T21:19:09.320Z
- Last seen: 2026-06-17T21:19:09.320Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 7cd8d96be2661547a12aefb5576ad1ce
- Sample messages:
  - Operation canceled

Related requests:
- n/a

Related dependencies:
- POST /v1/responses (Canceled) - 1 occurrence(s), targets: api.openai.com, max duration: 179999.3278ms

Related traces:
- n/a

### System.Net.Sockets.SocketException at MyAibouConnect.Services.Clients.Sanity.SanityClient+<>c__DisplayClass6_0`1+<<Query>b__0>d.MoveNext

- Count: 1
- First seen: 2026-06-17T09:17:27.061Z
- Last seen: 2026-06-17T09:17:27.061Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: d688aa86b4d5c5b79f29f764317bb0f7
- Sample messages:
  - Operation canceled

Related requests:
- GET Compliance/GetTermsAndConditions [tc_id/version] (504) - 1 occurrence(s), first: 2026-06-17T09:17:17.053Z, last: 2026-06-17T09:17:17.053Z, max duration: 10031.5572ms

Related dependencies:
- POST /v2023-05-03/data/query/myaibou-connect (Canceled) - 1 occurrence(s), targets: bi4m2yex.apicdn.sanity.io, max duration: 10001.4882ms

Related traces:
- n/a

### System.ObjectDisposedException at MyAibouConnect.Services.Clients.OpenAI.OpenAIClient+<PostAsync>d__99.MoveNext

- Count: 1
- First seen: 2026-06-18T16:52:33.732Z
- Last seen: 2026-06-18T16:52:33.732Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 256300e7de11f0df4b36e695e0841f5c
- Sample messages:
  - Cannot access a disposed object.<br>Object name: 'System.Net.Security.SslStream'.

Related requests:
- n/a

Related dependencies:
- POST /v1/responses (Canceled) - 1 occurrence(s), targets: api.openai.com, max duration: 633.1184ms

Related traces:
- n/a

### System.OperationCanceledException at MyAibou.Services.Services.Responses.ResponsesInternalToolService+<ProcessToolCallAsync>d__8.MoveNext

- Count: 1
- First seen: 2026-06-22T02:31:47.074Z
- Last seen: 2026-06-22T02:31:47.074Z
- Roles: myaibou-connect-core-services-stream
- Operation IDs: 3af2bd47530c827e4fba9df892c4d6d8
- Sample messages:
  - The operation was canceled.

Related requests:
- n/a

Related dependencies:
- n/a

Related traces:
- n/a

Top Failed Requests
-----
GET Download/Index [version] (500) | Errors count: 151 | First seen: 2026-06-16T08:26:21.817Z | Last seen: 2026-06-23T05:44:52.220Z
- grouped errors:
  - exceptions: System.IO.FileNotFoundException at MyAibouConnect.Services.Core.Services.Integration.OpenAIFileHandler+<GetBlobSasUrlAsync>d__9.MoveNext - 151 occurrence(s); sample: cfile_69cce751bce48191b38b5e9bfef4ca17; first seen: 2026-06-16T12:56:14.912Z; last seen: 2026-06-23T05:44:52.521Z

POST Responses/CreateResponse [version] (500) | Errors count: 109 | First seen: 2026-06-16T07:08:06.414Z | Last seen: 2026-06-23T05:24:19.262Z
- grouped errors:
  - dependencies: POST /v1/responses (500) - 77 occurrence(s); sample: us.api.openai.com; first seen: 2026-06-16T07:08:06.414Z; last seen: 2026-06-22T22:05:08.059Z
  - dependencies: GET /v1/conversations/conv_6a304424f3d4819080b4ec23edfcb7e90d7dddb8edfa4324/items (500) - 32 occurrence(s); sample: api.openai.com; first seen: 2026-06-17T13:54:44.592Z; last seen: 2026-06-19T01:34:47.729Z

POST Responses/CreateResponse [version] (400) | Errors count: 71 | First seen: 2026-06-16T07:22:54.735Z | Last seen: 2026-06-23T06:10:57.443Z
- grouped errors:
  - dependencies: POST /v1/responses (400) - 71 occurrence(s); sample: api.openai.com; first seen: 2026-06-16T07:45:13.683Z; last seen: 2026-06-23T06:11:15.023Z

GET Audit/GetResponseCompleteAudit [conversation_id/version] (500) | Errors count: 86 | First seen: 2026-06-18T12:14:35.075Z | Last seen: 2026-06-18T12:16:42.152Z
- grouped errors:
  - exceptions: System.Collections.Generic.KeyNotFoundException at MyAibouConnect.Services.Core.Services.Conversations.ConversationService+<GetConversationInternalAsync>d__25.MoveNext - 56 occurrence(s); sample: Conversation with ID conv_6a3391bff36c81979d22495a76387f6a0836883f71d78cfe not found.; first seen: 2026-06-18T12:14:43.152Z; last seen: 2026-06-18T12:16:30.931Z
  - exceptions: MyAibou.Services.Exceptions.ClientException at MyAibouConnect.Services.Clients.BaseClient.ThrowError - 30 occurrence(s); sample: The server had an error processing your request. Sorry about that! You can retry your request, or contact us through our help center at help.openai.com if you keep seeing this error. (Please include the request ID e7610168-6aca-4e36-8056-f893033e5141 in your email.); first seen: 2026-06-18T12:14:35.075Z; last seen: 2026-06-18T12:16:44.706Z

POST Responses/CreateResponse [version] (503) | Errors count: 94 | First seen: 2026-06-17T07:25:55.001Z | Last seen: 2026-06-18T13:38:26.175Z
- grouped errors:
  - exceptions: MyAibou.Services.Exceptions.ClientException at MyAibouConnect.Services.Clients.BaseClient.ThrowError - 47 occurrence(s); sample: upstream connect error or disconnect/reset before headers. retried and the latest reset reason: remote connection failure, transport failure reason: delayed connect error: Connection refused; first seen: 2026-06-17T07:25:55.001Z; last seen: 2026-06-18T13:38:26.402Z
  - dependencies: POST /v1/conversations (503) - 47 occurrence(s); sample: api.openai.com; first seen: 2026-06-17T07:25:55.001Z; last seen: 2026-06-18T13:38:26.204Z

GET Conversations/GetConversation [conversationId/version] (500) | Errors count: 89 | First seen: 2026-06-16T17:40:43.231Z | Last seen: 2026-06-22T13:57:15.635Z
- grouped errors:
  - exceptions: MyAibou.Services.Exceptions.ClientException at MyAibouConnect.Services.Clients.BaseClient.ThrowError - 54 occurrence(s); sample: The server had an error processing your request. Sorry about that! You can retry your request, or contact us through our help center at help.openai.com if you keep seeing this error. (Please include the request ID f2905e66-9c54-431d-8d55-173bc7cda79c in your email.); first seen: 2026-06-16T17:40:43.231Z; last seen: 2026-06-22T13:57:20.870Z
  - dependencies: GET /v1/conversations/conv_6a304424f3d4819080b4ec23edfcb7e90d7dddb8edfa4324/items (500) - 35 occurrence(s); sample: api.openai.com; first seen: 2026-06-17T13:30:36.628Z; last seen: 2026-06-22T13:01:39.940Z

GET Download/Index [version] (400) | Errors count: 24 | First seen: 2026-06-16T11:55:12.587Z | Last seen: 2026-06-22T03:36:45.262Z
- grouped errors: n/a

GET Conversations/GetConversation [conversationId/version] (503) | Errors count: 22 | First seen: 2026-06-16T14:22:27.929Z | Last seen: 2026-06-22T13:15:35.937Z
- grouped errors: n/a

POST McpProxy/ListTools [version] (502) | Errors count: 19 | First seen: 2026-06-18T06:43:35.718Z | Last seen: 2026-06-19T11:11:31.873Z
- grouped errors: n/a

POST Threads/CreateThreadAndRun [version] (500) | Errors count: 9 | First seen: 2026-06-16T18:51:16.680Z | Last seen: 2026-06-16T19:08:49.978Z
- grouped errors: n/a

Unlinked Errors
-----

| OperationId / CorrelationId | Errors count | First seen | Last seen |
| --- | ---: | --- | --- |
| 1a6146cded3ab98ceebcfa0cbadcc2bb | 10 | 2026-06-18T14:50:09.073Z | 2026-06-18T14:50:11.268Z |
| 11429d9be0d09d042c83649389f7287d | 8 | 2026-06-21T01:12:45.945Z | 2026-06-21T01:12:47.250Z |
| 3d8d3249c9747c663b094a46582104e6 | 8 | 2026-06-21T01:13:33.355Z | 2026-06-21T01:13:34.293Z |
| 88f5c757db4e36623b394519f5c12095 | 8 | 2026-06-16T14:14:55.133Z | 2026-06-16T14:14:55.818Z |
| b22ff5b2ae511e4dc991694605c20b2e | 8 | 2026-06-17T21:14:46.812Z | 2026-06-17T21:15:31.807Z |
| a0931cfc581af342ff34634ae0db9220 | 7 | 2026-06-18T04:12:03.463Z | 2026-06-18T04:12:04.848Z |
| 491b2a118e2ec8467fd46c7b8dd979a6 | 6 | 2026-06-16T10:53:57.502Z | 2026-06-16T10:54:30.669Z |
| e62da1144aa31106b3672468d2692f88 | 6 | 2026-06-17T13:04:53.285Z | 2026-06-17T13:04:58.465Z |
| 07f967cb76a7f1eff332e7774ac3cc6a | 4 | 2026-06-16T14:31:44.976Z | 2026-06-16T14:34:00.497Z |
| 11bf276b02e26a53dbd2bfae680dbf99 | 4 | 2026-06-17T07:15:27.419Z | 2026-06-17T07:15:28.964Z |

### 1a6146cded3ab98ceebcfa0cbadcc2bb

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| dependencies | POST /api/AnalyzeDocument (Canceled) | 5 | 2026-06-18T14:50:09.073Z | 2026-06-18T14:50:09.080Z | myaibou-connect-extractionator.azurewebsites.net |
| exceptions | System.Net.Sockets.SocketException at MyAibouConnect.Services.Clients.Extractionator.ExtractionatorClient+<AnalyzeDocumentAsync>d__4.MoveNext | 5 | 2026-06-18T14:50:11.268Z | 2026-06-18T14:50:11.268Z | Operation canceled |

### 11429d9be0d09d042c83649389f7287d

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| exceptions | MyAibou.Services.Exceptions.ClientException at MyAibouConnect.Services.Clients.BaseClient.ThrowError | 4 | 2026-06-21T01:12:46.259Z | 2026-06-21T01:12:47.250Z | Missing mutually exclusive parameters: 'items[0].content[1]'. Ensure you are providing exactly one of: 'file_id' or 'image_url'. |
| dependencies | POST /v1/conversations/conv_6a373804481c81948558d36ce752e9cf00502eaf20f51e88/items (400) | 4 | 2026-06-21T01:12:45.945Z | 2026-06-21T01:12:47.073Z | api.openai.com |

### 3d8d3249c9747c663b094a46582104e6

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| exceptions | MyAibou.Services.Exceptions.ClientException at MyAibouConnect.Services.Clients.BaseClient.ThrowError | 4 | 2026-06-21T01:13:33.521Z | 2026-06-21T01:13:34.293Z | Missing mutually exclusive parameters: 'items[0].content[1]'. Ensure you are providing exactly one of: 'file_id' or 'image_url'. |
| dependencies | POST /v1/conversations/conv_6a373804481c81948558d36ce752e9cf00502eaf20f51e88/items (400) | 4 | 2026-06-21T01:13:33.355Z | 2026-06-21T01:13:34.128Z | api.openai.com |

### 88f5c757db4e36623b394519f5c12095

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| exceptions | MyAibou.Services.Exceptions.ClientException at MyAibouConnect.Services.Clients.BaseClient.ThrowError | 4 | 2026-06-16T14:14:55.304Z | 2026-06-16T14:14:55.818Z | Missing mutually exclusive parameters: 'items[0].content[1]'. Ensure you are providing exactly one of: 'file_id' or 'image_url'. |
| dependencies | POST /v1/conversations/conv_6a3158e0299881978b2df47ccaca9fd506815c3efe5dc444/items (400) | 4 | 2026-06-16T14:14:55.133Z | 2026-06-16T14:14:55.645Z | api.openai.com |

### b22ff5b2ae511e4dc991694605c20b2e

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| dependencies | GET /v1/containers/cntr_6a3307ec406c8191a0ef16aa562fc285051502d0b2af43e9/files/cfile_6a330e445540819184562763b7682b92/content (500) | 1 | 2026-06-17T21:14:46.888Z | 2026-06-17T21:14:46.888Z | api.openai.com |
| dependencies | GET /v1/containers/cntr_6a3307ec406c8191a0ef16aa562fc285051502d0b2af43e9/files/cfile_6a330e44555c81919bfa7c73d67038c0/content (500) | 1 | 2026-06-17T21:14:46.963Z | 2026-06-17T21:14:46.963Z | api.openai.com |
| dependencies | GET /v1/containers/cntr_6a3307ec406c8191a0ef16aa562fc285051502d0b2af43e9/files/cfile_6a330e4455708191b79215538a71905a/content (500) | 1 | 2026-06-17T21:14:46.970Z | 2026-06-17T21:14:46.970Z | api.openai.com |
| dependencies | GET /v1/containers/cntr_6a3307ec406c8191a0ef16aa562fc285051502d0b2af43e9/files/cfile_6a330e4455a88191b299811e53fb52bf/content (500) | 1 | 2026-06-17T21:14:46.980Z | 2026-06-17T21:14:46.980Z | api.openai.com |
| dependencies | GET /v1/containers/cntr_6a3307ec406c8191a0ef16aa562fc285051502d0b2af43e9/files/cfile_6a330e4455cc819199d444b440facee3/content (500) | 1 | 2026-06-17T21:14:46.984Z | 2026-06-17T21:14:46.984Z | api.openai.com |

### a0931cfc581af342ff34634ae0db9220

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| exceptions | MyAibou.Services.Exceptions.ClientException at MyAibouConnect.Services.Clients.BaseClient.ThrowError | 7 | 2026-06-18T04:12:03.463Z | 2026-06-18T04:12:04.848Z | Item with id 'msg_0b224d23528bb012006a0d19f9e99881969c22be6955742071' not found. |

### 491b2a118e2ec8467fd46c7b8dd979a6

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| exceptions | Microsoft.Identity.Client.MsalUiRequiredException at MyAibouConnect.Services.Clients.AAD.AADClient+<GetOBOTokenAsync>d__5.MoveNext | 3 | 2026-06-16T10:53:57.637Z | 2026-06-16T10:54:30.669Z | AADSTS500133: Assertion is not within its valid time range. Ensure that the access token is not expired before using it for user assertion, or request a new token. Current time: 2026-06-16T10:54:30.6505205Z, expiry time of assertion 2026-06-16T10:53:42.0000000Z. Trace ID: 381a8d53-eaa5-4f2c-ba24-04798aa13f00 Correlation ID: 7daeced7-3a63-4722-a895-595d13b40659 Timestamp: 2026-06-16 10:54:30Z |
| dependencies | POST /57fdf63b-7e22-45a3-83dc-d37003163aae/oauth2/v2.0/token (400) | 3 | 2026-06-16T10:53:57.502Z | 2026-06-16T10:54:30.562Z | login.microsoftonline.com |

### e62da1144aa31106b3672468d2692f88

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| dependencies | POST /api/AnalyzeDocument (500) | 5 | 2026-06-17T13:04:53.285Z | 2026-06-17T13:04:53.285Z | myaibou-connect-extractionator.azurewebsites.net |
| exceptions | MyAibou.Services.Exceptions.ServiceException at MyAibou.Services.Services.Responses.Pipeline.PreProcessors.AttachmentProcessingStep+<ExecuteAsync>d__13.MoveNext | 1 | 2026-06-17T13:04:58.465Z | 2026-06-17T13:04:58.465Z | Attachment 'TotalEnergies_ votre reçu de session de recharge.msg' could not be extracted by Extractionator. |

### 07f967cb76a7f1eff332e7774ac3cc6a

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| dependencies | POST /workflows/5d086d48bb634ed38a7595ec2157a0b5/triggers/When_an_HTTP_request_is_received/paths/invoke (504) | 2 | 2026-06-16T14:31:50.692Z | 2026-06-16T14:31:52.512Z | prod-12.swedencentral.logic.azure.com |
| dependencies | PUT myaibouconnect (409) | 1 | 2026-06-16T14:31:44.976Z | 2026-06-16T14:31:44.976Z | myaibouconnect.blob.core.windows.net |
| exceptions | System.Threading.Tasks.TaskCanceledException at MyAibouConnect.Services.Clients.OpenAI.OpenAIClient+<PostAsync>d__99.MoveNext | 1 | 2026-06-16T14:34:00.497Z | 2026-06-16T14:34:00.497Z | A task was canceled. |

### 11bf276b02e26a53dbd2bfae680dbf99

| Error source | Error type | Count | First seen | Last seen | Sample error text |
| --- | --- | ---: | --- | --- | --- |
| dependencies | POST /api/AnalyzeDocument (Canceled) | 2 | 2026-06-17T07:15:27.419Z | 2026-06-17T07:15:27.419Z | myaibou-connect-extractionator.azurewebsites.net |
| exceptions | System.Net.Sockets.SocketException at MyAibouConnect.Services.Clients.Extractionator.ExtractionatorClient+<AnalyzeDocumentAsync>d__4.MoveNext | 2 | 2026-06-17T07:15:28.964Z | 2026-06-17T07:15:28.964Z | Operation canceled |

