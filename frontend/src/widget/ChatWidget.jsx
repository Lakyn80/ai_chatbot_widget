import React, { useState } from "react";

// 🟣 Hlavní komponenta ChatWindow
export default function ChatWindow({ themeColor = "#ec4899", introMessage = "Ahoj! Jak vám mohu pomoci s našimi náramky?" }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: introMessage },
  ]);
  const [input, setInput] = useState("");

  // ⏎ Odeslání zprávy
  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Simulace odpovědi (může být fetch na backend)
    const response = {
      from: "bot",
      text: "Ano, fungují! Jsem připraven odpovědět na vaše dotazy týkající se produktů a služeb naší firmy. 😊"
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, response]);
    }, 600);
  };

  return (
    <div className="w-80 h-[480px] bg-white border border-pink-300 rounded-2xl flex flex-col overflow-hidden shadow-lg animate-fade-in">
      {/* 🧠 Hlavička */}
      <div className="bg-pink-500 text-white text-center py-2 font-semibold">
        🤖 Náramkový Asistent
      </div>

      {/* 💬 Zprávy */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-pink-50 text-sm">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-2xl max-w-[85%] ${
              msg.from === "user"
                ? "ml-auto bg-pink-200 text-right"
                : "mr-auto bg-white border border-pink-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* 📥 Input */}
      <div className="p-3 bg-white border-t border-pink-200">
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 px-3 py-2 border border-pink-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
            placeholder="Napište zprávu…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm"
          >
            Odeslat
          </button>
        </div>
      </div>
    </div>
  );
}
