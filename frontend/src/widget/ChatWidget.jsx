import React from "react";
import ChatWindow from "./ChatWindow";

export default function ChatWidget({ themeColor = "#ec4899", title = "AI Náramek", introMessage }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 shadow-lg rounded-xl border border-pink-400">
      <div className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-t-xl">
        {title}
      </div>
      <ChatWindow themeColor={themeColor} introMessage={introMessage} />
    </div>
  );
}
