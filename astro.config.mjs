import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import jsx from '@vitejs/plugin-vue';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog7.netlify.app/",
  plugins: [jsx()],
  integrations: [mdx(),sitemap(), react({
    include: ["**/react/*"]
  }), tailwind()]
});