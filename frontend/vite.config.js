// 📁 frontend/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  base: "/ai_chatbot_widget/", // ✅ pro GitHub Pages
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"', // ✅ fix pro process undefined
  },
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "src/embed.jsx"),
      name: "ChatbotWidget",
      formats: ["iife"],
      fileName: () => "chat-widget.js",
    },
    rollupOptions: {
      output: {
        entryFileNames: "chat-widget.js",
      },
    },
  },
});
