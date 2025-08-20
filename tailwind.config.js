/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
      'woman': "url('/src/assets/woman-8852668_1920.jpg')",
    },
      colors: {
        primary: '#5840ba',
        secondary: '#a4db74',
        tertiary: "#ffc71a"
      }
    },
  },
  plugins: [],
}

