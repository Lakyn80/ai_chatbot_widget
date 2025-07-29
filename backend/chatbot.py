# ✅ Funkce pro komunikaci s DeepSeek API – mluví všemi jazyky
import requests
from config import DEEPSEEK_API_KEY  # 🔐 Načtení klíče z configu

# 🌐 URL DeepSeek API
API_URL = "https://api.deepseek.com/v1/chat/completions"

def get_chatbot_response(message):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {DEEPSEEK_API_KEY}"
    }

    # 🧠 Systémová zpráva s podporou všech jazyků
    system_prompt = (
        "Jsi asistent specializovaný na zákaznickou podporu pro naši firmu. "
        "Odpovídej vždy v jazyce, ve kterém byla položena otázka. "
        "Odpovídej pouze na otázky týkající se našich služeb a produktů "
        "(např. palety, big bagy, krabice, doprava apod.). "
        "Pokud dotaz nesouvisí s firmou, odpověz: 'Na tuto otázku nemohu odpovědět.'"
    )

    # 🔵 Tělo požadavku
    payload = {
        "model": "deepseek-chat",
        "messages": [
            { "role": "system", "content": system_prompt },
            { "role": "user", "content": message }
        ],
        "temperature": 0.7
    }

    try:
        response = requests.post(API_URL, json=payload, headers=headers)
        response.raise_for_status()
        return response.json()["choices"][0]["message"]["content"]
    except Exception as e:
        return f"❌ Chyba při komunikaci s DeepSeek API: {str(e)}"
