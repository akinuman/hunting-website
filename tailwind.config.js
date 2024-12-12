/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hunting-green': '#2C5530',
        'earth-brown': '#8B4513',
        'camo-light': '#A9A778',
        'camo-dark': '#4A4B35'
      }
    }
  },
  plugins: [],
}