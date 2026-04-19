/** @type {import('astro').Config} */
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://centerforsentience.org',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es', 'fr', 'zh', 'ja'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [tailwind()]
});
