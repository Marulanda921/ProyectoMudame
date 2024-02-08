/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "roboto": "Josefin Sans', sans-serif"
      },
      colors: {
        "AzulCyan" : "#4487EB",
        "blancoFondo": "#F5F5F5",
        "azulvivo": "#191970",
        "azulCorpotativo": "#5485d2"
      
      },
      backgroundImage: {
        "casa": "url('/Img/casa.jpg')",
        "camion": "url('/Img/camion container.png')",
        "fondoExagonal": "url('/Img/pngwing.com.png')",
        "camion": "url('/Img/contenedor.png')"
      },

      Animation: {
        fadeIn: "fadeIn",
        fadeOut: "fadeOut",
        scaleIn: "scaleIn",
        scaleOut: "scaleOut"
      },

        keyframes: {
          fadeIn:{
            "0%":{opacity: 0},
            "100%":{opacity: 1}
          },
          fadeOut:{
            "0%":{opacity: 1},
            "100%":{opacity: 0}
          },
          scaleIn:{
            "0%": {transorm: "scale(0)"},
            "100%": {transorm: "scale(1)"}
          },
          scaleOut:{
            "0%": {transorm: "scale(1)"},
            "100%": {transorm: "scale(0)"}
          }


        }
      
    },
  },
  plugins: [
    require('tailwindcss-animated')]
}