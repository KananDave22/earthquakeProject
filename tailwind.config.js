/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        accent: "#22c55e",
      },
    },
  },
  plugins: [],
};

