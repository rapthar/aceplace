/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#E9FB03',
        }
      },
      backgroundColor: {
        'main': '#F2F1F5'
      }
    },
  },
  plugins: [],
};