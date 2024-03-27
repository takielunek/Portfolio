/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#a6a6a6",
        burgundy: "#76291F",
        green: "#2F5939",
        ecru: "#CBBE7C",
      },

      fontFamily: {
        caveat: ["Caveat", "cursive"],
        cinzel: ["Cinzel", "serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
    },
    screens: {
      xxs: "320px",
      xsss: "380px",
      xss: "430px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
      xxxl: "1700px",
    },
  },
  plugins: [],
};
