// 📁 vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ai_chatbot_widget/",
  build: {
    outDir: "../docs",
    emptyOutDir: false,
    lib: {
      entry: "./src/embed.jsx",
      name: "ChatbotWidget",
      fileName: () => "chat-widget.js",
      formats: ["umd"] // ✅ UMD místo IIFE
    },
    rollupOptions: {
      external: ["react", "react-dom"], // ✅ nepřibaluj React
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  }
});
