import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";

import Swatch from "./Swatch.astro";

describe("Swatch", () => {
  it("renders an accessible label for a single hex color", async () => {
    // eslint-disable-next-line no-magic-numbers -- Self-explanatory.
    expect.assertions(3);

    const container = await AstroContainer.create();
    const result = await container.renderToString(Swatch, {
      props: { hex: "#e3eaf2" },
    });

    expect(result).toContain('role="img"');
    expect(result).toContain('aria-label="Color swatch: #e3eaf2."');
    expect(result).toContain('style="--swatch: #e3eaf2;"');
  });

  it("renders multiple swatches when hex is an array", async () => {
    // eslint-disable-next-line no-magic-numbers -- Self-explanatory.
    expect.assertions(4);

    const container = await AstroContainer.create();
    const result = await container.renderToString(Swatch, {
      props: { hex: ["#e3eaf2", "#111b27"] },
    });

    expect(result).toContain('role="img"');
    expect(result).toContain('aria-label="Color swatches: #e3eaf2; #111b27."');
    expect(result).toContain('style="--swatch: #e3eaf2;"');
    expect(result).toContain('style="--swatch: #111b27;"');
  });

  it("hides decorative swatches from assistive technology", async () => {
    // eslint-disable-next-line no-magic-numbers -- Self-explanatory.
    expect.assertions(4);

    const container = await AstroContainer.create();
    const result = await container.renderToString(Swatch, {
      props: { hex: "#c22f2e", decorative: true },
    });

    expect(result).toContain('aria-hidden="true"');
    expect(result).not.toContain('role="img"');
    expect(result).not.toContain("aria-label=");
    expect(result).toContain('style="--swatch: #c22f2e;"');
  });

  it("throws when no hex values are provided", async () => {
    expect.assertions(1);

    const container = await AstroContainer.create();

    await expect(
      container.renderToString(Swatch, {
        props: { hex: [] },
      })
    ).rejects.toThrow("The `Swatch` component could not resolve any colors.");
  });
});
