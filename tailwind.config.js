/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'plus': ['Plus Jakarta Sans', 'serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    colors: {
      'navy': '#060047',
      'white': '#fff',
    },
    extend: {},
  },
  plugins: [],
}

