// 📁 frontend/src/embed.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./components/ChatWidget";
import "./widget.css"; // Tady můžeš mít vlastní Tailwind styly

window.ChatbotWidget = {
  init: (options = {}) => {
    // ✅ Neopakovatelné vložení
    if (document.getElementById("chatbot-widget-container")) return;

    // ✅ Vytvoříme plovoucí div pro bublinu vpravo dole
    const el = document.createElement("div");
    el.id = "chatbot-widget-container";
    el.style.position = "fixed";
    el.style.bottom = "24px";
    el.style.right = "24px";
    el.style.zIndex = "9999"; // vždy navrchu
    document.body.appendChild(el);

    // ✅ Vyrenderuj widget do tohoto kontejneru
    ReactDOM.createRoot(el).render(<ChatWidget {...options} />);
  },
};
