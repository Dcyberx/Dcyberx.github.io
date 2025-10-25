<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Cyberx — Hollywood Binary + Terminal Chat</title>
<style>
:root{
  --bg:#050606;
  --panel:#071012;
  --green:#00bfff;         /* blue binary */
  --muted:#7db9ff;
  --accent: rgba(0,191,255,0.2);
  --glass: rgba(0,191,255,0.05);
}

@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

*{box-sizing:border-box}
html,body{
  height:100%;
  margin:0;
  background:var(--bg);
  color:var(--muted);
  font-family:"Fira Code", monospace;
}

/* center container */
.wrapper{
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  position:relative;
  padding:20px;
}

/* preserved container from original */
.container{
  width:400px;
  background:var(--panel);
  border-radius:8px;
  padding:10px;
  box-shadow:0 0 20px rgba(0,191,255,0.2);
  position:relative;
}

/* 88px top-right logo area (clickable) */
.logo-space{
  position:fixed;
  top:12px;
  right:12px;
  width:88px;
  height:88px;
  background:var(--glass);
  border:1px dashed rgba(0,191,255,0.18);
  border-radius:8px;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  overflow:hidden;
  z-index:60;
}
.logo-space img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
}

/* Binary Matrix */
.binary-box{
  width:100%;
  height:140px;
  background:rgba(0,0,0,0.3);
  border-radius:8px;
  padding:12px;
  overflow:hidden;
  border:1px solid rgba(0,191,255,0.3);
  box-shadow:inset 0 0 20px rgba(0,191,255,0.2);
  display:flex;
}

.column{
  display:flex;
  flex-direction:column;
  font-size:14px;
  color:var(--green);
  white-space:nowrap;
  margin-right:5px;
  animation:fall 3s linear infinite;
}

.column .lead{
  display:block;
  color:#aee4ff;
  text-shadow:0 0 10px rgba(0,191,255,0.8);
}

@keyframes fall{
  0%{transform:translateY(-100%);}
  100%{transform:translateY(100%);}
}

/* ASCII Logo Box */
.logo-ascii{
  font-family:"Fira Code", monospace;
  color:var(--green);
  white-space:pre;
  overflow:hidden;
  max-height:220px;
  text-align:center;
  font-size:11px;
  position:relative;
  margin-top:10px;
}

.logo-ascii pre{
  position:absolute;
  top:100%;
  width:100%;
  animation:scrollUp 20s linear infinite;
  margin:0;
}

@keyframes scrollUp{
  0% { top: 100%; }
  100% { top: -100%; }
}

/* scrollbar hide */
.logo-ascii::-webkit-scrollbar { display: none; }
.logo-ascii { -ms-overflow-style: none; scrollbar-width: none; }

/* Terminal chat overlay (hidden until logo click) */
.chat-overlay{
  position:fixed;
  inset:0;
  display:flex;
  justify-content:center;
  align-items:flex-end;
  pointer-events:none;
  z-index:70;
}
.chat-panel{
  width:480px;
  max-width:95%;
  height:420px;
  background:linear-gradient(180deg, rgba(7,16,18,0.95), rgba(7,10,12,0.98));
  border-radius:10px 10px 0 0;
  box-shadow:0 12px 40px rgba(0,0,0,0.6);
  border:1px solid rgba(0,191,255,0.08);
  overflow:hidden;
  pointer-events:auto;
  display:flex;
  flex-direction:column;
}

/* header */
.chat-header{
  display:flex;
  align-items:center;
  gap:10px;
  padding:10px;
  border-bottom:1px solid rgba(0,191,255,0.03);
}
.chat-header .title{ font-weight:700; color:var(--muted); }
.chat-header .subtitle{ font-size:12px; color:var(--muted); opacity:0.7 }

/* messages */
.chat-body{
  flex:1;
  padding:12px;
  overflow:auto;
  color:var(--muted);
  font-size:13px;
}

/* message bubbles */
.msg{
  max-width:78%;
  margin-bottom:8px;
  padding:8px 10px;
  border-radius:8px;
  line-height:1.2;
  white-space:pre-wrap;
}
.msg.bot{
  background:rgba(0,191,255,0.06);
  color:var(--muted);
  border:1px solid rgba(0,191,255,0.06);
  align-self:flex-start;
}
.msg.user{
  background:rgba(255,255,255,0.04);
  color:var(--muted);
  align-self:flex-end;
}

/* input area */
.chat-input{
  display:flex;
  gap:8px;
  padding:10px;
  border-top:1px solid rgba(0,191,255,0.03);
}
.chat-input input[type="text"]{
  flex:1;
  padding:8px;
  border-radius:6px;
  border:1px solid rgba(255,255,255,0.04);
  background:rgba(0,0,0,0.25);
  color:var(--muted);
  font-family:"Fira Code", monospace;
}
.btn{
  padding:8px 10px;
  border-radius:6px;
  border:1px solid rgba(0,191,255,0.1);
  background:transparent;
  color:var(--muted);
  cursor:pointer;
}

