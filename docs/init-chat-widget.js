// ✅ PŘEPIS původní inicializace – vlastní barva, zpráva, backend
window.ChatbotWidget = {
  init: function () {
    new window.ChatWidget({
      apiBaseUrl: "https://aichatbotwidget-production.up.railway.app",
      title: "AI Chatbot",
      introMessage: "Dobrý den! Rádi vám pomůžeme s výběrem náramku 💝",
      placeholder: "Zeptej se na cokoliv...",
      position: "bottom-right",
      themeColor: "#ec4899" // růžová Tailwind barva
    });
  }
};
