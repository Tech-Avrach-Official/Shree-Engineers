/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondry: "var(--secondry)",
        // third: "var(--third)",
        // four: "var(--four)",
        // border: "var(--border)",
        // input: "var(--input)",
        // ring: "var(--ring)",
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },// ✅ Use direct color instead of var()
      },
    },
  },
  plugins: [],
};
