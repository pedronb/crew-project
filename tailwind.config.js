const { transform } = require("typescript");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBackground: "#242424",
        customText: "#ffffff",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(100vh) scale(1)" },
          "100%": { transform: "translateY(-100vh) scale (0.5)" },
        },
      },
      animation: {
        float: "float linear infinite",
      },
    },
  },
  plugins: [],
};
