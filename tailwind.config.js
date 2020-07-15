const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enable: true,
    content: ['./app/templates/index.html']
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Apercu Regular', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
