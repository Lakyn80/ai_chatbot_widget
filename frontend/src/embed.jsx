// 📁 frontend/src/embed.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./components/ChatWidget";
import "./widget.css"; // jen pokud používáš vlastní styly

// ✅ Vyrenderuj rovnou bez containeru, žádný wrapper!
window.ChatbotWidget = {
  init: () => {
    const root = ReactDOM.createRoot(document.body);
    root.render(<ChatWidget />);
  },
};
