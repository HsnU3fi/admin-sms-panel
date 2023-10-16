/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      colors: {
        Primary: {
          b3: "#072C66",
          b2: "#0A4199",
          b1: "#0E57CC",
          DEFAULT: "#116DFF",
          w2: "#70A7FF",
          w4: "#E7F0FF",
          w5: "#F3F8FF",
        },
        Secondary: {
          b1: "#CC820E",
          b2: "#FFA311",
          w2: "#FFC870",
          w4: "#FFF6E7",
        },
        Gray: {
          b1: "#191919",
          b2: "#333333",
          b3: "#4C4C4C",
          b4: "#7F7F7F",
          b5: "#999999",
          b6: "#B2B2B2",
          b7: "#E5E5E5",
          b8: "#F2F2F2",
          b9: "#FAFAFA",
          b10: "#FFFFFF",
        },
        Error: {
          b1: "#FFA0A0",
          b2: "#FF1111",
          b3: "#CC0E0E",
          b4: "#990A0A",
          b5: "#660707",
        },
        Success: {
          b1: "#A7FFA0",
          b2: "#24FF11",
          b3: "#1DCC0E",
          b4: "#16990A",
          b5: "#0E6607",
        },
      },
      boxShadow: {
        sm: "0px 0px 19px rgba(0, 0, 0, 0.03);",
      },
    },
  },
  plugins: [],
};
