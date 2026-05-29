/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#3A12A3',
          dark:   '#25006F',
          soft:   '#5522D6',
          lime:   '#D8FF00',
          gold:   '#FBBF24',
          muted:  '#756B93',
        },
      },
    },
  },
  plugins: [],
}
