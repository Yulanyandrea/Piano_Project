// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        PlayfairDisplay: ["Shadows Into Light ", "cursive"],
      },
      spacing: {
        16: "4.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
