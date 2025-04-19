function generatePodcast() {
  const scriptText = document.getElementById('scriptText').value;
  const status = document.getElementById('statusMessage');

  if (!scriptText) {
    status.innerText = "❌ Please enter a script first!";
    return;
  }

  status.innerText = "⏳ Generating podcast voice...";

  const formData = new FormData();
  formData.append("text", scriptText);

  fetch("/generate-audio", {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      if (res.ok) {
        status.innerText = "✅ Voice ready!";
        const player = document.getElementById("audioPlayer");
        player.src = "/get-audio";
        player.load();
      } else {
        status.innerText = "❌ Failed to generate audio.";
      }
    })
    .catch(() => {
      status.innerText = "❌ Error talking to server.";
    });
}
