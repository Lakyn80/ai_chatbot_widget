// ✅ Komponenta AI chatbota (plovoucí widget)
import React, { useState } from "react";
import { sendMessageToBot } from "../utils/api";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const botReply = await sendMessageToBot(input);
    const botMsg = { role: "bot", content: botReply };

    setMessages((prev) => [...prev, botMsg]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
        >
          💬 Chat s námi
        </button>
      ) : (
        <div className="w-80 h-[450px] bg-white border shadow-xl rounded-lg flex flex-col overflow-hidden">
          <div className="bg-blue-600 text-white p-3 font-bold flex justify-between items-center">
            <span>AI Chatbot</span>
            <button onClick={() => setOpen(false)}>✖️</button>
          </div>

          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${
                  msg.role === "user" ? "text-right" : "text-left text-gray-700"
                }`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && <div className="text-gray-400">✍️ Píšu odpověď...</div>}
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              type="text"
              className="flex-1 border rounded px-2 py-1 text-sm"
              placeholder="Zadej dotaz..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 rounded"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
