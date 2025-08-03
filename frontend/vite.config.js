// 📁 frontend/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/ai_chatbot_widget/",
  build: {
    outDir: "../docs", // GitHub Pages čte /docs
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "src/embed.jsx"),
      name: "ChatbotWidget",
      fileName: "chat-widget",
      formats: ["iife"],
    },
  },
});
