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
        'primary': "#b8b7c2",
        'secondary': "#e1c4f4",
        'accent': "#8824c6",
        'dark-text': '#ebdef2',
        'dark-background': '#030911',
        'dark-primary': '#b8b7c2',
        'dark-secondary': '#12051b',
        'dark-accent': '#cb97ec', 
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
    },
  },
  plugins: [],
}

