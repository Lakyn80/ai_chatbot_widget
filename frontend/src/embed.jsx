// 📁 frontend/src/embed.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./components/ChatWidget"; // ✅ nyní používáme zabaleno

// 🟢 Globální inicializátor widgetu
window.ChatbotWidget = {
  init: (options = {}) => {
    // ❌ Zabránění duplikace mountu
    if (document.getElementById("chatbot-widget-container")) return;

    // 🔲 Vytvoření elementu pro mount
    const el = document.createElement("div");
    el.id = "chatbot-widget-container";
    document.body.appendChild(el);

    // 🧠 Vykreslení celé React komponenty s Tailwind styly uvnitř
    const root = ReactDOM.createRoot(el);
    root.render(
      <ChatWidget
        themeColor={options.themeColor || "#ec4899"}
        introMessage={options.introMessage || "Ahoj! Jak vám mohu pomoci s našimi náramky?"}
      />
    );
  },

  destroy: () => {
    const el = document.getElementById("chatbot-widget-container");
    if (el) {
      ReactDOM.createRoot(el).unmount();
      el.remove();
    }
  },
};

// ✅ Automatický start, pokud není voláno z HTML
window.addEventListener("DOMContentLoaded", () => {
  if (window.ChatbotWidget && !document.getElementById("chatbot-widget-container")) {
    window.ChatbotWidget.init();
  }
});