/* small controls row */
.controls{
  display:flex;
  gap:8px;
  align-items:center;
  font-size:12px;
  padding:8px 12px;
  color:var(--muted);
  border-top:1px dashed rgba(0,191,255,0.02);
}

/* small badges */
.badge{ font-size:11px; opacity:0.8 }

/* hide by default */
.chat-overlay.hidden{ display:none; }

/* make sure overlay scrollbars look fine in dark */
.chat-body::-webkit-scrollbar{ width:8px;}
.chat-body::-webkit-scrollbar-thumb{ background: rgba(0,191,255,0.08); border-radius:6px;}
</style>
</head>
<body>

<div class="wrapper">

  <div class="container" id="mainContainer">

    <!-- Top-right logo space (88x88) -->
    <div class="logo-space" id="cyberxLogo" title="Open Cyberx terminal">
      <!-- If you place cyberx.png next to this HTML, it will show here -->
      <img id="logoImg" src="cyberx.png" alt="Cyberx logo" onerror="this.style.display='none'"/>
    </div>

    <!-- Binary Box -->
    <div class="binary-box" id="binaryBox"></div>

    <!-- ASCII Logo -->
    <div class="logo-ascii" aria-hidden="true">
      <pre>
  ⠀⠠⠠⢄⢤⣠⣀⣄⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣉⣉⣉⣙⣛⣳⣶⣤⠀⠀⠀⠀"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠠⠖⠚⠚⠛⠋⠉⠉⠉⣉⣩⣭⣭⣿⢿⡀⠀⢀"⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣀⡤⠶⠚⠋⠉⠁⠀⠀⠀⣨⣿⣷⣶⣶⣬⣗⡦⣄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⣼⡿⠁⠀⠀⠀⠈⠉⠛⢿⣧⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠈⠙⠷⠆⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣦⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠛⠛⠿⣶⣶⢦⣤⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢷⣌⠻⣦⠀⠀
⠀⠀⠀               ⠀Dcyberx⠀ ⠀⠹⣦⠈⢇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡆⠀⠀
⠀⠀  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀
    </pre>
    </div>

  </div>
</div>

<!-- Terminal chat overlay -->
<div class="chat-overlay hidden" id="chatOverlay" role="dialog" aria-modal="true">
  <div class="chat-panel" role="document" aria-label="Cyberx terminal chat">
    <div class="chat-header">
      <div style="display:flex;gap:8px;align-items:center">
        <div style="width:36px;height:36px;border-radius:6px;overflow:hidden;">
          <img src="cyberx.png" alt="logo" style="width:100%;height:100%;object-fit:cover" onerror="this.style.display='none'"/>
        </div>
        <div>
          <div class="title">Cyberx</div>
          <div class="subtitle">Assalam alaikum warahmatullahi wabarakatuh — Terminal Chat</div>
        </div>
      </div>
      <div style="margin-left:auto;display:flex;gap:6px;align-items:center">
        <button class="btn" id="closeChat" title="Close">✕</button>
      </div>
    </div>

    <div class="chat-body" id="chatBody">
      <!-- initial bot greeting inserted dynamically -->
    </div>

    <div class="controls">
      <span class="badge">Voice:</span>
      <button class="btn" id="voiceToggle" title="Toggle voice recognition">Start Mic</button>
      <span style="flex:1"></span>
      <span class="badge">Speech:</span>
      <button class="btn" id="speakLast" title="Replay last bot voice">🔊</button>
    </div>

    <div class="chat-input">
      <input type="text" id="userInput" placeholder="Type your message... (try: who made you, socials, about me, hobbies, joke, reminder)" autocomplete="off"/>
      <button class="btn" id="sendBtn">Send</button>
    </div>

  </div>
</div>

<script>
/* Binary generation */
const binaryBox = document.getElementById('binaryBox');
const columns = 40; // number of binary columns
const rows = 20;    // digits per column

for(let i=0;i<columns;i++){
  const col=document.createElement('div');
  col.className='column';
  const lead=document.createElement('span');
  lead.className='lead';
  lead.textContent=Math.round(Math.random());
  col.appendChild(lead);
  for(let j=0;j<rows;j++){
    const bit=document.createElement('span');
    bit.textContent=Math.round(Math.random());
    col.appendChild(bit);
  }
  binaryBox.appendChild(col);
}

