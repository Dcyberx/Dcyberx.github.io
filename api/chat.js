export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    try {
        const { input, conversationId } = req.body;
        if (!input) return res.status(400).json({ error: 'Input is required' });
        const response = await fetch(
            'https://www.sim.ai/api/workflows/487107e5-4ced-48e8-8737-83cc46bb68fa/execute',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': process.env.SIM_API_KEY
                },
                body: JSON.stringify({ input, conversationId: conversationId || 'default' })
            }
        );
        const data = await response.json();
        const content = data.result?.content || data.content || 'Sorry, something went wrong.';
        res.status(200).json({ content });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ content: 'Connection error. Contact Dcyberx@proton.me 🔧' });
    }
}

