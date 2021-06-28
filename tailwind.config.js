module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    fontFamily: {
      display: ['DM Sans', 'sans-serif'],
      body: ['Space Mono', 'sans-serif'],
    },
    colors: {
      green: {
        light: '#0F854E',
        dark: '#1A4430',
      },
      thematic: {
        cordscrobbler: {
          light: '#E31B23',
          dark: '#6C0D11',
        },
        gera: {
          light: '#9B47D7',
          dark: '#4F1D72',
        },
        covidmunicipal: {
          light: '#305FF0',
          dark: '#394364',
        },
        dinesdonkey: {
          light: '#2B62CA',
          dark: '#253741',
        },
        rusbe: {
          light: '#C62828',
          dark: '#8E0000',
        },
        pelejo: {
          light: '#AC2E30',
          dark: '#6F3536',
        },
      },
      blue: {
        dark: '#004F68',
        DEFAULT: '#155E74'
      },
      pearl: '#FFFDF8',
    },
    extend: {
        inset: {
          '-42/100': '42%',
          '-45/100': '45%',
        },
        width: {
          'fit': 'fit-content',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
