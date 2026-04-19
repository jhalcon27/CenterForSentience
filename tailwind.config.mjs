/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'csr-primary': '#9966CC',
        'csr-primary-dark': '#7a4bb0',
        'csr-black': '#0f172a',
        'csr-gray-50': '#FFF8F0',
        'csr-gray-100': '#f1f5f9',
        'csr-gray-200': '#e2e8f0',
        'csr-gray-600': '#475569',
      }
    },
  },
  plugins: [],
}
