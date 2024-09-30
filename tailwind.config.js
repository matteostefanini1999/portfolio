/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        cascadaSB: ["CascadiaCodeSB", "sans-serif"],
        cascadaSL: ["CascadiaCodeSL", "sans-serif"],
      },
      fontSize: {
        sm: ["11px", "16px"],
      },
    },
  },
  plugins: [],
};
