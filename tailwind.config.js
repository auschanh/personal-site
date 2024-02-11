/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      
    },
    container: {
      center: true,
      // padding: "2rem"
    }
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin.cjs")],
  
}

