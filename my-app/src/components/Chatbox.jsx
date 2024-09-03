import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const Chatbox = ({ messages, input, setInput, sendMessage, regenerateResponse }) => {
  const [lastMessage, setLastMessage] = useState('');
  const [lastAiMessageId, setLastAiMessageId] = useState(null); // State to track the last AI message
  const [isAnimating, setIsAnimating] = useState(false); // State to track animation status

  useEffect(() => {
    // Find the last message where the sender is 'user'
    const lastUserMessage = [...messages].reverse().find((msg) => msg.sender.toLowerCase() === 'user');
    if (lastUserMessage) {
      setLastMessage(lastUserMessage);
    }

    // Update last AI message ID if the last message was from AI
    const lastAiMessage = [...messages].reverse().find((msg) => msg.sender.toLowerCase() === 'chatgpt');
    if (lastAiMessage) {
      setLastAiMessageId(lastAiMessage._id);
    }
  }, [messages]);

  const submit = (e) => {
    e.preventDefault();
    const newMessage = {
      sender: 'user',
      content: input,
      timestamp: new Date().toISOString(), // Use a real timestamp
    };
    setLastMessage(newMessage);
    sendMessage(newMessage);
    setInput('');
    console.log(lastMessage);
  };

  const handleStopAnimation = () => {
    setIsAnimating(false); // Stop the animation
  };

  return (
    <div className="chat-container mx-1 border-0">
      <div className="chat-interface">
        <div id="messages-container">
          {/* Messages */}
          {messages.map((msg, index) => (
            <div key={msg._id || index} className={`message ${msg.sender.toLowerCase()} px-5 fs-5`}>
              {msg.sender.toLowerCase() === 'chatgpt' && msg._id === lastAiMessageId ? (
                <TypeAnimation
                  sequence={[msg.content]}
                  wrapper="span"
                  speed={75}
                  style={{ display: 'inline-block' }}
                  cursor={true}
                  repeat={0}
                  // onStart={() => setIsAnimating(true)} // Set animation status to true
                  onStart={() => setIsAnimating(true)}
                />
              ) : (
                msg.content
              )}
              
            </div>
            
          ))}

          {/* Regenerate Response Icon */}
          {lastMessage && (
            <button
              id="regenerate-container"
              className="rounded-lg text-token-text-secondary hover:bg-token-main-surface-secondary"
              aria-label="Regenerate Response"
              onClick={() => regenerateResponse(lastMessage)}
            >
              <svg
                id="regenerate-button"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="btn active bi bi-arrow-repeat"
                viewBox="0 0 16 16"
              >
                <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                <path
                  fillRule="evenodd"
                  d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
                />
              </svg>
            </button>
          )}
        </div>

        <div className="input-container mx-auto">
        
          <textarea
            className="form-control bg-transparent text-light"
            rows="3"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {isAnimating ? (
            <button className="btn btn-secondary" onClick={handleStopAnimation}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5z"/>
              </svg>
            </button>
          ) : (
            <button className="btn btn-secondary" onClick={submit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-arrow-up-circle"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
