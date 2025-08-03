// 📁 frontend/src/embed.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./components/ChatWidget";
import "./index.css"; // nebo widget.css

// 🔥 PŘÍMÝ RENDER do <body> – BEZ DIVU
ReactDOM.createRoot(document.body).render(<ChatWidget />);
