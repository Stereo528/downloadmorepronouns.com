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
        'text': "#030911",
        'background': "#ebdef2",
        'primary': "#e1c4f4",
        'secondary': "#b8b7c2",
        'accent': "#8824c6",
        'text-dark': '#ebdef2',
        'background-dark': '#100028',
        'primary-dark': '#3a134e',
        'accent-dark': '#cb97ec', 
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [],
}

