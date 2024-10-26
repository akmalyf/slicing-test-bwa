/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xl: "1130px",
        },
        padding: {
          DEFAULT: "1.7rem",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FF9357",
        dark: {
          900: "#000000",
          800: "#010101",
          750: "#141414",
          700: "#202020",
          650: "#323437",
          600: "#A8A8A8",
        },
        border: "#353535",
      },
    },
  },
  plugins: [],
};
