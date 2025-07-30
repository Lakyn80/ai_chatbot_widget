/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"], // ✅ Obsahuje i embed a komponenty
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out', // ✅ animace pro bublinu
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
