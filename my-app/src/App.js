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
      <header className="App-header">
      <div className="container-fluid">

{/* Chat History Column */}

  <div class="chat-history">
    <div class="col">
      Chat History
    </div>
  </div>

{/* Nav + User Prompt */}

<div class="nav-chat-container">

{/* Nav Bar */}

      <nav class="navbar">
  <div class="container-fluid">
    <a class="nav-link" href="#">Netsia</a>
    <a class="nav-link" href="#">Login</a>
  </div>
</nav>

      {/* Chat Container */}
      <div className="chat-container">
        <div className="messages">
          {messages.map((msg, index) => (
            <div class ="dialogue" key={index} className={`message ${msg.user.toLowerCase()}`}>
              <strong class="dialogue">{msg.user}: </strong >{msg.text}
            </div>
          ))}
        </div>
      
      <div className="input-container ">
          <textarea
            class="form-control bg-transparent text-light"
            rows="3"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSend}>Send</button>
        </div>
        </div>
    </div>
    </div>
  
      </header>
    </div>
  );
}

export default App;
