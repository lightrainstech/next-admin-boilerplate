module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui']
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
