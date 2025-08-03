import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./components/ChatWidget";
import "./widget.css"; // Nech nebo smaž – dle potřeby

// 🟢 Globální widget pro script embed
window.ChatbotWidget = {
  init: () => {
    if (document.getElementById("chatbot-widget-container")) return;
    const el = document.createElement("div");
    el.id = "chatbot-widget-container";
    document.body.appendChild(el);

    // ✅ Používáme výchozí vzhled z ChatWidget.jsx – žádné props
    ReactDOM.createRoot(el).render(<ChatWidget />);
  },
};
