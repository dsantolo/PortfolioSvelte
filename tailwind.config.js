const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Comfortaa', ...defaultTheme.fontFamily.sans, 'SF Pro'],
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
      },
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
        gradientflow: {
          '0%': {
            backgroundPosition: '0%',
          },
          '50%': {
            backgroundPosition: '100%',
          },
          '100%': {
            backgroundPosition: '0%',
          },
        },
      },
      animation: {
        fadeout: 'fadeout 1s both',
        gradientflow: '10s gradientflow infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
