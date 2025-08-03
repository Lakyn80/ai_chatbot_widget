// 📁 frontend/src/components/ChatWidget.jsx
import React, { useState } from "react";

export default function ChatWidget({
  themeColor = "#ec4899",
  title = "🤖 AI Asistent",
  introMessage = "Ahoj! Jak vám mohu pomoci?",
  apiBaseUrl = "https://aichatbotwidget-production.up.railway.app",
}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: introMessage }]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch(`${apiBaseUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { from: "bot", text: data.response }]);
    } catch {
      setMessages((prev) => [...prev, { from: "bot", text: "❌ Chyba při komunikaci." }]);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg fixed bottom-4 right-4 z-[9999]"
      >
        {open ? "Zavřít" : "💬 Chat"}
      </button>

      {open && (
        <div className="w-80 h-[480px] bg-white border border-pink-300 rounded-2xl fixed bottom-20 right-4 z-[9999] flex flex-col overflow-hidden shadow-xl">
          <div className="text-white text-center py-2 font-semibold" style={{ backgroundColor: themeColor }}>
            {title}
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-pink-50 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
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

          <div className="p-3 bg-white border-t border-pink-200">
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 px-3 py-2 border border-pink-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                placeholder="Napiš zprávu…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
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
