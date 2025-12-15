const RATE_LIMIT = 10; // requests
const WINDOW_MS = 60 * 1000; // 1 minute
const ipStore = new Map();

export default async function handler(req, res) {
  // ------------------------------------------------------------
  // 🔒 CORS (LOCKED)
  // ------------------------------------------------------------
  const ALLOWED_ORIGIN = 'https://dcyberx.github.io';
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // ------------------------------------------------------------
  // 🚦 Rate limiting (per IP)
  // ------------------------------------------------------------
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0] ||
    req.socket.remoteAddress ||
    'unknown';

  const now = Date.now();
  const entry = ipStore.get(ip) || { count: 0, start: now };

  if (now - entry.start > WINDOW_MS) {
    entry.count = 0;
    entry.start = now;
  }

  entry.count++;
  ipStore.set(ip, entry);

  if (entry.count > RATE_LIMIT) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  // ------------------------------------------------------------
  // 🧠 SIM.AI request
  // ------------------------------------------------------------
  try {
    const { input, conversationId } = req.body;

    if (!input || typeof input !== 'string') {
      return res.status(400).json({ error: 'Invalid input' });
    }

    if (!process.env.SIM_API_KEY) {
      return res.status(500).json({ error: 'SIM API key missing' });
    }

    const response = await fetch(
      "https://www.sim.ai/api/workflows/487107e5-4ced-48e8-8737-83cc46bb68fa/execute",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': process.env.SIM_API_KEY
        },
        body: JSON.stringify({
          input,
          conversationId: conversationId || 'default'
        })
      }
    );

    if (!response.ok) {
      const err = await response.text();
      return res.status(response.status).json({ error: err });
    }

    const data = await response.json();

    return res.status(200).json({
      content:
        data?.result?.content ??
        data?.content ??
        'No response'
    });

  } catch (e) {
    console.error('SIM.AI failure:', e);
    return res.status(500).json({
      content: 'Backend error. Contact Dcyberx@proton.me'
    });
  }
}
