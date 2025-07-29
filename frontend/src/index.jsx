// 📁 src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./components/ChatWidget";

// ✅ Vytvoříme nový div pro widget
const widgetDiv = document.createElement("div");
document.body.appendChild(widgetDiv); // Přidáme ho do <body>

// ✅ Vyrenderujeme widget do tohoto divu
const root = ReactDOM.createRoot(widgetDiv);
root.render(<ChatWidget />);
