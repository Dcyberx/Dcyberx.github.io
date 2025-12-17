// Levenshtein Distance function to calculate the similarity score
const levenshtein = (a, b) => {
  const tmp = [];
  let i, j, alen = a.length, blen = b.length, score;

  // Handle case where one of the strings is empty
  if (alen === 0) return blen;
  if (blen === 0) return alen;

  // Create a 2D array for dynamic programming
  for (i = 0; i <= alen; i++) tmp[i] = [i];

  for (j = 0; j <= blen; j++) tmp[0][j] = j;

  // Fill in the 2D array with the calculated distances
  for (i = 1; i <= alen; i++) {
    for (j = 1; j <= blen; j++) {
      score = a[i - 1] === b[j - 1] ? 0 : 1;
      tmp[i][j] = Math.min(tmp[i - 1][j] + 1, tmp[i][j - 1] + 1, tmp[i - 1][j - 1] + score);
    }
  }

  return tmp[alen][blen];
};

export async function getBotResponse(userMessage) {
  // Predefined responses with variations and intents
  const responses = [
    {
      intent: "greeting",
      phrases: [
        "hi", "hello","hey","hiya","what's up","howdy","yo","whats up","how is everything"
      ],
      response: "Hello 👋 How can I help you?"
    },
    {
      intent: "greeting_salam",
      phrases: [
        "Assalam alikum","Assalam alaikum warahmatullahi wabarakatuh","Assalam alykum"
      ],
      response: "wa-alikum salam warahmatullahu wabarakatuh"
    },
    {
      intent: "greeting_morning",
      phrases: [
        "good morning","morning","how is your morning","morning to you"
      ],
      response: "Good morning too, dear!"
    },
    {
      intent: "greeting_afternoon",
      phrases: [
        "good afternoon","afternoon","how is your afternoon","good afternoon to you"
      ],
      response: "Good afternoon too, dear!"
    },
    {
      intent: "greeting_evening",
      phrases: [
        "good evening","evening","good evening to you","how is your evening"
      ],
      response: "Good evening too, dear!"
    },
    {
      intent: "thank_you",
      phrases: [
        "thank you","thanks","my thanks","appreciate it","thanks a lot","thanks for your help","your good","thanks alot","i relly appreciate","thank you so much","many thanks", "cheers","i am much obliged"
      ],
      response: "You're welcome! 🙌 If you need anything else, I'm here."
    },
    {
      intent: "thanks_islamic",
      phrases: [
        "barakallahu fikum"
      ],
      response: "fikum barakallah"
    },
    {
      intent: "goodbye",
      phrases: [
        "bye","goodbye","see you","take care","later","peace","see yah","take care","catch you later","see you soon","talk to you later","farewell", "good bye for now"
      ],
      response: "Goodbye 👋 Stay safe and keep learning!"
    },
    {
      intent: "help",
      phrases: [
        "help","can you help me","assist","support","need help","guide me","give me some assistance"
      ],
      response: "Sure! Tell me what I can help with, if it's under my ability."
    },
    {
      intent: "who_are_you",
      phrases: [
        "who are you","what are you","tell me about yourself","who is this","who's talking","what is your name","explain yourself","talk about your self","tell me about yourself","your self"
      ],
      response: "I'm Cyber Bot 🤖, your CyberTech AI assistant."
    },
    {
      intent: "how_are_you",
      phrases: [
        "how are you","how's it going","how are things","what's up","how's everything","how are you doing","how is your day","how is your day going"
      ],
      response: "I'm doing great ⚡ Ready to help you with anything tech-related!"
    },
    {
      intent: "why_start_cybertech",
      phrases: [
        "why did you start cybertech","why cybertech","what's the purpose of cybertech","why is cybertech important","why did dcyberx start cybertech","why did he start cybertech","why create cybertech"
      ],
      response: "CyberTech started as a meaningful project born from passion for technology and the desire to inspire others to explore the cyber-tech future ❤️"
    },
    {
      intent: "what_is_cybertech",
      phrases: [
        "what is cybertech","tell me about cybertech","what is this platform","what does cybertech do","cybertech"
      ],
      response: "CyberTech is more than a website — it’s a platform for exploration, creativity, and determination in the digital future 🚀"
    },
    {
      intent: "who_is_dcyberx",
      phrases: [
        "who is dcyberx","tell me about dcyberx","dcyberx","what do you know about dcyberx","do you know dcyberx","about dcyberx"
      ],
      response: 
      "Dcyberx is my father, a teen Muslim digital creator passionate about tech, AI, and cyber-culture. His motto is: *Mindset is success* 💡"
    },
    {
      intent: "what is_his_motto",
      phrases: [
        "what is his motto","what is dcyberx's motto","what is the motto of dcyberx","what is the slogan of dcyberx","what is dcyberx's slogan","his principle", " his mantra", "his philosophy"
      ],
      response: "Mindset is success"
    },
    {
      intent: "what_inspires_him",
      phrases: [
        "what inspires him","what inspired him","what inpired him to start cybertech","what motivates him"
      ],
      response: "Technology inspires him. Every time he sits at a computer, he feels alive — that’s where his true passion exists 💻🔥"
    },
    {
      intent: "what_is_his_mission",
      phrases: [
        "what is his mission","what is the mission of dcyberx","what is dcyberx's mission","what mission does he have","what mission does he have in mind"
      ],
      response: "His mission is to design tools and platforms that empower people to innovate, create, and grow in the digital world 🌍"
    },
    {
      intent: "privacy_policy",
      phrases: [
        "do you ayhve any privay policy","how do you respect our privacy","what is your privacy policy","privacy policy","privacy", "dcyberx nexus privacy policy"
      ],
      response: "CyberTech respects your privacy 🔐. We collect only minimal data needed to improve your experience."
    },
    {
      intent: "how_to_support_cybertech",
      phrases: [
        "how can i support cybertech","how can i support dcyberx","how can i support you","how can i provide support","donate","donations", "how can we support","how can i pay","how can i subscribe","payments","subscriptions", "how can i donate"
      ],
      response: "Payments and donations are accepted via mobile money, cash, or approved digital wallets such as credit cards 💳 , home page, subcriptions or donate"
    },
    {
      intent: "subscription_policy",
      phrases: [
        "how can i subscribe","subscription policy","dcyberx nexus subscription"
      ],
      response: "Dcyberx Nexus program subscriptions are open, pass throught subscription policy policies, subscription policy. then got to homepage, then subscritions 🎓 " 
    },
    {
      intent: "subscription_plans_available",
      phrases: [
        "subscription plans","dcyberx nexus subscription plans","nexus subscritption plans","nexus program subscription plans"
      ],
      response: "Dcyberx nexus Subscription plans are available: daily, weekly  and monthly. with a 10% discount for first 10 qualifiers on all packages"
    },
    {
      intent: "who_can_join_the_program",
      phrases: [
        "who is eligible","who can join the program","who qualifies for the program","program qualifications","qualifiers"
        
      ],
      response: "Anyone can join Dcyberx Nexus Academy — no prior tech knowledge is required to get started 💡"
    },
    {
        intent: "what_to_gain",
        phrases: [
            "what will i gain from the program","what will i gain","what benefits will i get","how will it help me"
        ],
        response: "You will receive training in computer basics, design, Linux, Python, hands-on projects, community access, and free consultations 🧠"
    
    },
    {
        intent: "are_refunds_available",
        phrases: [
            "are refunds available","can i be refunded","is there refund","can i cancel my subscription"
        ],
        response: "Yes. All plans of Dcyberx nexus program are prepaid and refundable, by conytacting Dcyberx and carrying out a refund form, but he gurantees the best of service delivery❌"
    },
    {
        intent: "lessons_online_physical",
        phrases: [
            "are lessons online or physical","online or from home","learning from home or online"
        ],
        response: "Lessons are available both online and physically, depending on the client's desire, location and schedule 🌐"
    },
    {
        intent: "hiring_me_or_getting_me_hire_or_hired",
        phrases: [
            "can i hire him for a job","can he be hired","hiring him","giving him a job","giving him asighnment"
        ],
        response: "Yes. Clients can hire Dcyberx to design their spaces and bring their imagination to life through creative architecture, or anything else regarding tech ✨"
    },
    {
        intent: "does_he_have_a_girlfriend_or_a_gf",
        phrases: [
            "does dcyberx have a gf","does he have a girlfriend","does dcyberx have a girlfriend"
        ],
        response: "let me tell you a secret, What i know he does not have yet but the one will be blessed to have him"
    },
    {
        intent: "dcyberx's_hobby_or_hobbies_or_like_or_favourites",
        phrases: [
            "what are dcyberx's hobbies","what are his favourites","what does dcyberx like","dcyberx hobbies","his favourites"
        ],
        response: "he really likes green, budminton, camping, creative writing, target practise, eagles and chicks"
    },
    {
        intent: "where_does_dcyberx_or_he_live",
        phrases: [
                "where does dcyberx live","where does he live","where does he reside","where is he","where is he living"
        ],
        response: "for now, he lives at Kitebi"
    },
    {
        intent: "where_does_he_study_or_is_he_studying",
        phrases: [
            "where does he study from","where does dcyberx study from","where does he go to school","where is he studying"
        ],
        response: "Dcyberx studies from Kitebi secondary school-kitebi"
    },
    {
        intent: "where_does_he_or_did_he_study_his_primary_or_nursery",
        phrases: [
            "where does he study his nursery  from","where does he study his primary from","where did he study his nursery from","where did he study his primary from"
        ],
        response: "Dcyberx studied from African Academy Nursery and primary school-kitebi"
    }

    // More intents and responses...
  ];

  // Preprocessing the user message to normalize text
  const normalizeText = (text) => {
    return text.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ""); // Remove all non-alphanumeric characters
  };

  // Get the best match based on Levenshtein Distance
  const getBestMatch = (userMessage) => {
    const normalizedUserMessage = normalizeText(userMessage);
    let bestMatch = null;
    let lowestDistance = Infinity;

    // Loop through predefined responses and calculate Levenshtein Distance for each phrase
    for (let response of responses) {
      for (let phrase of response.phrases) {
        const normalizedPhrase = normalizeText(phrase);
        const distance = levenshtein(normalizedUserMessage, normalizedPhrase);

        // If the distance is the lowest so far, update the best match
        if (distance < lowestDistance) {
          lowestDistance = distance;
          bestMatch = response.response;
        }
      }
    }

    // If no match is found, return "I'm still learning, can you rephrase?"
    return bestMatch || "I'm still learning, can you rephrase?";
  };

  // Return the best match
  return getBestMatch(userMessage);
}
