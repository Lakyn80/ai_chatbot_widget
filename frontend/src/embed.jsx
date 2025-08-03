// 📁 frontend/src/embed.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./components/ChatWidget";
import "./widget.css";

// 🔁 Musí vytvořit globální objekt, který najde HTML přes <script>
window.ChatbotWidget = {
  init: (options = {}) => {
    if (document.getElementById("chatbot-widget-container")) return;

    const el = document.createElement("div");
    el.id = "chatbot-widget-container";
    document.body.appendChild(el);

    ReactDOM.createRoot(el).render(<ChatWidget {...options} />);
  },
};
