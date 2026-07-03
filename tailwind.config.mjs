/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'csr-primary': '#9966CC',
        'csr-primary-dark': '#7a4bb0',
        'csr-primary-light': '#b388e8',
        'csr-black': '#0f172a',
        'csr-ink': '#1e293b',
        'csr-cream': '#FFF8F0',
        'csr-charcoal': '#2A2A2E',
        'csr-gray-50': '#FFF8F0',
        'csr-gray-100': '#f1f5f9',
        'csr-gray-200': '#e2e8f0',
        'csr-gray-300': '#cbd5e1',
        'csr-gray-400': '#94a3b8',
        'csr-gray-500': '#64748b',
        'csr-gray-600': '#475569',
        'csr-gray-650': '#3f4d61',
        'csr-gray-700': '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 16px 0 rgba(15, 23, 42, 0.06)',
        'card': '0 1px 4px 0 rgba(15, 23, 42, 0.08)',
        'purple': '0 8px 32px -4px rgba(153, 102, 204, 0.25)',
      },
    },
  },
  plugins: [],
}
