/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'desktop': '1380px',
        'laptop': '1024px',
        'tablet': '680px',

      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
