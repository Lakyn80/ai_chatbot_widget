// 🟩 Tento skript počká, až bude stránka načtená a pak spustí widget
window.addEventListener("DOMContentLoaded", () => {
  if (window.ChatbotWidget && typeof window.ChatbotWidget.init === "function") {
    window.ChatbotWidget.init();
  } else {
    console.error("❌ ChatbotWidget.init not found.");
  }
});
