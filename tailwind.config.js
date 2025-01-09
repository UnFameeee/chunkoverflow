/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./public/**/*.{js,css}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#72d1a8',
        'primary-dark': '#5bb892',
      }
    },
  },
  plugins: [],
} 