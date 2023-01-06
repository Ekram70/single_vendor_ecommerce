/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2B33B",
        secondary: "#2D2D2D",
      },
    },
  },
  plugins: [],
};
