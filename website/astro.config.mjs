// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://armandphilippot.github.io",
  base: "/coldark",
  integrations: [
    starlight({
      title: "Coldark",
      description:
        "Documentation for the Coldark theme, its palettes, and its variants.",
      tagline: "A blue-grey theme with light and dark versions.",
      logo: {
        src: "./src/assets/coldark-logo.svg",
        alt: "Coldark logo",
      },
      customCss: ["/src/styles/coldark.css"],
      favicon: "/favicon.svg",
      editLink: {
        baseUrl:
          "https://github.com/ArmandPhilippot/coldark/edit/main/website/",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            name: "theme-color",
            content: "#111b27",
          },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ArmandPhilippot/coldark",
        },
      ],
      sidebar: [
        { label: "Getting started", slug: "" },
        { label: "About", slug: "about" },
        { label: "Colors", slug: "colors" },
        {
          label: "Variants",
          autogenerate: { directory: "variants" },
        },
      ],
    }),
  ],
});
