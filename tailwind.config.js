/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
    colors: {
      darkCol: "#000111",
      gradientCol: "#181818",
    },
  },
  plugins: [require("tw-elements/dist/plugin"), require("flowbite/plugin")],
  darkMode: "media",
};
