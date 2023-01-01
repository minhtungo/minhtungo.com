/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'SF Pro Display',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      colors: {
        transparent: 'transparent',
        white: '#f2f2f2',
        'off-white': '#f7f8f8',
        'transparent-white': 'rgba(255, 255, 255, 0.08)',
        background: '#000000',
        grey: '#c7c8d1',
        'grey-dark': '#222326',
        'primary-text': '#c7c8d1',
      },
      spacing: {
        'navigation-height': 'var(--navigation-height)',
      },
      backgroundImage: {
        'primary-gradient':
          'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
      },
      boxShadow: {
        primary: 'rgb(80 63 205 / 50%) 0px 1px 40px',
      },
    },
  },
  plugins: [],
};
