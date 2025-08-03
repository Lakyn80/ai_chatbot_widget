// 📁 frontend/src/embed.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./components/ChatWidget";
import "./widget.css"; // ✅ pokud máš styly navíc, jinak smaž

// 🟢 Globální widget pro volání přes <script>
window.ChatbotWidget = {
  init: (options = {}) => {
    // Neopakovatelné vložení do DOM
    if (document.getElementById("chatbot-widget-container")) return;

    const el = document.createElement("div");
    el.id = "chatbot-widget-container";
    document.body.appendChild(el);

    // 🟢 Renderujeme přesně ten tvůj komponent
    ReactDOM.createRoot(el).render(<ChatWidget {...options} />);
  },
};
