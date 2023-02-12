/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#6125DF",
      },
      fontFamily: {
        // primary: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xll: "1440px",
      "3xl": "1920px",
    },
  },
  plugins: [],
}
