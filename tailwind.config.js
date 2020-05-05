module.exports = {
  theme: {
    textShadow: {
      default: '0 2px 0 #000',
      md: '0 2px 2px #000',
      h1: '0 0 3px #FF0000, 0 0 5px #0000FF',
      xl: '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      none: 'none',
      blackwhite: '1px 1px 2px white, 1px 1px 2px black',
      yelloworange: '2px 2px 3px yellow, 2px 2px 3px orange',
      outline: '2px 2px 2px black',
    },
    extend: {
      rotate: {
        '-135': '-135deg',
        '135': '135deg',
      },
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))'
      }
      /*
            translate: {
              '1/4': '25.0%',
              '-1/4': '-25.0%',
              '3/4': '75.0%',
              '-3/4': '-75.0%',
            },
            inset: {
              '1/2': '50%',
            }
   */
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-textshadow')
  ]
}