/* Chat / bot logic */
const logo = document.getElementById('cyberxLogo');
const overlay = document.getElementById('chatOverlay');
const closeChat = document.getElementById('closeChat');
const chatBody = document.getElementById('chatBody');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const voiceBtn = document.getElementById('voiceToggle');
const speakLastBtn = document.getElementById('speakLast');

let lastBotSpeech = '';
let recognition = null;
let listening = false;

/* Personality & data */
const BOT = {
  name: 'Cyberx',
  greeting: 'Assalam alaikum warahmatullahi wabarakatuh — I am Cyberx. I am calm, honest and religious. How may I help?',
  aboutIfAskedAboutYou: 'I am its father.',
  socials: {
    tiktok: 'https://www.tiktok.com/@Dcyberx',
    instagram: 'https://www.instagram.com/dcyberx.1',
    github: 'https://github.com/Dcyberx',
    discord: 'https://discord.gg/833GaF3R',
    gumroad: 'https://megoodworld.gumroad.com/'
  },
  personal: {
    status: 'I am still looking for a girlfriend.',
    race: 'Tanzanian mixed Ugandan',
    age: '16 years old',
    hobbies: ['Camping','Badminton','Volleyball','Horse riding'],
    bestColor: 'Green',
    location: 'Kitebi, Kampala, Uganda',
    school: 'Kitebi Secondary School',
    certificates: ['Psychology','Cyber Security'],
    traits: ['Free', 'Calm', 'Honest', 'Religious']
  },
  movies: ['Warm Bodies','Mission Impossible','Supa Cell','Novacane']
};

/* helper: append message (supports links for known socials) */
function appendMessage(text, who='bot') {
  const div = document.createElement('div');
  div.className = 'msg ' + (who === 'bot' ? 'bot' : 'user');

  // create html-safe text but replace known socials with anchors
  let safe = document.createElement('div');
  safe.textContent = text;
  let html = safe.innerHTML;

  // replace known socials with anchor tags (safe because URLs are hard-coded)
  for(const label in BOT.socials){
    const url = BOT.socials[label];
    const display = url;
    const link = `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color:var(--muted);text-decoration:underline">${display}</a>`;
    html = html.split(url).join(link);
  }

  // newlines to <br>
  html = html.replace(/\n/g,'<br>');

  div.innerHTML = html;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

/* speak helper */
function speak(text) {
  if(!('speechSynthesis' in window)) return;
  const utter = new SpeechSynthesisUtterance();
  utter.text = text;
  // choose a neutral voice available
  const voices = speechSynthesis.getVoices();
  if(voices && voices.length) utter.voice = voices[0];
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
  lastBotSpeech = text;
}

/* initial greeting when opening chat */
function initialGreeting(){
  appendMessage(BOT.greeting, 'bot');
  // small Islamic reminder included
  appendMessage('Reminder: Remember to say Bismillah before your actions. Would you like a joke or a short reminder?', 'bot');
  speak(BOT.greeting + ' ' + 'Remember to say Bismillah before your actions.');
}

/* simple intent matching */
function processInput(message){
  const msg = message.toLowerCase().trim();

  // Islamic greeting
  if(/^(assalam|salaam|salam)/i.test(msg)){
    return 'Wa alaikum assalam warahmatullahi wabarakatuh. How can I assist you today?';
  }

  // asked about "me" specifically -> per your instruction
  if(/\babout me\b|\bwho am i\b|\bwho are i\b|\btell me about me\b/.test(msg)){
    return BOT.aboutIfAskedAboutYou;
  }

  // who made you / who are you
  if(/\bwho (made|created) you\b|\bwho are you\b|\bwho created you\b/.test(msg)){
    return 'I am Cyberx — created by Dcyberx. If you ask about him, I say: ' + BOT.aboutIfAskedAboutYou;
  }

  // socials: check site keywords and return anchor links
  if(/\btiktok\b/.test(msg)) return `TikTok: ${BOT.socials.tiktok}`;
  if(/\binstagram\b|\big\b/.test(msg)) return `Instagram: ${BOT.socials.instagram}`;
  if(/\bgithub\b|\bgit\b/.test(msg)) return `GitHub: ${BOT.socials.github}`;
  if(/\bdiscord\b|\bserver\b/.test(msg)) return `Discord: ${BOT.socials.discord}`;
  if(/\bgumroad\b/.test(msg)) return `Gumroad: ${BOT.socials.gumroad}`;
  if(/\bsocials\b|\bsocial\b|\bprofile\b/.test(msg)){
    return `Socials:\nTikTok: ${BOT.socials.tiktok}\nInstagram: ${BOT.socials.instagram}\nGitHub: ${BOT.socials.github}\nDiscord: ${BOT.socials.discord}\nGumroad: ${BOT.socials.gumroad}`;
  }

  // personal life questions
  if(/\b(girlfriend|dating|relationship)\b/.test(msg)) return BOT.personal.status;
  if(/\brace\b|\bethnic\b/.test(msg)) return BOT.personal.race;
  if(/\bage\b|\bhow old\b/.test(msg)) return BOT.personal.age;
  if(/\bhobby|hobbies|what do you like|likes\b/.test(msg)) return `Hobbies:\n- ${BOT.personal.hobbies.join('\n- ')}\nBest color: ${BOT.personal.bestColor}.`;
  if(/\blocation|live|where (do|are) you\b/.test(msg)) return `I live at ${BOT.personal.location} and study at ${BOT.personal.school}.`;
  if(/\bcertificate|certificates|qualification\b/.test(msg)) return `Certificates: ${BOT.personal.certificates.join(', ')}.`;
  if(/\bmovies\b|\bfavourite movie\b|\bfavs\b/.test(msg)) return `Favorite movies: ${BOT.movies.join(', ')}`;

  // jokes and reminders
  if(/\bjoke\b|\bmake me laugh\b|\bmake me smile\b/.test(msg)){
    const jokes = [
      "May I make you smile? Here's one: Why did the computer show up at work late? It had a hard drive.",
      "Joke: Why do hackers wear glasses? To improve their 'site'! 😄",
      "Short: I told my laptop I needed a break — it said 'No problem, I'll go to sleep.'"
    ];
    return jokes[Math.floor(Math.random()*jokes.length)];
  }
  if(/\bremind(er| me)|islamic|reminder\b/.test(msg)){
    const rem = [
      "Islamic reminder: Pray on time — it's a shield. May Allah bless your efforts.",
      "Reminder: Say Alhamdulillah for small wins, and Bismillah before new tasks."
    ];
    return rem[Math.floor(Math.random()*rem.length)];
  }

  // help / capabilities
  if(/\bhelp\b|\bwhat can you do\b|\bcapabilities\b/.test(msg)){
    return "I can share socials, personal info about Dcyberx, tell jokes, give short Islamic reminders, and chat via text or voice. Try: 'socials', 'about me', 'joke', 'reminder', 'who made you'.";
  }

  // fallback polite answer
  return "I didn't quite catch that. Ask me for socials, a joke, or an Islamic reminder. May I make you smile or give a reminder?";
}

/* handle send */
function handleSend(){
  const text = userInput.value.trim();
  if(!text) return;
  appendMessage(text, 'user');
  userInput.value = '';
  const reply = processInput(text);
  setTimeout(()=>{ appendMessage(reply, 'bot'); speak(reply); }, 300);
}

/* overlay toggles */
logo.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  initialGreeting();
  userInput.focus();
});

