# ✅ Funkce pro komunikaci s DeepSeek API
import requests
from config import DEEPSEEK_API_KEY  # Načtení klíče z configu

# 🧠 URL DeepSeek API endpointu
API_URL = "https://api.deepseek.com/v1/chat/completions"

def get_chatbot_response(message):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {DEEPSEEK_API_KEY}"
    }

    # 🟦 Dotaz ve stylu zákaznické podpory
    payload = {
        "model": "deepseek-chat",
        "messages": [
            {
                "role": "system",
                "content": "Odpovídej pouze na otázky týkající se naší firmy a služeb. Pokud dotaz nesouvisí, odpověz 'Na tuto otázku nemohu odpovědět.'"
            },
            {
                "role": "user",
                "content": message
            }
        ],
        "temperature": 0.7
    }

    try:
        response = requests.post(API_URL, json=payload, headers=headers)
        response.raise_for_status()
        return response.json()["choices"][0]["message"]["content"]
    except Exception as e:
        return f"❌ Chyba při komunikaci s DeepSeek API: {str(e)}"
