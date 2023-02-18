/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        skin: {
          fill: 'var(--color-bg-fill)',
          fillDark: 'var(--color-bg-fill-muted)',
          primary: 'var(--color-text-primary)',
          title: 'var(--color-text-title)',
          accent: 'var(--color-text-accent)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
        },
      }
    },
  },
  typography: {
    DEFAULT: {
      css: {
        color: '#FFFFFF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
