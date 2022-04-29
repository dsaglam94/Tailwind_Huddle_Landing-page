module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      'fontBodyCta': ['Open Sans', 'sans-serif'],
      'fontHeading': ['Poppins', 'sans-serif'],
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '978px',
      'xl': '1440px',
    },
    extend: {
      colors: {
        'pink': 'hsl(322, 100%, 66%)',
        'pinkLight': 'hsl(322, 100%, 76%)',
        'veryPaleCyan': 'hsl(193, 100%, 96%)',
        'veryDarkCyan': 'hsl(192, 100%, 9%)',
        'grayishBlue': 'hsl(208, 11%, 55%)',
      },
    },
  },
  plugins: [],
}
