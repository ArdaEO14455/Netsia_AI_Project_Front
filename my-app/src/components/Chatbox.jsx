import React from 'react';

const Chatbox = ({ messages, input, setInput, sendMessage }) => {

  const submit = (e) => {
    e.preventDefault()
    const newMessage = {
    sender: 'user',
    content : input,
    timestamp : 'test'
    }
    sendMessage(newMessage)
  }
  
  return (
    <div className="nav-chat-container ">
      <div className="chat-container mx-1 border-0">
        <div className="messages mx-1 ">
          {messages.map((msg) => (
            <div key={msg._id} className={`message ${msg.sender.toLowerCase()} px-5 fs-5`}>
              {msg.content}
            </div>
          ))}
        </div>
      </div>

      <div className="input-container mx-auto">
        <textarea
          className="form-control bg-transparent text-light"
          rows="3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-secondary" onClick={submit}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
