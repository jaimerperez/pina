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
        'primary': '#AADDF9',
      },
      fontColor:{
        'primary': '#000000',
      },
      buttonColor:{
        'primary': '#79C423'
      },
      links:{
        'primary': '#3390FF', 
      },
      block:{
        working:{
          'primary': '#BF95FD',
          'secondary': '#d8bffd',
          },
          pending:{
          'primary': '#FFD000',
          'secondary': '#ffe77f',
          },
          complete:{
          'primary': '#2DBF28',
          'secondary': '#96df93',
          },
      },
      boardNames:{
       'Marketing': '#F987FA',
       'Programación': '#FA7107',
       'Sistemas': '#0070B3',
       'Plataformas': '#009649',
      },
      tags:{
        'vidaomuerte': '#000000',
        'solicitadomanuel': '#662483',
        'inminente': '#E5006B',
        'urgente': '#E51A2F',
        'normal': '#79C423',
        'paso': '#999999',
        'script': '#4D4D4D',
        'proceso': '#FF931E',
        'info': '#66AADD',
        'estancado': '#EF7F7E',
        'solicitada': '#005DA1',
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
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [
    plugin(function({ addUtilities}) {
    const buttons = {
      'data-popover': {
        '1':{
        backgroundColor: 'red',
        left: 'auto',
        }
      },
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
        'li':{
          listStyleType: 'decimal',
          padding: '0 1rem'
        },
          'ol': {
            padding: '0 1rem'
          }, 
        'a':{
          color: 'blue',
        },
        'table': {
          borderCollapse: 'collapse',
          tableLayout: 'fixed',
          width: '100%',
          margin: '0',
          overflow: 'hidden',
      
          'td': {
            minWidth: '1em',
            border: '2px solid #ced4da',
            padding: '3px 5px',
            verticalAlign: 'top',
            boxSizing: 'border-box',
            position: 'relative',
      
            '> *': {
              marginBottom: '0',
            }
          },
          'th': {
            minWidth: '1em',
            border: '2px solid #ced4da',
            padding: '3px 5px',
            verticalAlign: 'top',
            boxSizing: 'border-box',
            position: 'relative',
      
            '> *': {
              marginBottom: '0',
            }
          },
      
          'th': {
            fontWeight: 'bold',
            textAlign: 'left',
            backgroundColor: '#f1f3f5',
          },
      
          '.selectedCell:after': {
            zIndex: '2',
            position: 'absolute',
            content: '',
            left: '0; right: 0; top: 0; bottom: 0',
            background: 'rgba(200, 200, 255, 0.4)',
            pointerEvents: 'none',
          },
      
          '.column-resize-handle': {
            position: 'absolute',
            right: '-2px',
            top: '0',
            bottom: '-2px',
            width: '4px',
            backgroundColor: '#adf',
            pointerEvents: 'none',
          }
        },
      
      '.tableWrapper': {
        padding: '1rem 0',
        overflowX: 'auto',
      },
      
      '.resize-cursor': {
        cursor: 'ew-resize',
        cursor: 'col-resize',
      },
      'ul[data-type="taskList"]': {
        listStyle: 'none',
        padding: '0',
      
        'li': {
          display: 'flex',
          alignItems: 'center',
      
          '> label': {
            flex: '0 0 auto',
            marginRight: '0.5rem',
          }
        }
      }
      },
      '.mention': {
        color: '#A975FF',
        backgroundColor: 'rgba(#A975FF, 0.1)',
        borderRadius: '0.3rem',
        padding: '0.1rem 0.3rem',
      },
      '.ProseMirror': {
        minHeight: '150px',
        overflow: 'auto',
        maxWidth: '100%',
        maxHeight: '400px',
        borderStyle: 'solid',
        borderWidth: '2px',
        padding: '4px',
        '> * + *': {
          marginTop: '0.75em'
        },
        'ul[data-type="taskList"]': {
          listStyle: 'none',
          padding: '0',
        
          'li': {
            display: 'flex',
            alignItems: 'center',
        
            '> label': {
              flex: '0 0 auto',
              marginRight: '0.5rem',
            }
          }
        },
        'table': {
          borderCollapse: 'collapse',
          tableLayout: 'fixed',
          width: '100%',
          margin: '0',
          overflow: 'hidden',
      
          'td': {
            minWidth: '1em',
            border: '2px solid #ced4da',
            padding: '3px 5px',
            verticalAlign: 'top',
            boxSizing: 'border-box',
            position: 'relative',
      
            '> *': {
              marginBottom: '0',
            }
          },
          'th': {
            minWidth: '1em',
            border: '2px solid #ced4da',
            padding: '3px 5px',
            verticalAlign: 'top',
            boxSizing: 'border-box',
            position: 'relative',
      
            '> *': {
              marginBottom: '0',
            }
          },
      
          'th': {
            fontWeight: 'bold',
            textAlign: 'left',
            backgroundColor: '#f1f3f5',
          },
      
          '.selectedCell:after': {
            zIndex: '2',
            position: 'absolute',
            content: '',
            left: '0; right: 0; top: 0; bottom: 0',
            background: 'rgba(200, 200, 255, 0.4)',
            pointerEvents: 'none',
          },
      
          '.column-resize-handle': {
            position: 'absolute',
            right: '-2px',
            top: '0',
            bottom: '-2px',
            width: '4px',
            backgroundColor: '#adf',
            pointerEvents: 'none',
          }
        },
      
      '.tableWrapper': {
        padding: '1rem 0',
        overflowX: 'auto',
      },
      
      '.resize-cursor': {
        cursor: 'ew-resize',
        cursor: 'col-resize',
      },
        'ul': {
          listStyleType: 'unset',
          padding: '0 1rem'
        },
        'li':{
          listStyleType: 'decimal',
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
