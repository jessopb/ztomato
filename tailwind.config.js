const plugin = require('tailwindcss/plugin')


module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: (theme) => ({
      center: true,
      padding: {
        default: theme("spacing.4"),
        sm: theme("spacing.5"),
        lg: theme("spacing.6"),
        xl: theme("spacing.8"),
      },
    }),
    // colors: {
    //   sonic: {
    //     light: '#DDDDDD',
    //     DEFAULT: '#DDDDDD',
    //     dark: '#009eeb',
    //   },
    // },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'body': { background: '#e8e6e6', width: '100%', height: '100%', },
      })
    }),
    plugin(function({ addUtilities, theme }) {
      const newUtilities = {
        '.p-top-full': {
          'padding-top': '100%',
        },
        'bg-salsa': {
          ':hover': { bgColor: '#FF0000' }
        }
      };

      addUtilities(newUtilities, ['responsive'])
    }),
  ],
}
