// ✅ Import React knihoven
import React from "react";
import ReactDOM from "react-dom/client";

// ✅ Import hlavní komponenty widgetu
import ChatWidget from "./components/ChatWidget";

// ✅ Definice globálního objektu pro widget (přístupný z HTML <script>)
window.ChatbotWidget = {
  // 🟢 Inicializační funkce, kterou lze volat ručně z webu
  init: (options = {}) => {
    // 🟩 Kontrola, jestli už widget nebyl vytvořen
    if (document.getElementById("chatbot-widget-container")) return;

    // 🟦 Vytvoření nového <div> kontejneru pro widget
    const rootEl = document.createElement("div");
    rootEl.id = "chatbot-widget-container"; // přidáme ID kvůli kontrole duplicity
    document.body.appendChild(rootEl);      // přidáme do těla dokumentu

    // 🟪 Vytvoření React rootu a renderování komponenty
    const root = ReactDOM.createRoot(rootEl);
    root.render(<ChatWidget {...options} />); // předáme volitelné props
  },

  // 🔴 Volitelně funkce pro odstranění widgetu
  destroy: () => {
    const el = document.getElementById("chatbot-widget-container");
    if (el) {
      ReactDOM.createRoot(el).unmount(); // odmountování React komponenty
      el.remove(); // odstranění <div>
    }
  },
};

// ✅ Automatická inicializace po načtení stránky
window.addEventListener("DOMContentLoaded", () => {
  if (window.ChatbotWidget) {
    window.ChatbotWidget.init(); // 🟢 Automaticky spustíme widget
  }
});
