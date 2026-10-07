/** @type {import('astro').Config} */
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

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
  redirects: {
    '/program/': '/research/',
    '/donate/': '/about/',
    '/ecosystem/': '/about/#related-work',
    '/de/program/': '/de/research/',
    '/de/donate/': '/de/about/',
    '/de/ecosystem/': '/de/about/#related-work',
    '/es/program/': '/es/research/',
    '/es/donate/': '/es/about/',
    '/es/ecosystem/': '/es/about/#related-work',
    '/fr/program/': '/fr/research/',
    '/fr/donate/': '/fr/about/',
    '/fr/ecosystem/': '/fr/about/#related-work',
    '/zh/program/': '/zh/research/',
    '/zh/donate/': '/zh/about/',
    '/zh/ecosystem/': '/zh/about/#related-work',
    '/ja/program/': '/ja/research/',
    '/ja/donate/': '/ja/about/',
    '/ja/ecosystem/': '/ja/about/#related-work',
  },
  integrations: [tailwind(), sitemap()]
});
