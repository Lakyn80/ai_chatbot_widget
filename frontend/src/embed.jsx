// 📁 frontend/src/embed.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import ChatWidget from "./components/ChatWidget";
import "./widget.css"; // volitelné styly (můžeš smazat, pokud nepoužíváš)

// 🔴 PŘÍMÉ vložení ChatWidget do DOM – bez wrapperu nebo kontejneru
const root = document.createElement("div");
document.body.appendChild(root);

ReactDOM.createRoot(root).render(<ChatWidget />);
