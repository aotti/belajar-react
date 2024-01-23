/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.{html,js}',
    "./src/**/*.{html,js,jsx}",
    './pages/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'handWriting': ['"Indie Flower"', 'sans-serif']
    }
  },
  plugins: [],
}

