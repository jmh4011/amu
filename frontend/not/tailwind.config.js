/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B85FF",
        secondary: "#000000",
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
