module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        mist: "var(--mist-color)",
        silver: "var(--silver-color)",
        primary: {
          DEFAULT: "var(--primary-color-800)",
        },
        ink: "var(--ink-color)",
      },
    },
  },
  plugins: [],
};
