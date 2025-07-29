// frontend/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ai_chatbot_widget/", // 👈 Název repozitáře na GitHubu
  build: {
    outDir: "../docs", // 👈 Výstup pro GitHub Pages
    emptyOutDir: true,
    lib: {
      entry: "./src/embed.js", // 👈 Entry point widgetu
      name: "ChatbotWidget",
      fileName: () => "chat-widget.js",
      formats: ["iife"],
    },
    rollupOptions: {
      output: {
        globals: {
          react: "React",
          "react-dom/client": "ReactDOM",
        },
      },
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
