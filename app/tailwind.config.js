const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  purge: [
    './assets/**/*.vue',
  ],
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
  plugins: [
    plugin(function({ addUtilities}) {
    const buttons = {
      '.message-section': {
        'h1': {
          lineHeight: '1.1',
          fontSize: '2em',
        },
        'h2': {
          lineHeight: '2.1',
          fontSize: '1.5em'
        },
        'h3': {
          lineHeight: '3.1',
          fontSize: '1.17em'
        },
        'ul': {
          listStyleType: 'unset',
          padding: '0 1rem'
        },
          'ol': {
            padding: '0 1rem'
          }, 
        'a':{
          color: 'blue',
        },
      },
      '.ProseMirror': {
        minHeight: '150px',
        overflow: 'auto',
        maxWidth: '100%',
        maxHeight: '400px',
        borderStyle: 'solid',
        borderWidth: '2px',
        '> * + *': {
          marginTop: '0.75em'
        },
      
        'ul': {
          listStyleType: 'unset',
          padding: '0 1rem'
        },
          'ol': {
            padding: '0 1rem'
          },  
        'h1': {
          lineHeight: '1.1',
          fontSize: '2em'
        },
        'h2': {
          lineHeight: '2.1',
          fontSize: '1.5em'
        },
        'h3': {
          lineHeight: '3.1',
          fontSize: '1.17em'
        },
        'h4': {
          lineHeight: '1.1'
        },
        'h5': {
          lineHeight: '1.1'
        },
        'h6': {
          lineHeight: '1.1'
        },
      
        'code': {
          backgroundColor: 'rgba(#616161, 0.1)',
          color: '#616161'
        },
      
        'pre': {
          background: '#0D0D0D',
          color: '#FFF',
          fontFamily: 'JetBrainsMono, monospace',
          padding: '0.75rem 1rem',
          borderRadius: '0.5rem',
      
          'code': {
            color: 'inherit',
            padding: '0',
            background: 'none',
            fontSize: '0.8rem'
          },
        },
      
        'img': {
          maxWidth: '100%',
          height: 'auto',
          padding: '2px',
        },
      
        'blockquote': {
          paddingLeft: '1rem',
          borderLeft: '2px solid rgba(#0D0D0D, 0.1)',
        },
      
        'hr': {
          border: 'none',
          borderTop: '2px solid rgba(#0D0D0D, 0.1)',
          margin: '2rem 0'
        },
      },
    }
    addUtilities(buttons)
  })],
}
