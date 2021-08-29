module.exports = {
  purge: ["./src/pages/**/*.js", "./src/components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: "#0B0E11",
        lightGray: "#14151A",
        brightYellow: "#25AD78",
        lightWhite: "#E6E8C9",
      },
      fontFamily: {
        plex: "'IBM Plex Sans', monospace",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
