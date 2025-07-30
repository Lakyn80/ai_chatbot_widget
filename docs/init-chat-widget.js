window.addEventListener("DOMContentLoaded", () => {
  if (window.ChatbotWidget && typeof window.ChatbotWidget.init === "function") {
    window.ChatbotWidget.init({
      title: "Náramková Móda 💬",
      introMessage: "Vítejte! Jak vám mohu pomoci s výběrem náramku? 🎀",
      themeColor: "#ec4899"
    });
    console.log("✅ ChatbotWidget spuštěn.");
  } else {
    console.error("❌ ChatbotWidget.init nebyl nalezen.");
  }
});
