module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sky-green": "#CDFFD6",
        "dark-green": "#63B663",
        "soft-gray": "#616060",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        subtlePulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1", filter: "drop-shadow(0 0 0px #facc15)" },
          "50%": { transform: "scale(1.3)", opacity: "0.9", filter: "drop-shadow(0 0 6px #facc15)" },
        },
      },
      animation: {
        subtle: "subtlePulse 1.5s ease-in-out infinite",
      },
    },
  },
};
