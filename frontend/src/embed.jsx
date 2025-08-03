// 📁 frontend/src/embed.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./components/ChatWidget";  // ✅ PŘÍMÝ IMPORT TVÉHO KOMPLETNÍHO CHATU
import "./index.css"; // nebo "./widget.css" – co používáš

// ⬇️ Přímé vykreslení komponenty bez wrapperu
const el = document.createElement("div");
document.body.appendChild(el);
ReactDOM.createRoot(el).render(<ChatWidget />);
