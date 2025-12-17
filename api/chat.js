export async function getBotResponse(userMessage) {
  // Predefined responses
  const responses = {
    "Assalam alaikum": "Wa-alaikum salam warahmatullahi wabarakatuh.",
    "good morning": "Good morning too, dear!",
    "good afternoon": "Good afternoon too, dear!",
    "good evening": "Good evening too, dear!",
    "hi": "Hello 👋 How can I help you?",
    "hello": "Hi there! 😊",
    "who are you": "I'm Cyber Bot 🤖, your CyberTech AI assistant.",
    "help": "Sure! Tell me what I can help with, if it's under my ability.",
    "how are you": "I'm doing great ⚡ Ready to help you with anything tech-related!",
    "thank you": "You're welcome! 🙌 If you need anything else, I'm here.",
    "thanks": "Anytime 😄 Happy to help!",
    "bye": "Goodbye 👋 Stay safe and keep learning!",
    "goodbye": "See you soon 🚀 Have a great day!",
    "who is dcyberx": "Dcyberx is my father, a teen Muslim digital creator passionate about tech, AI, and cyber-culture. His motto is: *Mindset is success* 💡",
    "about dcyberx": "Dcyberx is the founder of CyberTech — a creative tech hub built from passion, resilience, and love for computers and innovation 🚀",
    "what is his motto": "His motto is *Mindset is success* — because once the mindset changes, everything changes 🧠✨",
    "why did he start cybertech": "CyberTech started as a meaningful project born from passion for technology and the desire to inspire others to explore the cyber-tech future ❤️",
    "what inspires him": "Technology inspires him. Every time he sits at a computer, he feels alive — that’s where his true passion exists 💻🔥",
    "what is his mission": "His mission is to design tools and platforms that empower people to innovate, create, and grow in the digital world 🌍",
    "about cybertech": "CyberTech is a digital hub that blends creativity, innovation, and cyber-culture into one immersive experience 🌐✨",
    "what is cybertech": "CyberTech is more than a website — it’s a platform for exploration, creativity, and determination in the digital future 🚀",
    "privacy policy": "CyberTech respects your privacy 🔐. We collect only minimal data needed to improve your experience.",
    "how can i support cybertech": "You can support CyberTech through subscriptions, donations, or by engaging with and sharing the platform ❤️",
    "subscription policy": "Dcyberx Nexus Academy subscriptions are open to anyone interested in technology, including beginners and tech enthusiasts 🎓",
    "what makes cybertech different": "CyberTech isn’t just a site — it’s a portal into creativity, innovation, and a vision of a connected future 🔮",
    "is cybertech futuristic": "Yes. Every page is designed with a cyber-tech aesthetic to reflect a futuristic and connected digital world 🖥️✨",
    "privacy policy": "CyberTech respects your privacy 🔐. We collect only minimal data needed to improve your experience.",
    "what data do you collect": "We collect only essential data required to enhance user experience. No unnecessary or excessive data is collected 📊",
    "do you sell my data": "No. Your personal data is never sold or shared without your clear consent ❌",
    "how is my data protected": "Your information is protected using industry-standard security measures, including secure protocols like HTTPS 🛡️",
    "is cybertech secure": "Yes. CyberTech uses secure systems and encryption standards to protect you, your information, CyberTech and Dcyberx  safe 🔒",
    "what if i find a security issue": "If you notice or suspect any security threat, please contact Dcyberx immediately for prompt action ⚠️",
    "can i unsubscribe": "Yes, you can request to unsubscribe at any time by contacting Dcyberx ⚙️",
    "how long does unsubscription take": "Unsubscription is processed within 24 hours from the time of your request ⏳",
    "do you offer refunds": "Refunds are evaluated based on participation and the reason for the request, according to our subscription policy 📄",
    "do you guarantee service quality": "Yes. We are committed to delivering the best possible service and user experience at all times ✅",
    "copyright policy": "All content, code, graphics, and designs on CyberTech are owned by CyberTech and rooted under Dcyberx. Unauthorized use is strictly prohibited ⚖️",
    "who owns the content": "All materials on this site are © CyberTech by the root Dcyberx, including code, designs, and graphics 🔒",
    "can i reuse content": "Limited excerpts may be used for educational or non-commercial purposes with proper attribution to Dcyberx 📂",
    "is commercial use allowed": "No. Commercial use, reproduction, or redistribution without permission is not allowed 🚫",
    "what is fair use": "Fair use allows small excerpts for learning or non-commercial purposes, provided proper credit is given to Dcyberx 📘",
    "what happens if i violate copyright": "Any copyright violation may result in immediate enforcement action according to CyberTech policies ⚠️",
    "is hacking allowed": "No. Scamming, unauthorized root access, phishing, or illegal activity is strictly forbidden 🚫",
    "how does cybertech handle violations": "CyberTech enforces strict action against violations to protect users, the platform, and service integrity 🛡️",
    "why are these rules enforced": "These rules ensure fair use, security, and efficient service between users, Dcyberx, and CyberTech 🤝",
    "where can i report abuse": "Any suspected abuse or illegal activity should be reported directly to Dcyberx for immediate action 📩",
    "subscription policy": "Dcyberx Nexus Academy subscriptions are open to anyone interested in technology, including beginners and tech enthusiasts 🎓",
    "who can join the academy": "Anyone can join Dcyberx Nexus Academy — no prior tech knowledge is required to get started 💡",
    "what subscription plans are available": "We offer Daily, Weekly, and Monthly passes with affordable pricing and early-qualifier discounts 💼",
    "daily pass details": "The Daily Pass lasts 1 day and costs 10,000 UGX, with a 10% discount for the first 10 qualifiers ⏱️",
    "weekly pass details": "The Weekly Pass runs for 5 days at 50,000 UGX and includes a 10% discount for early qualifiers 📅",
    "monthly pass details": "The Monthly Pass runs about 20–23 days and costs 200,000 UGX, with a 10% discount for early qualifiers 🗓️",
    "how can i pay": "Payments are accepted via mobile money, cash, or approved digital wallets such as credit cards 💳",
    "what do subscribers get": "Subscribers receive training in computer basics, design, Linux, Python, hands-on projects, community access, and free consultations 🧠",
    "are refunds available": "Yes. All plans are prepaid and refundable, with renewals and refunds handled directly by Dcyberx ❌",
    "how do i cancel my subscription": "You can request cancellation or termination anytime via email or direct request by filling out a refund form 📜",
    "what is dcyberx nexus": "Dcyberx Nexus is a learning program offering both physical and online lessons in technology, design, and digital creativity 🎓",
    "what do you teach at dcyberx nexus": "We teach graphic design, office tools, CAD, operating systems, programming basics, and creative tech skills 💻",
    "do you offer graphic design lessons": "Yes. We offer training in graphic design using tools like Krita and other creative software 🎨",
    "do you teach microsoft office": "Yes. We provide lessons in Microsoft Word and PowerPoint for beginners and practical use 📄",
    "what cad tools do you teach": "We teach CAD tools such as FreeCAD, Tinkercad, and Blender for design and modeling 🧩",
    "do you teach linux": "Yes. Dcyberx Nexus offers Linux basics and fundamentals for understanding operating systems 🐧",
    "do you teach programming": "Yes. We teach programming basics including Python and scripting for beginners 🐍",
    "are lessons online or physical": "Lessons are available both online and physically, depending on the program and schedule 🌐",
    "do you offer diy design services": "Yes. We offer DIY compound designing and artificial architecture services tailored to your ideas 🏗️",
    "can i hire you for design work": "Yes. Clients can hire Dcyberx to design their spaces and bring their imagination to life through creative architecture ✨",
    "play list": "CyberTech has a playlist for the best of motivation and relaxation. found on website. more.",
    "dcyberx girlfriend": "What i know he does not have yet but the one will be blessed to have him",
    "his girlfriend":"What i know he does not have yet but the one will be blessed to have him",
    "dcyberx's favourite colour":"green",
    "dcyberx's hobbies":" he really likes budminton, camping, creative writing, target practise, eagles and chicks",
    "motivational qoutes": "The motivational qoutes are at homepage website, more. they are not just qoutes but his own perspective of success",
    "where does he live": "for now, its Kitebi"
    // More responses...
  };

  // Preprocessing the user message to normalize text
  const normalizeText = (text) => {
    return text.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
  };

  // Simple semantic match using phrase similarity
  const getBestMatch = (userMessage) => {
    const normalizedUserMessage = normalizeText(userMessage);
    let highestScore = 0;
    let bestMatch = null;

    // Check for the best matching sentence or phrase
    for (let key in responses) {
      const normalizedKey = normalizeText(key);
      
      // A simple way to match sentences by checking the number of words in common
      const commonWords = normalizedUserMessage.split(" ").filter(word => normalizedKey.includes(word));
      const score = commonWords.length / normalizedKey.split(" ").length;

      // If the score is higher than the previous best match, update the best match
      if (score > highestScore) {
        highestScore = score;
        bestMatch = responses[key];
      }
    }

    // If no good match is found, return a fallback response
    return bestMatch || "🤔 Can you rephrase, please?";
  };

  // Return the best match
  return getBestMatch(userMessage);
}
