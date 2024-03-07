/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "dark-navy": "#071121",
        navy: "#0B1C36",
      },
    },
    container: {
      center: true,
      // padding: "2rem"
    },
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
