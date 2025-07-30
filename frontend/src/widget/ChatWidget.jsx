// 🟣 ChatWidget.jsx – plně funkční bublina s otevřením chatu

import React, { useState } from "react";
import ChatWindow from "./ChatWindow";

export default function ChatWidget({
  introMessage = "Ahoj! Ráda ti poradím s náramky 😊",
  themeColor = "#ec4899" // Tailwind pink-500
}) {
  const [open, setOpen] = useState(false);

  const toggleChat = () => setOpen(!open);

  return (
    <>
      {/* 💬 Bublina vpravo dole */}
      <div
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer z-50"
        style={{ backgroundColor: themeColor }}
      >
        {open ? "Zavřít" : "Chat o náramcích"}
      </div>

      {/* 🪟 Okno chatu */}
      {open && (
        <div className="fixed bottom-16 right-4 z-50">
          <ChatWindow introMessage={introMessage} themeColor={themeColor} />
        </div>
      )}
    </>
  );
}
