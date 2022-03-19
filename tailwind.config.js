module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'phone': '400px',
    },
    backgroundImage: {
      'layout-image': "url('/src/assets/fondo.png')",
    },
    extend: {},
  },
  plugins: [],
}
