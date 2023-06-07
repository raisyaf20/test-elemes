/** @type {import('tailwindcss').Config} */
const color = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...color,
      primary: "#8BAC3E",
      dark: "#333333",
      secondary: "#757575",
    },
  },
  plugins: [],
};
