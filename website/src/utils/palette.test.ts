import { describe, expect, it } from "vitest";

import { getPaletteHex } from "./palette";

describe("getPaletteHex", () => {
  it("returns the shared hex for common shades", () => {
    expect(getPaletteHex("coldark01")).toBe("#e3eaf2");
  });

  it("returns the requested variant for accent shades", () => {
    expect(getPaletteHex("coldark13", "cold")).toBe("#005a8e");
    expect(getPaletteHex("coldark13", "dark")).toBe("#6cb8e6");
  });

  it("throws when a variant is missing for a multi-variant token", () => {
    expect(() => getPaletteHex("coldark13")).toThrow(
      'Multiple hex values found for "coldark13". Pass a variant to select one.'
    );
  });

  it("throws when a shared token is requested with a variant", () => {
    expect(() => getPaletteHex("coldark01", "cold")).toThrow(
      'No hex value found for "coldark01" (cold).'
    );
  });
});
