/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f5',
          100: '#dcf2e7',
          200: '#bce5d2',
          300: '#8dd1b4',
          400: '#72d1a8',
          500: '#4fa883',
          600: '#3d8a6a',
          700: '#326f56',
          800: '#2b5946',
          900: '#254a3b',
        },
      },
    },
  },
  plugins: [],
}
