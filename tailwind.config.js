/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif'],
      },
      colors: {
        'apple-dark': '#000000',
        'apple-light': '#FFFFFF',
        'apple-gray': '#F5F5F7',
        'apple-text': '#1D1D1D',
      },
    },
  },
  plugins: [],
};
