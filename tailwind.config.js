/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black: "#000000",
        boton: "#000814",
        amarillo: "#FFC800"
      }
    },
  },
  plugins: [],
}
