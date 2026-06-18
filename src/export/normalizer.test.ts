import { describe, expect, it } from "vitest";
import { normalizeRecord } from "./normalizer.js";

describe("normalizeRecord", () => {
  it("prefers innermost exception messages over outer messages", () => {
    const record = normalizeRecord("exceptions", {
      TimeGenerated: "2026-06-15T10:00:00.000Z",
      OuterMessage: "Outer wrapper failed",
      InnermostMessage: "Inner database timeout"
    });

    expect(record.message).toBe("Inner database timeout");
  });
});
