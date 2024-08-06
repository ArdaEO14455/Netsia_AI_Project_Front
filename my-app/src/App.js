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
      <div className="container">

{/* Chat History Column */}

  <div class="column align-items-start">
    <div class="col">
      Chat History
    </div>
  </div>

{/* Nav + User Prompt */}

<div class="nav-chat-container">

{/* Nav Bar */}

      <nav class="navbar">
  <div class="container-fluid">
    <a class="nav-item" href="#">Netsia</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Login</a>
        </li>
      </ul>
    </div>
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
      </div>
      <div className="input-container ">
          <textarea
            class="form-control"
            rows="3"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSend}>Send</button>
        </div>
    </div>
    </div>
  
      </header>
    </div>
  );
}

export default App;
