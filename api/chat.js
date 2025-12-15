// ==================== CONFIG ====================
const API_URL = 'https://dcyberx-github-9ii00atnn-dcyberxs-projects.vercel.app/'; //  Vercel URL
const RATE_LIMIT = 10;
const WINDOW_MS = 60 * 1000;
const ipStore = new Map();

// ==================== ELEMENTS ====================
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatMessages = document.getElementById('chatMessages');
const typingIndicator = document.getElementById('typingIndicator');

// ==================== FUNCTIONS ====================
function addMessage(text, type) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', type);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    contentDiv.textContent = text;

    const timeDiv = document.createElement('div');
    timeDiv.classList.add('message-time');
    timeDiv.textContent = 'Just now';

    msgDiv.appendChild(contentDiv);
    msgDiv.appendChild(timeDiv);
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function rateLimitCheck(ip) {
    const now = Date.now();
    const entry = ipStore.get(ip) || { count: 0, start: now };
    if (now - entry.start > WINDOW_MS) { entry.count = 0; entry.start = now; }
    entry.count++;
    ipStore.set(ip, entry);
    return entry.count <= RATE_LIMIT;
}

async function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    addMessage(message, 'user');
    chatInput.value = '';
    typingIndicator.classList.add('active');

    try {
        // Optional client-side IP rate limit (server-side still applies)
        const ip = 'client'; // placeholder, server uses real IP
        if (!rateLimitCheck(ip)) {
            addMessage('Too many requests. Wait a moment.', 'bot');
            typingIndicator.classList.remove('active');
            return;
        }

        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: message })
        });

        const data = await res.json();
        const botResponse = data.content || 'Sorry, I could not process that.';
        addMessage(botResponse, 'bot');

    } catch (err) {
        console.error(err);
        addMessage('Server error. Try again later.', 'bot');
    } finally {
        typingIndicator.classList.remove('active');
    }
}

// ==================== EVENTS ====================
sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });

// ==================== INITIAL WELCOME ====================
addMessage("As-salamu alaykum! 👋 Welcome to The CyberTech. I'm Cyber Bot. Feel free to chat!", 'bot');
