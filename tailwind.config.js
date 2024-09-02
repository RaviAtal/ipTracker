/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "card-gradient": "linear-gradient(145deg, #1e2024, #23272b)",
        "card-gradient-translate":
          "linear-gradient(to right bottom, #212428, #16181c)",
      },
      boxShadow: {
        "box-shadow": "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        "input-shadow":
          "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
      },
      colors: {
        primary: "#ff014f",
        secondary: "#c4cfde",
      },
    },
  },
  plugins: [],
};
