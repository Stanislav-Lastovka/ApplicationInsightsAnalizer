export type CountItem = {
  key: string;
  count: number;
};

export type TimelineBucket = {
  bucket: string;
  count: number;
};

export type OperationGroup = {
  operationId: string;
  count: number;
  firstSeen: string;
  lastSeen: string;
  roles: string[];
  messages: string[];
};

export type ErrorDetailGroup = {
  key: string;
  count: number;
  firstSeen: string;
  lastSeen: string;
  roles: string[];
  operationIds: string[];
  messages: string[];
};

export type RequestDetailGroup = {
  key: string;
  count: number;
  firstSeen: string;
  lastSeen: string;
  resultCodes: string[];
  roles: string[];
  operationIds: string[];
  urls: string[];
  averageDurationMs?: number;
  maxDurationMs?: number;
};

export type DependencyDetailGroup = {
  key: string;
  count: number;
  firstSeen: string;
  lastSeen: string;
  resultCodes: string[];
  roles: string[];
  operationIds: string[];
  targets: string[];
  averageDurationMs?: number;
  maxDurationMs?: number;
};

export type RequestErrorCorrelation = {
  request: string;
  error: string;
  errorTable: "exceptions" | "traces" | "dependencies";
  count: number;
  firstSeen: string;
  lastSeen: string;
  resultCodes: string[];
  operationIds: string[];
  messages: string[];
};

export type UnlinkedErrorGroup = {
  operationId: string;
  count: number;
  firstSeen: string;
  lastSeen: string;
  errors: Array<{
    error: string;
    errorTable: "exceptions" | "traces" | "dependencies";
    count: number;
    firstSeen: string;
    lastSeen: string;
    messages: string[];
  }>;
};

export type ErrorFocusedGroup = {
  error: string;
  count: number;
  firstSeen: string;
  lastSeen: string;
  roles: string[];
  operationIds: string[];
  messages: string[];
  relatedRequests: RequestDetailGroup[];
  relatedDependencies: DependencyDetailGroup[];
  relatedTraces: ErrorDetailGroup[];
};

export type AnalysisResult = {
  summary: {
    total: number;
    exceptions: number;
    traces: number;
    failedRequests: number;
    failedDependencies: number;
    from?: string;
    to?: string;
  };
  topProblems: CountItem[];
  topMessages: CountItem[];
  topRoles: CountItem[];
  topFailedRequests: CountItem[];
  topFailedDependencies: CountItem[];
  timeline: TimelineBucket[];
  correlatedOperations: OperationGroup[];
  exceptionDetails: ErrorDetailGroup[];
  traceDetails: ErrorDetailGroup[];
  requestDetails: RequestDetailGroup[];
  dependencyDetails: DependencyDetailGroup[];
  requestErrorCorrelations: RequestErrorCorrelation[];
  unlinkedErrors: UnlinkedErrorGroup[];
  errorFocusedGroups: ErrorFocusedGroup[];
  recommendations: string[];
};
