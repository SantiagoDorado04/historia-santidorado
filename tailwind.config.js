/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
          sans: ['Outfit', 'sans-serif'],
          body: ['Inter', 'sans-serif'],
      },
      colors: {
          gold: {
              400: '#facc15',
              500: '#eab308',
          },
          brand: {
              500: '#9333ea', // purple-600
              600: '#7e22ce', // purple-700
              900: '#4c1d95',
          }
      }
    }
  }
}
