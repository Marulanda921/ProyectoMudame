/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "comforta": "Noto Serif, serif"
      },
      colors: {
        "AzulCyan" : "#4487EB",
        "blancoFondo": "#F5F5F5"
      
      },
      backgroundImage: {
        "casa": "url('/Img/casa.jpg')"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')]
}