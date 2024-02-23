// Styles
import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles"
import { createVuetify } from "vuetify"
import { md3 } from 'vuetify/blueprints'

export default createVuetify({
  blueprint: md3,
  defaults: {
    global: {
      elevation: 0,
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#FFF",
          primary: "#D90D25",
          secondary: "#C00404",
          black: "#181818",
          bg: "#F2F2F2",
          disable: "#D2D2D2",
          grey: "#8A8A8A",
          green: "#02C39A",
          yellow: "#ffe700",
          info: "#0dcaf0"
        }
      },
      dark: {
        dark: true,
        colors: {
          background: "#2B2C28",
          surface: "#2B2C28",
          primary: "#CC3363",
          secondary: "#F7B05B",
        },
      },
    },
  },
});