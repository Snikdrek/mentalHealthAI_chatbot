import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";
import { CircularProgress, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ClearIcon from "@mui/icons-material/Clear";
import { getChatbotResponse } from "../services/geminiService";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "🧠 Hi! I'm your Mental Health Support Assistant. I'm here to listen and provide support. Remember, while I can offer guidance, I'm not a replacement for professional therapy.",
      timestamp: new Date(),
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* -------- SEND MESSAGE -------- */
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || loading) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setLoading(true);

    try {
      const botReply = await getChatbotResponse(userMessage.text);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: botReply,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: error.message || "⚠️ An error occurred. Please try again.",
          isError: true,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  /* -------- CLEAR CHAT -------- */
  const clearChat = () => {
    setMessages([
      {
        id: 1,
        sender: "bot",
        text: "🧠 Hi! I'm your Mental Health Support Assistant. I'm here to listen and provide support. Remember, while I can offer guidance, I'm not a replacement for professional therapy.",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h1>🧠 Mental Health Support Chatbot</h1>
        <p>AI-powered emotional support & guidance</p>
      </div>

      <div className="messages-container">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`message-wrapper ${m.sender}-message-wrapper`}
          >
            <div
              className={`message ${m.sender}-message ${
                m.isError ? "error-message" : ""
              }`}
            >
              <span>{m.text}</span>
            </div>
          </div>
        ))}

        {loading && (
          <div className="message bot-message loading-message">
            <CircularProgress size={20} />
            <span>Thinking...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={sendMessage} className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Share what's on your mind..."
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !inputValue.trim()}
          title="Send"
        >
          <SendIcon />
        </button>
        <Button
          onClick={clearChat}
          variant="outlined"
          size="small"
          startIcon={<ClearIcon />}
          disabled={messages.length <= 1}
          sx={{ textTransform: "none" }}
        >
          Clear
        </Button>
      </form>

      <p className="chatbot-info">
        ⚠️ This chatbot provides emotional support. For mental health crises,
        call 988 (Suicide & Crisis Lifeline) or your local emergency services.
      </p>
    </div>
  );
};

export default Chatbot;
