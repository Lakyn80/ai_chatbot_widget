// 📁 frontend/public/init-chat-widget.js
window.addEventListener("DOMContentLoaded", () => {
  if (window.ChatbotWidget && typeof window.ChatbotWidget.init === "function") {
    window.ChatbotWidget.init({
      apiBaseUrl: "https://aichatbotwidget-production.up.railway.app",
      themeColor: "#ff66aa",
      title: "Náramková Móda",
      introMessage: "Potřebuješ poradit s výběrem náramku?",
    });
  } else {
    console.error("❌ ChatbotWidget.init not found.");
  }
});
