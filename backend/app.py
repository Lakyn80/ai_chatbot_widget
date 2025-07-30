# 📁 backend/app.py

from flask import Flask, request, jsonify, send_from_directory, make_response
from flask_cors import CORS
from chatbot import get_chatbot_response
import os

# 🟩 Inicializace aplikace Flask
app = Flask(__name__)

# 🟦 Povolení CORS pro GitHub Pages i vývojové prostředí localhost (React Vite)
CORS(app, supports_credentials=True, origins=[
    "https://lakyn80.github.io",  # ✅ GitHub Pages – produkce
    "http://localhost:5173"       # ✅ Lokální vývoj – React dev server
])

# --------------------------------------------
# ✅ Základní kontrola, že backend běží
# --------------------------------------------
@app.route("/", methods=["GET"])
def index():
    return "✅ AI Chatbot backend je online!"

# --------------------------------------------
# 🟩 Testovací endpoint (pro debug)
# --------------------------------------------
@app.route("/api/ping", methods=["GET"])
def ping():
    return jsonify({"message": "Server běží správně."})

# --------------------------------------------
# 🟥 Hlavní endpoint pro AI chatbota
# --------------------------------------------
@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    # 🔴 Kontrola, zda je zpráva neprázdná
    if not user_message.strip():
        return jsonify({"error": "Zpráva nesmí být prázdná"}), 400

    # 🧠 Získání odpovědi z AI
    response = get_chatbot_response(user_message)
    return jsonify({"response": response})

# --------------------------------------------
# 🟦 Slouží statický JavaScript soubor pro widget
# --------------------------------------------
@app.route("/chat-widget.js")
def serve_widget():
    widget_path = os.path.join(os.path.dirname(__file__), 'frontend', 'dist')
    response = make_response(send_from_directory(widget_path, "chat-widget.js"))
    response.headers["Content-Type"] = "application/javascript"
    response.headers["Access-Control-Allow-Origin"] = "*"  # 🔐 Widget může být načten z GitHubu
    return response

# --------------------------------------------
# 🟢 Spuštění serveru
# --------------------------------------------
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
