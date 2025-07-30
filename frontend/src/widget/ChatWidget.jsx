// frontend/src/components/ChatWidget.jsx
import React from "react";

export default function ChatWidget({ title = "Chat", introMessage = "Jak vám mohu pomoci?", themeColor = "#ec4899" }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: themeColor,
        color: "white",
        padding: "1rem",
        borderRadius: "1rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        maxWidth: "300px",
        zIndex: 9999,
        fontFamily: "sans-serif"
      }}
    >
      <strong>{title}</strong>
      <p style={{ marginTop: "0.5rem" }}>{introMessage}</p>
      {/* Místo pro budoucí zprávy a input */}
    </div>
  );
}
