/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        gray: "#898a8d",
        subtle: "#efefef",
        black: "#010603",
        grey: "#949494",
        cream: "#f9f9f9",
        green: "#008c36",
        lightYellow: "rgba(255, 171, 46, 0.2)",
        lightGreen: "rgba(22, 192, 152, 0.2)",
        lightRed: "rgba(193, 10, 10, 0.15)",
        trans: "rgba(0, 0, 0, 0.5)",
        lightGrey: "rgba(235, 235, 235, 0.4)",
        fairyGreen: "rgba(0, 140, 54, 0.06)",
        // "red-bg": "#e11d48",
        // "green-bg": "#DCFCE7",
        // "blue-light": "#EFF4FF",
        // "red-clor": "#e11d48",
      },
      fontFamily: {
        heading: ["Poppins"],
        workbody: ["Work Sans,"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
