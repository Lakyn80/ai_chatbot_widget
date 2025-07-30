// 📁 frontend/src/embed.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import ChatWindow from "./widget/ChatWidget";  // ✅ Správná cesta – používáme ChatWindow

// 🟢 Globální objekt, který lze spustit z HTML (např. přes window.ChatbotWidget.init({...}))
window.ChatbotWidget = {
  init: (options = {}) => {
    // ❌ Zamezíme duplikaci
    if (document.getElementById("chatbot-widget-container")) return;

    // 🔲 Vytvoření kontejneru
    const el = document.createElement("div");
    el.id = "chatbot-widget-container";
    el.style.position = "fixed";
    el.style.bottom = "24px";
    el.style.right = "24px";
    el.style.zIndex = "9999";
    el.style.boxShadow = "0 0 10px rgba(0,0,0,0.15)";
    el.style.borderRadius = "16px";
    el.style.overflow = "hidden";
    document.body.appendChild(el);

    // 🧠 Vykreslení React komponenty
    const root = ReactDOM.createRoot(el);
    root.render(
      <ChatWindow
        themeColor={options.themeColor || "#ec4899"} // Výchozí růžová
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
  }
};

// ✅ Pokud se `init` nespustí z HTML skriptu, spustíme automaticky
window.addEventListener("DOMContentLoaded", () => {
  if (window.ChatbotWidget && !document.getElementById("chatbot-widget-container")) {
    window.ChatbotWidget.init();
  }
});
