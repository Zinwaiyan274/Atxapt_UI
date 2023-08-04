/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#AA4A44",
        redDark: "#A41623",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  varients: {
    scrollbar: ["rounded"],
  },
};
