import { describe, expect, it } from "vitest";
import { parseDateRange } from "./dateRange.js";

describe("parseDateRange", () => {
  it("supports relative hour ranges", () => {
    const range = parseDateRange("24h", "2026-06-15T12:00:00.000Z");

    expect(range).toEqual({
      from: "2026-06-14T12:00:00.000Z",
      to: "2026-06-15T12:00:00.000Z"
    });
  });
});
