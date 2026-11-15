/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        frost: '#EDF0EE',
        snow: '#F7F8F7',
        line: '#D5DBD8',
        spruce: '#17231F',
        pine: '#2C4038',
        moss: '#4E6359',
        smoke: '#5F6B66',
        ember: { DEFAULT: '#E0892B', deep: '#B5651A', glow: '#F4B66A' },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '76rem' },
    },
  },
  plugins: [],
}
