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
      },
      fontFamily: {
        euclid: ['"Euclid Circular A"'],
      },
    },
  },
  plugins: [],
};
