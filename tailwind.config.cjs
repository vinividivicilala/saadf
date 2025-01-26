/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter var",
          "InterVariable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        main: {
          DEFAULT: "#391e53",
        },
      },
      screens: {
        xs: "540px",
      },
    },
  },
  plugins: [],
};
