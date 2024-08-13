import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Fetch conversation history from the back-end
  useEffect(() => {
    fetch('http://localhost:8000/conversation-history') // Update the URL as needed
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching conversation:', error));
  }, []);

  const handleSend = () => {
    if (input.trim() !== '') {
      // User message
      setMessages([...messages, { user: 'User', text: input }]);
      setInput('');

      // Mock response (this will be replaced by the AI's response)
      setMessages(prevMessages => [
        ...prevMessages,
        { user: '', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
      ]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid">

          {/* Nav + User Prompt */}
          <div className="nav-chat-container">
            {/* Nav Bar */}
            <nav className="navbar px-2">
              <div id="button-container d-none d-lg-block d-md-block">
                {/* Mobile Side-Bar Button */}
                <button
                  className="btn active border-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#side-bar-mobile"
                  aria-controls="side-bar-mobile">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                  </svg>
                </button>
              </div>

              <a className="nav-link fw-bold" href="#">NETSIA</a>
              <a className="nav-link" href="#">Login</a>
            </nav>

            {/* Chat Container */}
            <div className="chat-container mx-1 border-0">
              <div className="messages mx-1">
                {messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.user.toLowerCase()} px-5 fs-5`}>
                    {msg.text}
                  </div>
                ))}
              </div>
            </div>

            {/* User Input */}
            <div className="input-container mx-auto">
              <textarea
                className="form-control bg-transparent text-light"
                rows="3"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="btn btn-secondary" onClick={handleSend}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
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
