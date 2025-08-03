// 🟩 Tento skript počká, až bude stránka načtená a pak spustí widget
window.addEventListener("DOMContentLoaded", () => {
  // ✅ Ověření existence funkce
  if (window.ChatbotWidget && typeof window.ChatbotWidget.init === "function") {
    // ✅ Zavolání s konfigurací
    window.ChatbotWidget.init({
      apiBaseUrl: "https://aichatbotwidget-production.up.railway.app",  // 🔗 adresa backendu (Railway)
      themeColor: "#ff66aa",  // 🎨 růžová barva pro Náramková Móda
      welcomeMessage: "Ahoj! Potřebuješ poradit s výběrem náramku?",  // 💬 přivítání
      placeholderText: "Zeptej se třeba na cenu, styl nebo doručení..." // 📝 výchozí text
    });
  } else {
    console.error("❌ ChatbotWidget.init not found.");
  }
});
