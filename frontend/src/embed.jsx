// ✅ Import React a ReactDOM (bude dostupný z externího CDN – viz vite.config.js)
import React from "react";
import ReactDOM from "react-dom/client";

// ✅ Hlavní komponenta chatu
import ChatWidget from "./components/ChatWidget";

// 🟢 Globální objekt widgetu – dostupný z <script> v HTML
window.ChatbotWidget = {
  // 🟩 Spuštění widgetu s volitelnými parametry
  init: (options = {}) => {
    // Pokud widget už existuje, nespouštěj znovu
    if (document.getElementById("chatbot-widget-container")) return;

    // 🧱 Vytvoření kontejneru pro React komponentu
    const el = document.createElement("div");
    el.id = "chatbot-widget-container";
    document.body.appendChild(el);

    // 🔄 React root + render komponenty
    const root = ReactDOM.createRoot(el);
    root.render(<ChatWidget {...options} />);
  },

  // 🔴 Volitelná funkce pro odstranění widgetu
  destroy: () => {
    const el = document.getElementById("chatbot-widget-container");
    if (el) {
      ReactDOM.createRoot(el).unmount(); // Odstranění komponenty z DOMu
      el.remove(); // Odstranění kontejneru
    }
  }
};

// ⚙️ Automatická inicializace po načtení stránky (pokud není ruční volání)
window.addEventListener("DOMContentLoaded", () => {
  if (window.ChatbotWidget && typeof window.ChatbotWidget.init === "function") {
    window.ChatbotWidget.init();
  }
});
