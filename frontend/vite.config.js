import path from "path"; // 🟩 To bylo chybějící dřív
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  base: "/ai_chatbot_widget/",
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    outDir: "../docs",
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "src/embed.jsx"),
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
