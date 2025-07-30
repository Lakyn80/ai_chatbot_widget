// 📁 frontend/src/widget/ChatWindow.jsx
import React, { useState } from "react";

export default function ChatWindow({ themeColor, introMessage }) {
  const [messages, setMessages] = useState([{ sender: "bot", text: introMessage }]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const res = await fetch("https://aichatbotwidget-production.up.railway.app/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMsg = { sender: "bot", text: data.response };
    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <div className="p-4 bg-white text-sm">
      <div className="space-y-2 mb-3 max-h-64 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-xl ${
              msg.sender === "user"
                ? "bg-pink-100 text-right ml-auto w-fit"
                : "bg-pink-200 text-left mr-auto w-fit"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border border-pink-300 rounded-full px-3 py-1 text-sm focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Napište zprávu..."
        />
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-full text-sm"
          onClick={sendMessage}
        >
          Odeslat
        </button>
      </div>
    </div>
  );
}
