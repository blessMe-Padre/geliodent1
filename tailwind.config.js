/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',

      // ---------------------------------
      'default-black': '#000000',
      'dark-blue': '#041126',
      'blue': '#192436',
    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {
      fontFamily: {
        'bodyFont': ['archangelsk', 'regular'],
      }
    }
  },
  plugins: [],
}

