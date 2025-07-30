# 📁 backend/app.py

from flask import Flask, request, jsonify, send_from_directory, make_response
from flask_cors import CORS, cross_origin
from chatbot import get_chatbot_response
import os

# 🟩 Inicializace Flask aplikace
app = Flask(__name__)

# 🟦 Globální CORS pro většinu rout (kromě těch, co explicitně používají @cross_origin)
CORS(app, supports_credentials=True, resources={
    r"/*": {
        "origins": [
            "https://lakyn80.github.io",  # ✅ GitHub Pages
            "http://localhost:5173",      # ✅ Vite dev server
            "http://127.0.0.1:5500"       # ✅ VS Code Live Server
        ]
    }
})

# --------------------------------------------
# ✅ Základní kontrolní endpoint
# --------------------------------------------
@app.route("/", methods=["GET"])
def index():
    return "✅ AI Chatbot backend je online!"

# --------------------------------------------
# 🟩 Testovací endpoint
# --------------------------------------------
@app.route("/api/ping", methods=["GET"])
def ping():
    return jsonify({"message": "Server běží správně."})

# --------------------------------------------
# 🟥 Hlavní endpoint pro chatbota s CORS
# --------------------------------------------
@app.route("/api/chat", methods=["POST", "OPTIONS"])
@cross_origin(
    origins=[
        "https://lakyn80.github.io",
        "http://localhost:5173",
        "http://127.0.0.1:5500"
    ],
    allow_headers=["Content-Type"],
    supports_credentials=True
)
def chat():
    # 🟨 Odpověď na preflight (OPTIONS)
    if request.method == "OPTIONS":
        return jsonify({"message": "CORS preflight OK"}), 200

    # 🟩 Získání zprávy
    data = request.get_json()
    user_message = data.get("message", "")
    
    if not user_message.strip():
        return jsonify({"error": "Zpráva nesmí být prázdná"}), 400

    # 🤖 Odpověď z AI
    response = get_chatbot_response(user_message)
    return jsonify({"response": response})

# --------------------------------------------
# 🟦 Slouží statický JavaScript soubor widgetu
# --------------------------------------------
@app.route("/chat-widget.js")
def serve_widget():
    widget_path = os.path.join(os.path.dirname(__file__), 'frontend', 'dist')
    response = make_response(send_from_directory(widget_path, "chat-widget.js"))
    response.headers["Content-Type"] = "application/javascript"
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response

# --------------------------------------------
# 🟢 Spuštění aplikace
# --------------------------------------------
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
