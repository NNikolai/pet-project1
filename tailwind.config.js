module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': {'max':'480px'},
      'md': {'max':'768px'},
      'lg': {'max':'992px'},
    },
    container: {
      padding: '20px',
      center: true,
    },
    extend: {
      colors: {
        lightblack: '#4D4244',
        lightred: '#FF0D38',
        darkred: '#D70026',
        lightgray: '#747474',
        darkgray: '#272727',
        lightdark: '#454545',
      },
      boxShadow: {
        'customred': '0px 0px 30px rgba(255, 13, 56, 0.21)'
      }
    },
  },
  plugins: [],
}