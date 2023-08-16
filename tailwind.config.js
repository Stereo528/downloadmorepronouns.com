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
        },
        'mobster': {
          '50': '#f8f8fa',
          '100': '#f2f2f5',
          "150": "#EDECF1",
          '200': '#e8e6ee',
          '300': '#d6d2e0',
          '400': '#bfb8cd',
          "450": "#B2A9C2",
          '500': '#a69bb7',
          '600': '#9183a4',
          '700': '#837594',
          '800': '#6b5e79',
          '850': "#61566E",
          '900': '#584e64',
          '950': '#393342',
      }
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [],

}
