// 📁 frontend/src/embed.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./components/ChatWidget";

window.ChatbotWidget = {
  init: (options = {}) => {
    if (document.getElementById("chatbot-widget-container")) return;

    // 🟣 Dynamicky přidáme CSS soubor (chat-widget.css)
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = `${options.basePath || "/ai_chatbot_widget"}/chat-widget.css`;
    document.head.appendChild(styleLink);

    // 🟢 Vytvoření kontejneru
    const el = document.createElement("div");
    el.id = "chatbot-widget-container";
    document.body.appendChild(el);

    // 🟢 Vykreslení widgetu
    ReactDOM.createRoot(el).render(<ChatWidget {...options} />);
  },
};
