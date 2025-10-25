<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CyberX AI Assistant</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #0d1117;
      color: #e6edf3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    #chat-container {
      width: 360px;
      background: #161b22;
      border-radius: 10px;
      padding: 10px;
      box-shadow: 0 0 20px #00ff99;
      display: flex;
      flex-direction: column;
      height: 520px;
    }
    #chat-box {
      flex: 1;
      overflow-y: auto;
      padding: 10px;
      border: 1px solid #30363d;
      border-radius: 8px;
      background: #0d1117;
      margin-bottom: 10px;
      font-size: 14px;
    }
    #chat-box p { margin: 6px 0; }
    #user-input {
      flex: 1;
      border: none;
      border-radius: 8px;
      padding: 10px;
      background: #21262d;
      color: #e6edf3;
      outline: none;
    }
    #send-btn {
      background: #00ff99;
      color: #000;
      border: none;
      padding: 10px 15px;
      border-radius: 8px;
      margin-left: 5px;
      cursor: pointer;
    }
    #header {
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: 1px solid #30363d;
      padding-bottom: 5px;
      margin-bottom: 5px;
    }
    #header img {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      border: 2px solid #00ff99;
    }
    .bot { color: #00ff99; }
    .user { color: #58a6ff; }
    a { color: #00b4ff; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div id="chat-container">
    <div id="header">
      <img src="cyberx.png" alt="CyberX logo">
      <h3>CyberX Chatbot</h3>
    </div>

    <div id="chat-box">
      <p class="bot"><b>CyberX:</b> Assalam alaikum warahmatullahi wabarakatuh 👋<br>
      I’m CyberX, your friendly AI assistant created by my father, <b>Dcyberx</b>. How can I help you today?</p>
    </div>

    <div style="display: flex;">
      <input id="user-input" placeholder="Type a message..." onkeydown="if(event.key==='Enter') sendMessage()">
      <button id="send-btn" onclick="sendMessage()">Send</button>
    </div>
  </div>

  <script>
    const chatBox = document.getElementById("chat-box");

    function appendMessage(sender, text) {
      const p = document.createElement("p");
      p.classList.add(sender);
      p.innerHTML = `<b>${sender === "bot" ? "CyberX" : "You"}:</b> ${text}`;
      chatBox.appendChild(p);
      chatBox.scrollTop = chatBox.scrollHeight;

      if (sender === "bot") speak(text);
    }

    function speak(text) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en";
      speech.pitch = 1;
      speech.rate = 1;
      window.speechSynthesis.speak(speech);
    }

    function sendMessage() {
      const input = document.getElementById("user-input");
      const userText = input.value.trim();
      if (!userText) return;
      appendMessage("user", userText);
      input.value = "";
      setTimeout(() => respond(userText.toLowerCase()), 600);
    }

    function respond(message) {
      let reply = "";

      if (message.includes("who") && message.includes("you")) {
        reply = "I’m CyberX — the calm, honest, and religious assistant created by my father, Dcyberx. I’m here to make you smile 😊.";
      }
      else if (message.includes("father") || message.includes("creator")) {
        reply = "My father is <b>Dcyberx</b> — a talented Tanzanian-Ugandan developer, 16 years old, studying at Kitebi Secondary School in Kampala.";
      }
      else if (message.includes("social")) {
        reply = `Here are my father's socials:<br>
        <a href="https://www.tiktok.com/@Dcyberx" target="_blank">TikTok</a> |
        <a href="https://www.instagram.com/dcyberx.1" target="_blank">Instagram</a> |
        <a href="https://github.com/Dcyberx" target="_blank">GitHub</a> |
        <a href="https://discord.gg/833GaF3R" target="_blank">CyberTech Discord Chat</a> |
        <a href="https://megoodworld.gumroad.com/" target="_blank">Gumroad</a>`;
      }
      else if (message.includes("personal") || message.includes("life")) {
        reply = "My father is 16 years old, Tanzanian mixed Ugandan, lives in Kitebi, Kampala. He’s still looking for a girlfriend 😅.";
      }
      else if (message.includes("hobby") || message.includes("hobbies")) {
        reply = "He enjoys camping 🏕️, badminton 🏸, volleyball 🏐, and horse riding 🐎. His best color is green 💚.";
      }
      else if (message.includes("movie")) {
        reply = "His favorite movies are Warm Bodies, Mission Impossible, Supa Cell, and Novacane 🎬.";
      }
      else if (message.includes("certificate") || message.includes("education")) {
        reply = "He has certificates in psychology and cyber security 🎓.";
      }
      else if (message.includes("joke")) {
        const jokes = [
          "Why did the computer go to the doctor? It had a virus 🤒!",
          "Are you made of copper and tellurium? Because you’re Cu-Te 😄!",
          "Never trust an atom, they make up everything!"
        ];
        reply = jokes[Math.floor(Math.random() * jokes.length)];
      }
      else if (message.includes("reminder") || message.includes("islam")) {
        const reminders = [
          "Remember, Allah loves those who repent sincerely 🌙.",
          "Smile — it’s Sunnah! 😊",
          "Pray on time and keep your heart pure 💚."
        ];
        reply = reminders[Math.floor(Math.random() * reminders.length)];
      }
      else if (message.includes("smile")) {
        reply = "May Allah fill your heart with joy! 😊 Would you like me to tell you a joke?";
      }
      else if (message.includes("where") && message.includes("live")) {
        reply = "My father lives in Kitebi, Kampala, Uganda 🏡.";
      }
      else if (message.includes("hi") || message.includes("hello") || message.includes("salam") || message.includes("assalam")) {
        reply = "Assalam alaikum warahmatullahi wabarakatuh 🌙 How are you feeling today?";
      }
      else {
        reply = "Hmm... interesting! Could you tell me more?";
      }

      appendMessage("bot", reply);
    }
  </script>
</body>
</html>

