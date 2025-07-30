// 📁 frontend/src/widget/ChatWindow.jsx

import React, { useState } from "react";

export default function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([
    { text: "Ahoj! Jak vám mohu pomoci s našimi náramky?", sender: "bot" },
    {
      text: "Ano, fungují! Jsem připraven odpovědět na vaše dotazy týkající se produktů a služeb naší firmy.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    // Zde můžeš později přidat odesílání na backend
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 max-h-[75vh] bg-white border border-pink-300 rounded-2xl shadow-xl z-50 flex flex-col overflow-hidden">
      {/* Hlavička */}
      <div className="bg-pink-600 text-white p-4 font-semibold flex justify-between items-center">
        <span>🎀 Náramkový asistent</span>
        <button onClick={onClose} className="text-sm hover:underline">Zavřít</button>
      </div>

      {/* Zprávy */}
      <div className="flex-1 p-3 space-y-2 overflow-y-auto bg-pink-50 text-sm">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              msg.sender === "bot"
                ? "bg-pink-100 text-gray-800"
                : "bg-pink-200 text-right text-black ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Vstup */}
      <div className="p-3 border-t bg-white flex items-center space-x-2">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          placeholder="Napište zprávu..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-500 transition-all"
        >
          Odeslat
        </button>
      </div>
    </div>
  );
}
