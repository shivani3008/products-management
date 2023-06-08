module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        mist: "var(--mist-color)",
        silver: {
          DEFAULT: "var(--silver-color)",
        },
        primary: {
          DEFAULT: "var(--primary-color-800)",
          50: "var(--primary-color-50)",
        },
      },
    },
  },
  plugins: [],
};
