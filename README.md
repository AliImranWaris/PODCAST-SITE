<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>AI Podcast Generator</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>🎙️ AI Podcast Generator</h1>
    <p>Type your script and click "Generate Podcast"</p>

    <textarea id="scriptText" placeholder="Enter your podcast text here..."></textarea>
    <button onclick="generatePodcast()">🎧 Generate Podcast</button>

    <p id="statusMessage"></p>

    <audio id="audioPlayer" controls></audio>
  </div>

  <script src="script.js"></script>
</body>
</html>
body {
  background-color: #111;
  color: #fff;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  text-align: center;
}

.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

textarea {
  width: 100%;
  height: 150px;
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
}

button {
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

audio {
  margin-top: 20px;
  width: 100%;
}
function generatePodcast() {
  const scriptText = document.getElementById('scriptText').value;
  const status = document.getElementById('statusMessage');

  if (!scriptText) {
    status.innerText = "❌ Please enter a script first!";
    return;
  }

  status.innerText = "⏳ Generating podcast audio...";

  // 🔧 Placeholder: Simulate success
  setTimeout(() => {
    status.innerText = "✅ Podcast generated! (Audio not real yet)";
    const player = document.getElementById("audioPlayer");
    player.src = "example.mp3"; // Replace with real audio file path
    player.load();
  }, 2000);
}

