# Mental Health Support Chatbot

A frontend-only mental health support chatbot built with React and powered by Google's Gemini 2.5 Flash API.

## Features

- 🧠 Empathetic AI-powered conversations
- 🎨 Beautiful, responsive UI with gradient design
- 💬 Real-time chat interface
- 📱 Mobile-friendly design
- 🔒 Frontend-only implementation (no backend required)
- ⚡ Fast responses using Gemini 2.5 Flash model

## Setup

### 1. Get your Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Copy your API key

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
REACT_APP_GEMINI_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual Gemini API key.

### 4. Start the Development Server

```bash
npm start
```

The app will open at `http://localhost:3000`

## Usage

1. Click "Start Chatting" to begin a conversation
2. Type your message and press Enter or click Send
3. The chatbot will respond with supportive guidance
4. Use Shift+Enter to create a new line in your message
5. Click "Clear" to start a new conversation

## Features

- **Compassionate Support**: The chatbot is designed to be empathetic and non-judgmental
- **Coping Strategies**: Offers evidence-based coping strategies
- **Safe Space**: Creates a confidential environment for your thoughts
- **Professional Guidance**: Recommends professional help when necessary
- **Crisis Resources**: Provides support if you're in crisis

## Important Disclaimer

⚠️ **This chatbot is not a replacement for professional mental health care.** If you're experiencing severe mental health issues, please reach out to:

- National Suicide Prevention Lifeline: 1-800-273-8255
- Crisis Text Line: Text HOME to 741741
- International Association for Suicide Prevention: https://www.iasp.info/resources/Crisis_Centres/

## Tech Stack

- **React 18** - UI library
- **Gemini 2.5 Flash API** - AI model
- **CSS3** - Styling with gradients and animations
- **Google Generative AI SDK** - API integration

## Project Structure

```
src/
├── components/
│   ├── Chatbot.js       # Main chatbot component
│   └── Chatbot.css      # Chatbot styles
├── services/
│   └── geminiService.js # Gemini API integration
├── App.js               # Root component
├── index.js             # React entry point
└── index.css            # Global styles
public/
└── index.html           # HTML template
```

## Customization

### Modify System Prompt

Edit the `systemPrompt` in `src/services/geminiService.js` to change the chatbot's personality and behavior.

### Change Colors

Update the gradient colors in `src/components/Chatbot.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adjust Model Parameters

In `src/services/geminiService.js`, modify:

```javascript
generationConfig: {
  maxOutputTokens: 1024,  // Adjust response length
  temperature: 0.7,       // Adjust creativity (0-1)
},
```

## Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (irreversible)

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the repository.
