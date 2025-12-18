/* ================= GEMINI REST CONFIG ================= */
// ⚠️ DEMO ONLY — API KEY IS EXPOSED
// Replace with your own API key from https://aistudio.google.com/app/apikey
const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY || "AIzaSyDXox2vjBpj_iQ0OHOL7D01FnsOZRILfF8";

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
/* ===================================================== */

const systemPrompt = `You are a compassionate and supportive mental health counselor chatbot. Your role is to:

1. Provide emotional support and validation
2. Listen actively and show empathy
3. Offer evidence-based coping strategies when appropriate
4. Encourage healthy habits (exercise, sleep, social connection)
5. Suggest professional help when needed
6. Never diagnose mental health conditions
7. Be non-judgmental and create a safe space for conversation
8. Help users reflect on their feelings and thoughts
9. Provide crisis resources if someone mentions suicidal thoughts or self-harm

Always be concise, empathetic, and practical.
Keep responses conversational and warm.

User: {userMessage}
Assistant:`;

const buildPrompt = (userInput) => systemPrompt.replace('{userMessage}', userInput);

export const getChatbotResponse = async (userMessage) => {
  if (!GEMINI_API_KEY) {
    throw new Error('API key not configured. Please set REACT_APP_GEMINI_API_KEY environment variable.');
  }

  try {
    const response = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: buildPrompt(userMessage) }],
          },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new Error(err);
    }

    const data = await response.json();
    const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || '⚠️ No response from Gemini.';
    
    return botReply.trim();
  } catch (error) {
    console.error('Gemini REST Error:', error);
    throw new Error('⚠️ Gemini is unavailable or rate-limited. Please try again.');
  }
};
