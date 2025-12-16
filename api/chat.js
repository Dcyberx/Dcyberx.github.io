// chat.js

export async function getBotResponse(userMessage) {
  // You can replace this with API calls later
  const responses = {
    "hi": "Hello 👋 How can I help you?",
    "hello": "Hi there! 😊",
    "who are you": "I'm Cyber Bot 🤖, your CyberTech AI assistant.",
    "help": "Sure! Ask me anything about tech or CyberTech."
  };

  const key = userMessage.toLowerCase();
  return responses[key] || "🤔 I'm still learning. Can you rephrase?";
}
