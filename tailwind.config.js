const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Optima', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      keyframes: {
        fadeout: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      animation: {
        fadeout: 'fadeout 1s both',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
