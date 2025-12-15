const RATE_LIMIT = 10; // requests
const WINDOW_MS = 60 * 1000; // 1 minute
const ipStore = new Map();

export default async function handler(req, res) {
  // ------------------------------------------------------------
  // 🔒 CORS
  // ------------------------------------------------------------
  const ALLOWED_ORIGIN = 'https://dcyberx.github.io/cyber';
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // ------------------------------------------------------------
  // 🚦 Rate limiting
  // ------------------------------------------------------------
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const entry = ipStore.get(ip) || { count: 0, start: now };
  if (now - entry.start > WINDOW_MS) { entry.count = 0; entry.start = now; }
  entry.count++;
  ipStore.set(ip, entry);
  if (entry.count > RATE_LIMIT) return res.status(429).json({ error: 'Too many requests' });

  // ------------------------------------------------------------
  // 🧠 Serve GitHub HTML and include API key
  // ------------------------------------------------------------
  try {
    const { prompt, conversationId } = req.body;
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Invalid prompt' });
    }

    // Use your Vercel-stored API key
    const apiKey = process.env.SIM_API_KEY; // example
    if (!apiKey) return res.status(500).json({ error: 'API key missing' });

    // Fetch your GitHub HTML
    const githubUrl = 'https://raw.githubusercontent.com/Dcyberx/YOUR-REPO/main/cyber_ai.html';
    const response = await fetch(githubUrl);
    if (!response.ok) return res.status(500).json({ error: 'Failed to fetch GitHub file' });

    let htmlContent = await response.text();

    // Inject API key (securely, only server-side)
    // Example: replace a placeholder in HTML with the key
    htmlContent = htmlContent.replace('{{API_KEY}}', apiKey);

    return res.status(200).json({ content: htmlContent });

  } catch (e) {
    console.error('Error serving GitHub HTML:', e);
    return res.status(500).json({ content: 'Backend error. Contact Dcyberx@proton.me' });
  }
}
