/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'header': '0 4px 7px -7px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}
