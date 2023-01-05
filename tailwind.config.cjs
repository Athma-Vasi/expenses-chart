/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        softRed: "hsl(10, 79%, 65%)",
        lightRed: "hsl(10, 85%, 75%)",
        myCyan: "hsl(186, 34%, 60%)",
        darkBrown: "hsl(25, 47%, 15%)",
        medBrown: "hsl(28, 10%, 53%)",
        myCream: "hsl(27, 66%, 92%)",
        paleOrange: "hsl(33, 100%, 98%)",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
    },
    screens: {
      sm: "375px",
      md: "1440px",
    },
  },

  plugins: [],
};
