import React, { useState } from "react";

// Hlavní komponenta widgetu
export default function ChatWidget({ themeColor = "#ec4899", introMessage = "Ahoj! Jak vám mohu pomoci s našimi náramky?" }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: introMessage }]);
  const [input, setInput] = useState("");

  // Odeslání zprávy
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch("https://aichatbotwidget-production.up.railway.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMsg = { from: "bot", text: data.response };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [...prev, { from: "bot", text: "❌ Chyba při komunikaci se serverem." }]);
    }
  };

  return (
    <div className="relative">
      {/* 🟣 Bublina tlačítka */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg fixed bottom-4 right-4 z-[9999]"
      >
        {open ? "Zavřít" : "💬 Chat"}
      </button>

      {/* 🟣 Okno chatu */}
      {open && (
        <div className="w-80 h-[480px] bg-white border border-pink-300 rounded-2xl fixed bottom-20 right-4 z-[9999] flex flex-col overflow-hidden shadow-xl">
          {/* Header */}
          <div className="bg-pink-500 text-white text-center py-2 font-semibold">
            🤖 Náramkový Asistent
          </div>

          {/* Zprávy */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-pink-50 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-4 py-2 rounded-2xl max-w-[85%] ${
                  msg.from === "user" ? "ml-auto bg-pink-200 text-right" : "mr-auto bg-white border border-pink-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
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
      )}
    </div>
  );
}
