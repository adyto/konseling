/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'color-palette-1': '#FCECDD',
        'color-palette-2': '#FFC288',
        'color-palette-3': '#FEA82F',
        'color-palette-4': '#FF6701',
        'color-palette-5': '#3c4c66',
      },
    },
  },
  plugins: [],
};
