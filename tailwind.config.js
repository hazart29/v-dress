/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tall': { 'min': '(min-height: 700px' },
      },
      backgroundImage: {
        'hero-patterns': "url('/background/bubbles.svg')",
        'room': "url('/background/bgroom.svg')",
      },
    },
  },
  plugins: [],
}