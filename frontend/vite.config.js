// 📁 frontend/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  base: "/ai_chatbot_widget/", // 👈 důležité pro GitHub Pages
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    outDir: "../docs", // ✅ složka, kterou GitHub Pages zobrazí
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "src/embed.jsx"),
      name: "ChatbotWidget",
      fileName: "chat-widget",
      formats: ["iife"],
    },
  },
});
