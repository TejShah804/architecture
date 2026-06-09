/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neptune-green': '#002820',
        'neptune-light': '#ced5d5',
        'neptune-accent': '#cda56b',
        'neptune-text': '#2a3331',
        'nw-teal': '#002820',
        'nw-gold': '#cda56b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
