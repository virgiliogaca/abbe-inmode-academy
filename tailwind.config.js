const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xxs': '300px',
      'xs': '400px',
      ...defaultTheme.screens,
    },
    backgroundImage: {
      'layout-image': "url('/src/assets/fondo.png')",
    },
    extend: {},
  },
  plugins: [],
}
