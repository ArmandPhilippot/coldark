import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, it } from "vitest";

import Swatch from "./Swatch.astro";

describe("Swatch", () => {
  it("renders an accessible label for a shared swatch", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Swatch, {
      props: { color: "coldark01" },
    });

    expect(result).toContain('role="img"');
    expect(result).toContain('aria-label="Color swatch: coldark01 #e3eaf2."');
    expect(result).toContain('style="--swatch: #e3eaf2;"');
  });

  it("renders multiple swatches when color is an array", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Swatch, {
      props: { color: ["coldark01", "coldark06"] },
    });

    expect(result).toContain('role="img"');
    expect(result).toContain(
      'aria-label="Color swatches: coldark01 #e3eaf2; coldark06 #111b27."'
    );
    expect(result).toContain('style="--swatch: #e3eaf2;"');
    expect(result).toContain('style="--swatch: #111b27;"');
  });

  it("renders only the requested variant for accent swatches", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Swatch, {
      props: { color: "coldark13", variant: "dark" },
    });

    expect(result).toContain(
      'aria-label="Color swatch: coldark13 dark #6cb8e6."'
    );
    expect(result).toContain('style="--swatch: #6cb8e6;"');
    expect(result).not.toContain("#005a8e");
  });

  it("hides decorative swatches from assistive technology", async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Swatch, {
      props: { color: "coldark08", variant: "cold", decorative: true },
    });

    expect(result).toContain('aria-hidden="true"');
    expect(result).not.toContain('role="img"');
    expect(result).not.toContain("aria-label=");
    expect(result).toContain('style="--swatch: #c22f2e;"');
  });
});
