/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5840ba',
        secondary: '#a4db74',
        tertiary: "#ffc71a"
      }
    },
  },
  plugins: [],
}

