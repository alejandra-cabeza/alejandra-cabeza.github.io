/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#e60045',
        },
        secondary: {
          500: '#22262a',
          600: '#16191d',

        }
      },
    },
  },
  plugins: [],
}

