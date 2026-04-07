import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";

import ColdarkHex from "./ColdarkHex.astro";

describe("ColdarkHex", () => {
  it("renders the hex value for a shared palette token", async () => {
    // eslint-disable-next-line no-magic-numbers -- Self-explanatory.
    expect.assertions(3);

    const container = await AstroContainer.create();
    const result = await container.renderToString(ColdarkHex, {
      props: { token: "coldark01" },
    });

    expect(result).toContain(">#e3eaf2</code>");
    expect(result).toContain('style="--swatch: #e3eaf2;"');
    expect(result).toContain('aria-hidden="true"');
  });

  it("renders the requested variant for an accent token", async () => {
    // eslint-disable-next-line no-magic-numbers -- Self-explanatory.
    expect.assertions(3);

    const container = await AstroContainer.create();
    const result = await container.renderToString(ColdarkHex, {
      props: { token: "coldark13", variant: "dark" },
    });

    expect(result).toContain(">#6cb8e6</code>");
    expect(result).toContain('style="--swatch: #6cb8e6;"');
    expect(result).not.toContain("#005a8e");
  });
});
