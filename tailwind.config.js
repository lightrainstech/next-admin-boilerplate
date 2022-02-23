module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
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
