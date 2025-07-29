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

    # ✅ Detekce dotazu na jazyk
    jazykove_dotazy = [
        "mluvíš", "mluviš", "mluvis", "mluvit", "umíš", "umis", "umět",
        "do you speak", "can you speak", "spreekt u", "parlez-vous",
        "sprichst du", "говоришь", "ты говоришь", "hablas", "falar"
    ]
    if any(dotaz in message.lower() for dotaz in jazykove_dotazy):
        return "Ano, umím mluvit různými jazyky, abych ti co nejlépe pomohl 😊"

    # 🟦 Dotaz ve stylu zákaznické podpory
    payload = {
        "model": "deepseek-chat",
        "messages": [
            {
                "role": "system",
                "content": (
                    "Jsi AI asistent firmy. Odpovídej výhradně na dotazy týkající se produktů a služeb firmy. "
                    "Pokud dotaz nesouvisí, odpověz: 'Na tuto otázku nemohu odpovědět.'"
                )
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
