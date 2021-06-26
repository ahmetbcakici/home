const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          1000: "#141414",
          990: "#212121",
        },
        blueGray: colors.blueGray,
      },
      scale: {
        101: "1.01",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
