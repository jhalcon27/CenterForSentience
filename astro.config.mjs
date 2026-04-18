/** @type {import('astro').Config} */
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://centerforsentience.org',
  integrations: [tailwind()]
});
