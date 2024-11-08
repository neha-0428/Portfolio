// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baloo: ["Baloo Bhaijaan 2", "sans-serif"], // Make sure to wrap in quotes if there are spaces
      },
    },
  },
  plugins: [],
};
