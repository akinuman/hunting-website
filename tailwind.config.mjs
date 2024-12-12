/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'hunting-green': '#2C5530',
        'earth-brown': '#8B4513',
      }
    }
  },
  plugins: []
}