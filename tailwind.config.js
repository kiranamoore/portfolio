const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        magenta: {
          500: "#ff00ff",
        },
      },
      animation: {
        "text-scramble": "text-scramble 1.5s ease-in-out forwards",
      },
      keyframes: {
        "text-scramble": {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "50%": {
            transform: "translateY(-10px) rotateX(20deg) scale(1.1)",
            opacity: "0.5",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    },
  ],
};
