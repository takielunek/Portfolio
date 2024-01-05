/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greay: "#5a5a5a",
        burgundy: "#76291F",
      },

      fontFamily: {
        caveat: ["Caveat", "cursive"],
        cinzel: ["Cinzel", "serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
};
