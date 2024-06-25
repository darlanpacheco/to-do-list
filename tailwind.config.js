/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#CCCCCC",
          dark: "#1E1E1E",
        },
        secondary: {
          DEFAULT: "#DEDEDE",
          dark: "#242424",
        },
        tertiary: {
          DEFAULT: "#EEEEEE",
          dark: "#2E2E2E",
        },
        quaternary: "#3E3E3E",
      },
    },
  },
  plugins: [],
};
