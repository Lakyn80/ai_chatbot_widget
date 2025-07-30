// 📁 vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // ✅ DŮLEŽITÉ: přidáno kvůli path.resolve

export default defineConfig({
  plugins: [react()],
  base: "/ai_chatbot_widget/", // ✅ cesta pro GitHub Pages
  build: {
    outDir: "../docs",         // ✅ výstup do /docs pro GitHub Pages
    emptyOutDir: false,        // ✅ nezmazat celý docs při buildu
    lib: {
      entry: path.resolve(__dirname, "src/embed.jsx"),  // ✅ vstupní soubor
      name: "ChatbotWidget",
      fileName: () => "chat-widget.js",
      formats: ["umd"],        // ✅ univerzální modul pro použití přes <script>
    },
    rollupOptions: {
      external: ["react", "react-dom"],  // ✅ React a ReactDOM se očekávají globálně
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  define: {
    "process.env.NODE_ENV": '"production"', // ✅ náhrada env proměnné pro build
  }
});
