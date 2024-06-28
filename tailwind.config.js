/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        pear: '#DDF247',
        logoutFont: 'rgba(221, 242, 71, 0.6)',
        dimWhite: 'rgba(255, 255, 255, 0.6)',
        blackBG: '#111111',
        dark_jungle_green: '#1d1d1d',
        onxy: '#161616',
        fontGray: '#888888',
        darkGray: '#a5a5a5',
        placeHolder: '#818181',
        dimGray: '#626262',
        borderColor: '#343434',
        gray: '#e5e5e5',
        error: '#FB3766',
        red: '#FF0000',
      },
    },
  },
  plugins: [],
};
