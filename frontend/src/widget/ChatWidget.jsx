// 📁 frontend/src/widget/ChatWidget.jsx

import React, { useState } from "react";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-pink-600 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-xl transition-all duration-300"
        >
          💬 Chat
        </button>
      )}
      {isOpen && <ChatWindow onClose={() => setIsOpen(false)} />}
    </>
  );
}
