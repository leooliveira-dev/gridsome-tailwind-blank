module.exports = {
  purge: false,
  theme: {
    container: {
      center: true,
      padding:{
        phoneS: "2rem",
        phoneM: "2rem",
        phoneL: "2rem",
        phoneXL: "2rem",
        tablet: "2rem",
        laptopS: "4rem",
        laptopL: "4rem",
        laptopXL: "4rem",
        desktop: "16rem"
      }
    },
    screens: {
      "phoneS": "320px",
      "phoneM": "375px",
      "phoneL": "425px",
      "phoneXL": "640px",
      "tablet": "768px",
      "laptopS": "1024px",
      "laptopL": "1280px",
      "laptopXL": "1440px",
      "desktop": "1910px"
    },
    fill: theme => ({
      "black": theme("colors.black"),
      "white": theme("colors.white")
    }),
    stroke: theme => ({
      "black": theme("colors.black"),
      "white": theme("colors.white")
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
