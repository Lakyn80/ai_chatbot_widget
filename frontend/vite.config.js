import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/embed.js',
      name: 'ChatbotWidget',
      fileName: () => 'chat-widget.js',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom/client': 'ReactDOM',
        },
      },
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"', // ✅ Tohle je klíčové!
  },
});
