# 🧠 AI Chatbot Widget (React)

Tento widget umožňuje snadno vložit AI chatbota na jakýkoli web. Chatbot je postaven pomocí React + Tailwind a komunikace probíhá přes API (např. DeepSeek / OpenAI).

---

## 🚀 Jak vložit widget na různé typy webů

### ✅ 1. Čistý HTML web

```html
<!-- HTML struktura -->
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8" />
  <title>Chatbot</title>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
</head>
<body>
  <h1>Web s AI chatbotem</h1>
  <script src="https://lakyn80.github.io/ai_chatbot_widget/chat-widget.js"></script>
</body>
</html>
```

---

### ✅ 2. React (Vite, CRA)

```jsx
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://lakyn80.github.io/ai_chatbot_widget/chat-widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <h1>React app</h1>;
}
```

---

### ✅ 3. Next.js

```jsx
// Vlož do _app.js nebo layout komponenty
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://lakyn80.github.io/ai_chatbot_widget/chat-widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
```

---

### ✅ 4. Vue.js

```vue
<template>
  <div><h1>Vue App</h1></div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement("script");
    script.src = "https://lakyn80.github.io/ai_chatbot_widget/chat-widget.js";
    script.async = true;
    document.body.appendChild(script);
  },
};
</script>
```

---

### ✅ 5. WordPress

Vlož do šablony (např. `footer.php`) nebo pomocí pluginu:

```html
<script src="https://lakyn80.github.io/ai_chatbot_widget/chat-widget.js"></script>
```

---

### ✅ 6. Webflow / Wix / Squarespace

Vlož do HTML embed bloku:

```html
<script src="https://lakyn80.github.io/ai_chatbot_widget/chat-widget.js"></script>
```

---

## 🛠️ Poznámka

- Tento widget používá React 18 a TailwindCSS 3.
- Komunikace probíhá přes endpoint `/api/chat`.
- Widget je plně responsivní a lze jej vložit jako bublinu kdekoliv.