closeChat.addEventListener('click', () => {
  overlay.classList.add('hidden');
  // stop recognition if running
  if(recognition && listening){ recognition.stop(); listening=false; voiceBtn.textContent='Start Mic'; }
});

/* send events */
sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keydown', (e)=>{ if(e.key==='Enter') handleSend(); });

/* voice recognition setup (if available) */
if('webkitSpeechRecognition' in window || 'SpeechRecognition' in window){
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onresult = function(event){
    const text = event.results[0][0].transcript;
    appendMessage(text, 'user');
    const reply = processInput(text);
    setTimeout(()=>{ appendMessage(reply, 'bot'); speak(reply); }, 300);
  };
  recognition.onend = function(){
    listening = false;
    voiceBtn.textContent = 'Start Mic';
  };
  recognition.onerror = function(e){
    listening = false;
    voiceBtn.textContent = 'Start Mic';
    appendMessage('Microphone error or permission denied.', 'bot');
  };

  voiceBtn.addEventListener('click', ()=>{
    if(!recognition) return;
    if(!listening){
      try{
        recognition.start();
        listening = true;
        voiceBtn.textContent = 'Stop Mic';
      }catch(e){
        appendMessage('Unable to start microphone. Check permission.', 'bot');
      }
    } else {
      recognition.stop();
      listening = false;
      voiceBtn.textContent = 'Start Mic';
    }
  });
} else {
  voiceBtn.addEventListener('click', ()=>{ appendMessage('Voice recognition not supported in this browser.', 'bot'); });
}

/* replay last voice */
speakLastBtn.addEventListener('click', ()=>{ if(lastBotSpeech) speak(lastBotSpeech); else appendMessage('No speech yet.', 'bot'); });

/* keyboard shortcut: Esc closes chat */
document.addEventListener('keydown',(e)=>{
  if(e.key==='Escape') overlay.classList.add('hidden');
});

/* Expose appendMessage and speak to window (if needed elsewhere) */
window.appendMessage = appendMessage;
window.speak = speak;

</script>
</body>
</html>
