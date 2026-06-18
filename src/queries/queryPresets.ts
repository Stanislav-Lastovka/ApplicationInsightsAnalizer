import type { BuiltInQuery } from "./builtInQueries.js";
import { myaibouConnectCoreServicesStreamPreset } from "./presets/myaibouConnectCoreServicesStream.js";
import { myaibouConnectIndexerPreset } from "./presets/myaibouConnectIndexer.js";

export type QueryPreset = {
  id: string;
  description: string;
  queries: BuiltInQuery[];
};

export const queryPresets: QueryPreset[] = [
  myaibouConnectCoreServicesStreamPreset,
  myaibouConnectIndexerPreset
];
