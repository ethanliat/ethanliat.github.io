/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    colors: {
      "brand-yellow": "#d3c04c",
      "brand-teal": "#6fc2b8",
      "brand-red": "#6fc2b8",
      "brand-purple": "#6fc2b8",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
};
