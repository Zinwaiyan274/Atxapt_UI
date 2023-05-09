/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary:"#830909",
        redDark:"#370303"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  varients:{
    scrollbar:['rounded']
  }
}

