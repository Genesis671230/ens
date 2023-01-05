/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        SansPro: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
