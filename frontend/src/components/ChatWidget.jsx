import React, { useState } from "react";

// ✅ Backend URL z .env.production (VITE_API_URL)
const API_URL = import.meta.env.VITE_API_URL;

export default function ChatWidget() {
  // 🟢 Vlastní styly bez závislosti na Tailwindu
  const style = `
    .chat-float {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
    }

    .chat-toggle {
      background: #2563eb;
      color: white;
      padding: 10px 16px;
      border-radius: 9999px;
      font-size: 14px;
      cursor: pointer;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      border: none;
    }

    .chat-box {
      width: 320px;
      height: 450px;
      background: white;
      border: 1px solid #ccc;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    }

    .chat-header {
      background: #2563eb;
      color: white;
      padding: 12px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .chat-messages {
      flex: 1;
      padding: 12px;
      overflow-y: auto;
      font-size: 14px;
    }

    .chat-message-user {
      text-align: right;
      margin-bottom: 6px;
    }

    .chat-message-bot {
      text-align: left;
      margin-bottom: 6px;
    }

    .chat-bubble {
      display: inline-block;
      padding: 8px 12px;
      border-radius: 12px;
      max-width: 80%;
    }

    .bubble-user {
      background: #2563eb;
      color: white;
    }

    .bubble-bot {
      background: #f3f4f6;
      color: black;
    }

    .chat-input {
      display: flex;
      border-top: 1px solid #ddd;
      padding: 8px;
      gap: 6px;
    }

    .chat-input input {
      flex: 1;
      padding: 6px 8px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 14px;
    }

    .chat-input button {
      background: #2563eb;
      color: white;
      border: none;
      border-radius: 6px;
      padding: 6px 12px;
      font-size: 14px;
      cursor: pointer;
    }
  `;

  const [open, setOpen] = useState(false);            // 🟨 Otevřený/zavřený chat
  const [messages, setMessages] = useState([]);        // 🟩 Historie zpráv
  const [input, setInput] = useState("");              // 🟧 Text ve vstupu
  const [loading, setLoading] = useState(false);       // 🔵 Načítání odpovědi

  // 🟦 Odeslání zprávy na backend
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botReply = data.response || "❌ Odpověď se nepodařilo načíst.";

      const botMsg = { role: "bot", content: botReply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errorMsg = { role: "bot", content: "⚠️ Chyba při komunikaci s API." };
      setMessages((prev) => [...prev, errorMsg]);
    }

    setLoading(false);
  };

  return (
    <div className="chat-float">
      {/* 💅 Vložené CSS */}
      <style>{style}</style>

      {!open ? (
        <button onClick={() => setOpen(true)} className="chat-toggle">
          💬 Chat s námi
        </button>
      ) : (
        <div className="chat-box">
          {/* 🔷 Hlavička */}
          <div className="chat-header">
            <span>AI Chatbot</span>
            <button onClick={() => setOpen(false)}>✖️</button>
          </div>

          {/* 💬 Zprávy */}
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.role === "user" ? "chat-message-user" : "chat-message-bot"}
              >
                <div
                  className={`chat-bubble ${
                    msg.role === "user" ? "bubble-user" : "bubble-bot"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="chat-message-bot bubble-bot chat-bubble">
                ✍️ Píšu odpověď...
              </div>
            )}
          </div>

          {/* 📝 Vstupní pole */}
          <div className="chat-input">
            <input
              type="text"
              value={input}
              placeholder="Zadej dotaz..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>➡️</button>
          </div>
        </div>
      )}
    </div>
  );
}
