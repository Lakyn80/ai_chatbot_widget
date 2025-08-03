// 📁 frontend/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  base: "/ai_chatbot_widget/", // ✅ cesta pro GitHub Pages

  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },

  build: {
    outDir: "../docs",       // ✅ build jde do složky /docs
    emptyOutDir: false,      // ✅ nechá tam tvůj vlastní index.html naživu
    sourcemap: true,         // 🟢 zdroj mapy pro ladění

    lib: {
      entry: path.resolve(__dirname, "src/embed.jsx"), // ✅ vstup = React widget
      name: "ChatbotWidget",                           // ✅ název globální proměnné
      fileName: () => "chat-widget.js",                // ✅ výstupní název souboru
      formats: ["umd"],                                // ✅ univerzální modul pro <script>
    },

    rollupOptions: {
      external: ["react", "react-dom"], // ✅ nebalíme React – načítá se z CDN
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
