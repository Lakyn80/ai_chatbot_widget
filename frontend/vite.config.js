// 📁 frontend/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // 🌐 Adresář GitHub Pages (název repozitáře)
  base: "/ai_chatbot_widget/",

  build: {
    // 📁 Výstupní složka pro GitHub Pages
    outDir: "../docs",

    // ✅ ZABRÁNÍ smazání vlastních souborů jako index.html nebo init-chat-widget.js
    emptyOutDir: false,

    // ⚙️ Build knihovny jako IIFE (pro <script src="...">)
    lib: {
      entry: "./src/embed.jsx",     // Vstupní bod pro widget
      name: "ChatbotWidget",        // Globální název: window.ChatbotWidget
      fileName: () => "chat-widget.js",
      formats: ["iife"]
    },

    rollupOptions: {
      // 📦 Tyto knihovny NEbudou zabaleny do výsledného souboru
      external: ["react", "react-dom", "react-dom/client"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-dom/client": "ReactDOM"
        }
      }
    }
  },

  // 🧠 Předání environment proměnných (např. pro React 19 warningy)
  define: {
    "process.env.NODE_ENV": '"production"',
  }
});
