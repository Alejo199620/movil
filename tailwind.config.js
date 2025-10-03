/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        primary: "#6AB04A", // Verde suave (natural, fresco)
        secundary: {
          DEFAULT: "#F39C12", // Naranja cálido
          100: "#F6B93B",
          200: "#E67E22",
        },
        terciary: "#F8C471", // Amarillo pastel
        background: "#FAF9F6", // Fondo claro tipo beige
      },
      fontFamily: {
        "lato-regular": ["Lato-Regular", "sans-serif"],
        "lato-black": ["Lato-Black", "sans-serif"],
        "lato-italic": ["Lato-Italic", "sans-serif"],
        "lato-bold": ["Lato-Bold", "sans-serif"],
      },
    },
    plugins: [],
  },
};
