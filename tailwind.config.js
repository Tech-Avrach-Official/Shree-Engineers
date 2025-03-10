/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(255, 234, 0)",
        secondary: "rgb(255, 73, 73)",
        thirdary: "rgb(26, 255, 0)", // ✅ Use direct color instead of var()
      },
    },
  },
  plugins: [],
};
