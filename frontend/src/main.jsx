// 📁 src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // ✅ Stávající hlavní aplikace
import ChatWidget from './components/ChatWidget'; // ✅ Importujeme widget

// ✅ Standardní render App komponenty pro vývoj nebo demo
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ✅ Globální inicializace pro build (použití přes <script>)
window.ChatbotWidget = {
  init: ({
    themeColor = "#ec4899",
    title = "AI Náramek",
    introMessage = "Dobrý den, jak vám mohu pomoci?",
  }) => {
    const widgetContainer = document.createElement("div");
    document.body.appendChild(widgetContainer);

    ReactDOM.createRoot(widgetContainer).render(
      <ChatWidget themeColor={themeColor} title={title} introMessage={introMessage} />
    );
  },
};
