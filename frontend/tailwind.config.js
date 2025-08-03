// 📁 frontend/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // ✅ Sleduj všechny HTML a JS/JSX soubory v projektu
  content: [
    "./index.html",                // hlavní HTML soubor
    "./src/**/*.{js,jsx,ts,tsx}",  // všechny komponenty, widgety a embed
  ],
  theme: {
    extend: {
      // ✅ Vlastní animace (např. pro fade-in efekt)
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  // ✅ Přidej pluginy pokud budeš chtít (např. forms, typography...)
  plugins: [],
};
