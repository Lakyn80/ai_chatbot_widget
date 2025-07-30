// 📁 frontend/src/widget/ChatWidget.jsx
import React from "react";
import ChatWindow from "./ChatWindow"; // 🟢 samotné okno chatu

export default function ChatWidget({ themeColor, introMessage }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[90vw] shadow-xl rounded-2xl overflow-hidden border border-pink-300 bg-white animate-fade-in">
      <ChatWindow themeColor={themeColor} introMessage={introMessage} />
    </div>
  );
}
