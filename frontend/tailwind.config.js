/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}
