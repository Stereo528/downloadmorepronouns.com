/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'dull-lavender': {
          '50': '#f1f4fc',
          '100': '#e6e9f9',
          "150": "#DCE0F6",
          '200': '#d2d7f3',
          '300': '#b6bdeb',
          '400': '#9498e0',
          '450': "#898ADB",
          '500': '#807ed6',
          '600': '#6e65c6',
          '700': '#5f54ae',
          '800': '#4d468d',
          '850': "#48427F",
          '900': '#423e71',
          '950': '#272442',
        }
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [],

}
