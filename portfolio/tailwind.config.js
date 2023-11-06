/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: [
          "Montserrat-Light",
          "Montserrat",
          "Montserrat-Medium",
          "Montserrat-Bold",
        ],
        roboto: ["Roboto-Regular", "Roboto-Light", "Roboto-SemiBold"],
        helvetica: ["Helvetica", "Helvetica-Light", "Helvetica-SemiBold"],
      },
    },
  },
  plugins: [],
};
