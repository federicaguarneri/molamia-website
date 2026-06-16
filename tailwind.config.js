module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      colors: {
        navy: "#061A4A",
        deep: "#03112F",
        electric: "#1463FF",
        skysoft: "#EEF6FF",
        ink: "#071936",
        muted: "#5E6B8A",
      },
    },
  },
  plugins: [],
};
