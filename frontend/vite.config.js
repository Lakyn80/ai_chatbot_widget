// 📁 vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  base: "/ai_chatbot_widget/", // 📦 důležité pro GitHub Pages
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    outDir: "docs", // 📁 kam se build ukládá
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/embed.jsx"), // 📌 embed vstup
      name: "ChatbotWidget",
      fileName: () => "chat-widget.js",
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
