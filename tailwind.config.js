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
      colors: {
        'an-dark-green': '#46635e',
        'an-middle-green': '#97b089',
        'an-light-green': '#c6d9a1',
        'an-dark-brown': '#61473a',
        'an-middle-brown': '#96534a',
        'an-light-brown': '#c99a70',
        'an-dark-blue': '#416484',
        'an-middle-blue': '#6396b3',
        'an-light-blue': '#9dc2ec',
        'an-red': '#973041',
        'an-orange': '#c9683b',
        'an-yellow': '#e5bc6a',
        'an-maize': '#e1b578',
      },
      fontFamily: {
        'amarante': ['Amarante'],
      },
      cursor: {
        crosshair: 'crosshair',
      },
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
