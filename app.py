from flask import Flask, request, send_file
from gtts import gTTS
import os

app = Flask(__name__)

@app.route("/generate-audio", methods=["POST"])
def generate_audio():
    text = request.form.get("text", "")
    if not text:
        return "No text provided", 400

    tts = gTTS(text)
    audio_path = "static/audio.mp3"
    os.makedirs("static", exist_ok=True)
    tts.save(audio_path)
    return "Audio generated", 200

@app.route("/get-audio")
def get_audio():
    return send_file("static/audio.mp3", mimetype="audio/mpeg")

@app.route("/")
def home():
    return app.send_static_file("index.html")

if __name__ == "__main__":
    app.run(debug=True)
