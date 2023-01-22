/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.tsx'],
  content: [
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
        code: ['Roboto Mono', 'Roboto', 'monospace'],
      },
      colors: {
        transparent: 'transparent',
        white: '#f2f2f2',
        'off-white': '#f7f8f8',
        'transparent-white': 'rgba(255, 255, 255, 0.08)',
        'transparent-whiter': 'rgba(255, 255, 255, 0.7)',
        'transparent-background-white': 'rgba(255, 255, 255, 0.8)',
        'transparent-border-black': 'rgba(38, 38, 38,0.12)',
        'transparent-black': 'rgba(38, 38, 38,0.5)',
        'transparent-background-black': 'rgba(38, 38, 38,0.95)',
        'transparent-blacker': 'rgba(38, 38, 38,0.7)',
        'transparent-black-tight': 'rgba(13, 13, 13, 0.1)',
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
      content: {
        react: "url('/icons/react.svg')",
        next: "url('/icons/next.png')",
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '15%': { transform: 'rotate(14.0deg)' },
          '30%': { transform: 'rotate(-8.0deg)' },
          '40%': { transform: 'rotate(14.0deg)' },
          '50%': { transform: 'rotate(-4.0deg)' },
          '60%': { transform: 'rotate(10.0deg)' },
          '70%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        wave: 'wave 1.5s ease-in-out infinite [origin-70% 70%]',
      },
    },
  },
  variants: {},
  plugins: [],
};
