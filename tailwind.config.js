/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": "rgba(230, 247, 230, 1)",
        "custom-gray": "rgba(250, 250, 250, 1)",
        "dark-green": "rgba(0, 62, 41, 1)",
        "light-yellow": "rgba(9, 174, 9, 1)",
        "light-green": "rgba(69, 69, 69, 1)",
        "dark-color": "rgba(22, 22, 22, 1)",
      },
      fontFamily: {
        circular: "Euclid Circular A",
      },
    },
  },
  plugins: [],
};
