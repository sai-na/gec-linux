/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    extend: {

      colors: {
        firebase: '#1F2023',
        firebaseYellow: '#ffd557',
        lightYellow: '#FFD557',

        code: '#0D1117'
      },














    },
  },
  plugins: [],
}