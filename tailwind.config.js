/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      borderWidth: {
        1: "1px",
      },
      maxWidth: {
        12: "48px",
      },
      maxHeight: {
        12: "48px",
      },
      height:{
        "1/12": "8.333333%"
      }
    },
  },
  plugins: [],
};
