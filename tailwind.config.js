/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': "'Poppins', sans-serif",
      },
      boxShadow: {
        'talentCard': "0px 1px 30px 1px #FFFFFF",
        'talentLogo': "0px 1px 30px 1px #76d6f5",
        'button': "0px 1px 30px 1px #2b738a",
      }
    },
  },
  plugins: [],
}
