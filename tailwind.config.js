/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        baseColor: "#1F1F21",
        secondColor: "#2196F3",
        thirdColor: "#FDC006",
      },
      fontFamily: {
        Trap: ["Trap", "sans-serif"],
      },
      fontWeight: {
        light: 400,
        medium: 500,
        bold: 600,
      },
    },
  },
  plugins: [],
};
