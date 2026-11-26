// @ts-check
import { defineConfig } from "astro/config";

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  markdown: {
    shikiConfig: {
      // Dos temas: el CSS elige uno según data-theme en <html>
      themes: { light: "github-light", dark: "github-dark-dimmed" },
    },
  },
});
