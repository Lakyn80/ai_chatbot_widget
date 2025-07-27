// ✅ API volání na Flask backend (DeepSeek proxy)
export async function sendMessageToBot(message) {
  const res = await fetch("http://localhost:5000/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  return data.response;
}
