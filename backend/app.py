# ✅ Flask API pro komunikaci s React widgetem
from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbot import get_chatbot_response  # Načtení funkce z chatbot.py

app = Flask(__name__)
CORS(app)  # 🟩 Povolení CORS pro frontend komunikaci

# 🟦 Testovací endpoint
@app.route("/api/ping", methods=["GET"])
def ping():
    return jsonify({"message": "Server běží správně."})

# 🟥 Hlavní endpoint pro komunikaci s chatbotem
@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    if not user_message.strip():
        return jsonify({"error": "Zpráva nesmí být prázdná"}), 400

    # 🔁 Získání odpovědi z DeepSeek
    response = get_chatbot_response(user_message)
    return jsonify({"response": response})
