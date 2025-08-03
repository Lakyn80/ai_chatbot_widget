// 📁 frontend/src/embed.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./components/ChatWidget";
import "./widget.css";

window.ChatbotWidget = {
  init: (options = {}) => {
    if (document.getElementById("chatbot-widget-container")) return;

    const container = document.createElement("div");
    container.id = "chatbot-widget-container";
    document.body.appendChild(container);

    ReactDOM.createRoot(container).render(<ChatWidget {...options} />);
  },
};
