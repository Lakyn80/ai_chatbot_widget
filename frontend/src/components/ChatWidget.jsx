import React, { useState } from "react";

// ✅ URL backendu načtená z prostředí (.env.production)
const API_URL = import.meta.env.VITE_API_URL;

export default function ChatWidget() {
  // 🎨 Vlastní stylizace (růžová a jemný vzhled)
  const style = `
    .chat-float {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
    }

    .chat-toggle {
      background: #ec4899;
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
      background: #ec4899;
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
      background: #ec4899;
      color: white;
    }

    .bubble-bot {
      background: #fce7f3;
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
      background: #ec4899;
      color: white;
      border: none;
      border-radius: 6px;
      padding: 6px 12px;
      font-size: 14px;
      cursor: pointer;
    }
  `;

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // 🧠 Odeslání dotazu na backend
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
      const botMsg = { role: "bot", content: data.response || "❌ Odpověď se nepodařilo načíst." };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      const errMsg = { role: "bot", content: "⚠️ Chyba při komunikaci s API." };
      setMessages((prev) => [...prev, errMsg]);
    }

    setLoading(false);
  };

  return (
    <div className="chat-float">
      <style>{style}</style>

      {!open ? (
        <button className="chat-toggle" onClick={() => setOpen(true)}>
          💬 Zeptejte se nás
        </button>
      ) : (
        <div className="chat-box">
          <div className="chat-header">
            <span>Náramková Móda 💬</span>
            <button onClick={() => setOpen(false)}>✖️</button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={msg.role === "user" ? "chat-message-user" : "chat-message-bot"}
              >
                <div className={`chat-bubble ${msg.role === "user" ? "bubble-user" : "bubble-bot"}`}>
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

          <div className="chat-input">
            <input
              type="text"
              placeholder="Zadejte dotaz..."
              value={input}
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
