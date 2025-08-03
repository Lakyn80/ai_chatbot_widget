// 📁 frontend/public/init-chat-widget.js

// 🟩 Počkej, až bude celý dokument načtený
window.addEventListener("DOMContentLoaded", () => {
  // ✅ Ověříme, že globální objekt a init funkce existují
  if (window.ChatbotWidget && typeof window.ChatbotWidget.init === "function") {

    // 🟨 Spuštění widgetu s vlastní konfigurací
    window.ChatbotWidget.init({
      apiBaseUrl: "https://aichatbotwidget-production.up.railway.app",  // 🔗 Backendová API adresa
      themeColor: "#ff66aa",                                             // 🎨 Růžová barva pro značku
      title: "💎 Náramková Móda",                                        // 🧾 Nadpis chatu
      introMessage: "Ahoj! Ráda ti pomohu vybrat ten pravý náramek 💬", // 🗨️ Úvodní zpráva od bota
    });

  } else {
    // ❌ Vypíše chybu, pokud widget nebyl správně načten
    console.error("❌ ChatbotWidget.init not found. Možná chybí chat-widget.js?");
  }
});
