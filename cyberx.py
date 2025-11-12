<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CyberX WhatsApp Style Chat</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #0d1117;
      color: #e6edf3;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    #chat-container {
      width: 380px;
      background: #161b22;
      border-radius: 10px;
      box-shadow: 0 0 20px #00ff99;
      display: flex;
      flex-direction: column;
      height: 540px;
      overflow: hidden;
    }
    #header {
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: 1px solid #30363d;
      padding: 10px;
      background: #0d1117;
    }
    #header img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid #00ff99;
    }
    #header h3 {
      margin: 0;
      font-size: 16px;
      color: #00ff99;
    }
    #chat-box {
      flex: 1;
      overflow-y: auto;
      padding: 10px;
      background: #0d1117;
    }
    .bubble {
      max-width: 75%;
      padding: 10px 14px;
      margin: 6px 0;
      border-radius: 18px;
      font-size: 14px;
      line-height: 1.4;
      display: inline-block;
      clear: both;
    }
    .bot {
      background: #202c33;
      color: #e6edf3;
      float: left;
      border-bottom-left-radius: 4px;
    }
    .user {
      background: #00ff99;
      color: #000;
      float: right;
      border-bottom-right-radius: 4px;
    }
    #input-area {
      display: flex;
      padding: 10px;
      background: #161b22;
      border-top: 1px solid #30363d;
    }
    #user-input {
      flex: 1;
      border: none;
      border-radius: 20px;
      padding: 10px 14px;
      background: #21262d;
      color: #e6edf3;
      outline: none;
      font-size: 14px;
    }
    #send-btn {
      background: #00ff99;
      color: #000;
      border: none;
      padding: 10px 16px;
      border-radius: 50%;
      margin-left: 8px;
      cursor: pointer;
      font-weight: bold;
    }
    .categories {
      display: flex;
      justify-content: space-around;
      padding: 6px;
      background: #161b22;
      border-bottom: 1px solid #30363d;
    }
    .categories button {
      background: #21262d;
      border: 1px solid #00ff99;
      color: #00ff99;
      padding: 6px 10px;
      border-radius: 16px;
      cursor: pointer;
      font-size: 12px;
    }
    .categories button:hover {
      background: #00ff99;
      color: #000;
    }
  </style>
</head>
<body>
  <div id="chat-container">
    <div id="header">
      <img src="cyberx.png" alt="CyberX logo">
      <h3>CyberX Assistant</h3>
    </div>

    <div class="categories">
      <button onclick="categoryReply('aboutCyberTech')">About CyberTech</button>
      <button onclick="categoryReply('aboutDcyberx')">About Dcyberx</button>
      <button onclick="categoryReply('liveChat')">Live Chat</button>
    </div>

    <div id="chat-box">
      <div class="bubble bot"><b>CyberX:</b> Assalam alaikum warahmatullahi wabarakatuh 👋<br>
      I’m CyberX, your friendly AI assistant created by my father, <b>Dcyberx</b>. Feel free to ask anything.</div>
    </div>

    <div id="input-area">
      <input id="user-input" placeholder="Type a message..." onkeydown="if(event.key==='Enter') sendMessage()">
      <button id="send-btn" onclick="sendMessage()">➤</button>
    </div>
  </div>

  <script>
    const chatBox = document.getElementById("chat-box");

    function appendMessage(sender, text) {
      const div = document.createElement("div");
      div.classList.add("bubble", sender);
      div.innerHTML = `<b>${sender === "bot" ? "CyberX" : "You"}:</b> ${text}`;
      chatBox.appendChild(div);
      chatBox.scrollTop = chatBox.scrollHeight;
    }

    function sendMessage() {
      const input = document.getElementById("user-input");
      const userText = input.value.trim();
      if (!userText) return;
      appendMessage("user", userText);
      input.value = "";
      setTimeout(() => respond(userText.toLowerCase()), 600);
    }

    function categoryReply(type) {
      let reply = "";
      if (type === "aboutCyberTech") {
        reply = "CyberTech is a creative website built with HTML and GitHub code by Dcyberx. It reflects his love for cybersecurity, 3D modeling, and software engineering.";
      } else if (type === "aboutDcyberx") {
        reply = "Dcyberx is Mugerwa Habib Arafat, a Tanzanian-Ugandan teen developer. He loves green, eagles, kittens, and enjoys camping, badminton, and coding.";
      } else if (type === "liveChat") {
        reply = "Live chat started... Feel free to ask me anything, and I’ll relate the conversation naturally.";
      }
      appendMessage("bot", reply);
    }

    function respond(message) {
      let reply = "";

      if (message.includes("who") && message.includes("you")) {
        reply = "I’m CyberX — the calm, honest assistant created by my father, Dcyberx.";
      }
      else if (message.includes("father") || message.includes("creator")) {
        reply = "My father is Dcyberx — a talented Tanzanian-Ugandan developer, 16 years old, studying in Kampala.";
      }
      else if (message.includes("hobby")) {
        reply = "He enjoys camping 🏕️, badminton 🏸, volleyball 🏐, and horse riding 🐎.";
      }
      else if (message.includes("joke")) {
        const jokes = [
          "Why did the computer go to the doctor? It had a virus 🤒!",
          "Are you made of copper and tellurium? Because you’re Cu-Te 😄!",
          "Never trust an atom, they make up everything!"
        ];
        reply = jokes[Math.floor(Math.random() * jokes.length)];
      }
      else if (message.includes("islam") || message.includes("reminder")) {
        const reminders = [
          "Remember, Allah loves those who repent sincerely 🌙.",
          "Smile — it’s Sunnah! 😊",
          "Pray on time and keep your heart pure 💚."
        ];
        reply = reminders[Math.floor(Math.random() * reminders.length)];
      }
      else if (message.includes("hi") || message.includes("hello") || message.includes("salam")) {
        reply = "Assalam alaikum warahmatullahi wabarakatuh 🌙 How are you feeling today?";
      }
      else {
        reply = "Interesting... tell me more so I can relate to it.";
      }

      appendMessage("bot", reply);
    }
  </script>
</body>
</html>
