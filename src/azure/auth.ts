import {
  AzureCliCredential,
  DefaultAzureCredential,
  DeviceCodeCredential,
  InteractiveBrowserCredential,
  type TokenCredential
} from "@azure/identity";
import type { AppConfig } from "../config/schema.js";

export type AuthConfig = AppConfig["auth"];

export function createCredential(auth: AuthConfig): TokenCredential {
  switch (auth.mode) {
    case "azureCli":
      return new AzureCliCredential({ tenantId: auth.tenantId });
    case "deviceCode":
      return new DeviceCodeCredential({
        tenantId: auth.tenantId,
        clientId: auth.clientId,
        userPromptCallback: (info) => {
          console.log(info.message);
        }
      });
    case "interactiveBrowser":
      return new InteractiveBrowserCredential({
        tenantId: auth.tenantId,
        clientId: auth.clientId
      });
    case "default":
      return new DefaultAzureCredential({ tenantId: auth.tenantId });
  }
}
