import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      // Add user message
      setMessages([...messages, { user: 'User', text: input }]);
      setInput('');

      // Add mock response
      setMessages(prevMessages => [
        ...prevMessages,
        // { user: 'User', text: input },
        { user: 'ChatGPT', text: 'test response' }
      ]);
    }
  };

  
  return (
    <div className="App">
      <header class="App-header">
      <div className="container-fluid">

{/* Chat History Column */}

  <div class="side-bar">
    <div class="header">
      Chat History
    </div>
  </div>

{/* Nav + User Prompt */}

<div class="nav-chat-container">

{/* Nav Bar */}

<nav class="navbar px-2">
    <a class="nav-link" href="#">Netsia</a>
    <a class="nav-link" href="#">Login</a>
</nav>

      {/* Chat Container */}
      <div className="chat-container mx-1 border-0">
  <div className="messages mx-1">
    {messages.map((msg, index) => (
      <div key={index} className={`message ${msg.user.toLowerCase()} px-5`}>
        <strong>{msg.user}: </strong>
        {msg.text}
      </div>
    ))}
  </div>
</div>


      {/* User */}
        <div className="input-container mx-auto ">
          <textarea
            class="form-control bg-transparent text-light"
            rows="3"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-secondary" onClick={handleSend}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
          </svg>
          </button>

        </div>
    </div>
    </div>
  
      </header>
    </div>
  );
}

export default App;
