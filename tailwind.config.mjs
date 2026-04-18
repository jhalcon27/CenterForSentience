/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'csr-primary': '#9966CC',
        'csr-primary-dark': '#7a4bb0',
        'csr-bg': '#FFF8F0',
      }
    },
  },
  plugins: [],
}
