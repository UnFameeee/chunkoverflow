/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./public/**/*.{js,css}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#72d1a8',
        'primary-dark': '#5bb892',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            p: {
              marginTop: '0.75em',
              marginBottom: '0.75em',
              '&:first-child': {
                marginTop: 0,
              },
              '&:last-child': {
                marginBottom: 0,
              }
            },
            'p + p': {
              marginTop: '1em',
            },
            a: {
              color: '#72d1a8',
              '&:hover': {
                color: '#5bb892',
              },
            },
            h1: {
              color: '#1f2937',
            },
            h2: {
              color: '#1f2937',
            },
            h3: {
              color: '#1f2937',
            },
            strong: {
              color: '#1f2937',
              fontWeight: '600',
            },
            code: {
              color: '#1f2937',
              backgroundColor: '#f3f4f6',
              padding: '0.25rem',
              borderRadius: '0.25rem',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: '#1f2937',
              color: '#e5e7eb',
              overflow: 'auto',
              padding: '1rem',
              borderRadius: '0.5rem',
            },
            ul: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            li: {
              marginTop: '0.25em',
              marginBottom: '0.25em',
            },
            em: {
              fontStyle: 'italic',
            },
            'ul': {
              listStyleType: 'none',
              padding: 0,
              margin: 0,
            },
            'li': {
              position: 'relative',
              paddingLeft: '1.5em',
              marginBottom: '0.5em',
            },
            'li:before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: '0.5em',
              width: '0.5em',
              height: '0.5em',
              backgroundColor: '#72d1a8',
              borderRadius: '50%',
            },
            'h3': {
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '0.75em',
            },
            'p': {
              marginBottom: '0.75em',
              lineHeight: '1.6',
            }
          },
        },
      },
      sm: {
        css: {
          fontSize: '0.875rem',
          'h3': {
            fontSize: '1.1rem',
          },
          'li': {
            marginBottom: '0.25em',
          },
          'li:before': {
            top: '0.4em',
            width: '0.4em',
            height: '0.4em',
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 