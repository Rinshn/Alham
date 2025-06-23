// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: '#E07A5F',
        mustard: '#F2CC8F',
        charcoal: '#343A40',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}