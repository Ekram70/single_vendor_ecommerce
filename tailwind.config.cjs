/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '350px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px'
    },
    extend: {
      colors: {
        primary: '#F2B33B',
        secondary: '#2D2D2D'
      }
    }
  },
  plugins: []
};
