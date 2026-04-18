import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://centerforsentience.org',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  integrations: [tailwind()]
});
