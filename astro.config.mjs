import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import jsx from '@vitejs/plugin-vue';
import compress from "astro-compress";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://blastro.netlify.app/",
  plugins: [jsx()],
  integrations: [mdx(), sitemap(), react({
    include: ["**/react/*"]
  }), compress(), partytown()]
});