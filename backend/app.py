from flask import Flask, request, jsonify, send_from_directory, make_response
from flask_cors import CORS
from chatbot import get_chatbot_response
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # ✅ Povolit vše, včetně statických souborů

# 🟩 Testovací endpoint
@app.route("/api/ping", methods=["GET"])
def ping():
    return jsonify({"message": "Server běží správně."})

# 🟥 Chat endpoint
@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    if not user_message.strip():
        return jsonify({"error": "Zpráva nesmí být prázdná"}), 400

    response = get_chatbot_response(user_message)
    return jsonify({"response": response})

# ✅ Endpoint pro statický widget (chat-widget.js)
@app.route("/chat-widget.js")
def serve_widget():
    widget_path = os.path.join(os.path.dirname(__file__), 'frontend', 'dist')
    response = make_response(send_from_directory(widget_path, "chat-widget.js"))
    response.headers["Content-Type"] = "application/javascript"
    response.headers["Access-Control-Allow-Origin"] = "*"  # ✅ Důležité pro widget
    return response

# ✅ Spuštění
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
