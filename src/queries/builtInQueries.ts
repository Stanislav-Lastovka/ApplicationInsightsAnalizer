export type BuiltInQuery = {
  id: string;
  table: "exceptions" | "traces" | "requests" | "dependencies";
  description: string;
  kql: string;
};
