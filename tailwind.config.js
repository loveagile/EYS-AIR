/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens: {
        md: { min: "500px" },
      },
      fontSize: {
        tiny: ["12px", "20px"],
        smtiny: ["2.4vw", "4vw"],

        mini: ["14px", "23px"],
        smmini: ["2.8vw", "4.6vw"],

        base: ["16px", "28px"],
        smbase: ["3.2vw", "5.5vw"],

        sub: ["18px", "30px"],
        smsub: ["3.6vw", "6vw"],

        large: ["27px", "40px"],
        smlarge: ["5.4vw", "8vw"],

        tit: ["32px", "40px"],
        smtit: ["6.4vw", "8vw"],
      },
      fontFamily: {
        roboto: ["Roboto"],
        apple: ["Apple Chancery"],
        avenir: ["Avenir"],
      },
      colors: {
        blue: "#77CCFF",
        green: "#55CCAA",
      },
    },
  },
  plugins: [],
};
