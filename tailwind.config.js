/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },
    screens:{
      'xs': {'raw': '(min-height: 360px)'},
      'sm': '340px',
      'md': '700px',
      'lg': '1024px',
    },
  },
  plugins: [],
}

