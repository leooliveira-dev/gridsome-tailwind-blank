module.exports = {
  purge: [],
  theme: {
    container: {
      center: true
      padding: {
        default: "1rem";
        phoneL: "2rem";
        desktop: "0"
      }
    }
    screens: {
      "phoneS": "320px",
      "phoneM": "375px",
      "phoneL": "425px",
      "phoneXL": "640px",
      "tablet": "768px",
      "laptopS": "1024px",
      "laptopL": "1280px",
      "desktop": "1440px"
    },
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
