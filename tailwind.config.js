
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
],

  theme: {
  colors: {
    'black': '#0C0C0C',
    'silver': '#282828', 
    'yellow-orange': '#FFD540', 
    'white': '#FFFFFF',
    'grey': '#9B9B9B', 
    'light-yellow': '#FFF8DF'
  },

    extend: {
      gridTemplateColumns: {
        '3': '4fr 12fr 1fr',

        // Complex site-specific column configuration
        // 'footer': '200px minmax(900px, 1fr) 100px',
    },

    fontFamily:{
      'sans': ['Josefin Sans', 'sans-serif']
    }, 
  },
}
}
