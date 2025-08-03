import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ChatWidget from "./components/ChatWidget";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChatWidget
      themeColor="#ff66aa"
      title="Testovací Widget"
      introMessage="Vítej! Ptej se na cokoli ohledně náramků 😊"
      apiBaseUrl="https://aichatbotwidget-production.up.railway.app"
    />
  </React.StrictMode>
);
