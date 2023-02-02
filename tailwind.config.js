/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        skin: {
          fill: 'var(--color-bg-fill)',
          fillDark: 'var(--color-bg-fill-muted)',
          primary: 'var(--color-text-primary)',
          accent: 'var(--color-text-accent)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
        },
      }
    },
  },
  plugins: [],
}
