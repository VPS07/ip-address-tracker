/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "img-desktop": "url('../src/assets/pattern-bg-desktop.png')",
        "img-mobile": "url('../src/assets/pattern-bg-mobile.png')",
      },
    },
  },
  plugins: [],
};
