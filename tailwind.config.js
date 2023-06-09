module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        mist: "var(--mist-color)",
        silver: "var(--silver-color)",
        primary: {
          900: "var(--primary-color-900)",
          DEFAULT: "var(--primary-color-800)",
        },
        ink: "var(--ink-color)",
      },
    },
  },
  plugins: [],
};
