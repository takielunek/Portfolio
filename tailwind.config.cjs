/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#a6a6a6",
        burgundy: "#76291F",
        red: "#ff0000",
        green: "#2F5939",
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
