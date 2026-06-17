import { describe, expect, it } from "vitest";
import { renderQueryWithOptions } from "./registry.js";

describe("renderQueryWithOptions", () => {
  it("omits role filter when role is not provided", () => {
    const query = renderQueryWithOptions("AppRequests\n{roleFilter}", {
      from: "2026-06-15T00:00:00.000Z",
      to: "2026-06-16T00:00:00.000Z"
    });

    expect(query).toBe("AppRequests\n");
  });

  it("adds an escaped AppRoleName filter", () => {
    const query = renderQueryWithOptions("AppRequests\n{roleFilter}", {
      from: "2026-06-15T00:00:00.000Z",
      to: "2026-06-16T00:00:00.000Z",
      roleName: 'api "blue"'
    });

    expect(query).toContain('| where AppRoleName == "api \\"blue\\""');
  });
});
