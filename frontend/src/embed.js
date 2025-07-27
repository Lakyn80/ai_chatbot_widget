import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./components/ChatWidget";

window.ChatbotWidget = {
  init: () => {
    const rootEl = document.createElement("div");
    document.body.appendChild(rootEl);
    const root = ReactDOM.createRoot(rootEl);
    root.render(React.createElement(ChatWidget));
  },
};

window.addEventListener("DOMContentLoaded", () => {
  if (window.ChatbotWidget) {
    window.ChatbotWidget.init();
  }
});
