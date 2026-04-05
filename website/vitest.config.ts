/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    environment: "node",
    globals: false,
    include: ["src/**/*.test.ts"],
    watch: false,
  },
});
