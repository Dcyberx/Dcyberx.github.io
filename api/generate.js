// api/generate.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Get the prompt from the request body
    const { prompt } = req.body;

    // Call the external API using the API key stored in environment variable
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.API_KEY}`, // <-- secure key
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 50,
      }),
    });

    const data = await response.json();
    // Return the API response to the frontend
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

