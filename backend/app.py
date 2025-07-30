from flask import Flask, request, jsonify, send_from_directory, make_response
from flask_cors import CORS
from chatbot import get_chatbot_response
import os

app = Flask(__name__)

# ✅ Tohle povolí CORS pro všechny routy správně (včetně /api/chat)
CORS(app, supports_credentials=True, resources={
    r"/*": {
        "origins": [
            "https://lakyn80.github.io",
            "http://localhost:5173",
            "http://127.0.0.1:5500"
        ]
    }
})

@app.route("/", methods=["GET"])
def index():
    return "✅ AI Chatbot backend je online!"

@app.route("/api/ping", methods=["GET"])
def ping():
    return jsonify({"message": "Server běží správně."})

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")
    if not user_message.strip():
        return jsonify({"error": "Zpráva nesmí být prázdná"}), 400

    response = get_chatbot_response(user_message)
    return jsonify({"response": response})

@app.route("/chat-widget.js")
def serve_widget():
    widget_path = os.path.join(os.path.dirname(__file__), 'frontend', 'dist')
    response = make_response(send_from_directory(widget_path, "chat-widget.js"))
    response.headers["Content-Type"] = "application/javascript"
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
