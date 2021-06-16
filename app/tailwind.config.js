const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      sideBar:{
        'primary': '#0D3C44',
      },
      fontColor:{
        'primary': '#4D4D4D',
      },
      links:{
        'primary': '#3390FF', 
      },
      block:{
        working:{
          'primary': '#1DA0B5',
          'secondary': '#DDF2F4',
          },
          pending:{
          'primary': '#DE650F',
          'secondary': '#F7DFC2',
          },
          complete:{
          'primary': '#199961',
          'secondary': '#D1EDD4',
          },
      },
      tags:{
        'vidaomuerte': '#000000',
        'solicitadomanuel': '#93278F',
        'inminente': '#F15A24',
        'urgente': '#ED1E79',
        'normal': '#39B54A',
        'paso': '#999999',
        'script': '#4D4D4D',
        'proceso': '#FF931E',
        'info': '#3FA9F5',
        'estancado': '#C1272D',
        'solicitada': '#2E3192',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      orange: colors.orange,
      gray: colors.gray,
      bluegray: colors.blueGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    extend: {
      fontFamily: {
        'Barlow': ['Barlow']
    }
  }
},
  variants: {
    extend: {
      visibility: ['hover', 'focus'],
    },
  },
  plugins: [],
}
