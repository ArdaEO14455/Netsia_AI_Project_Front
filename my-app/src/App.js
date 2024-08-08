import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';


function App() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  

  const handleSend = () => {
    if (input.trim() !== '') {
      // User message
      setMessages([...messages, { user: 'User', text: input }]);
      setInput('');

      // Mock response
      setMessages(prevMessages => [
        ...prevMessages,
        // { user: 'User', text: input },
        { user: '', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
      ]);
    }
  };

  
  return (
<div class="App">
  <header class="App-header">
    <div class="container-fluid">

{/* Chat History Column */}

<div class="d-flex flex-row overflow-y-scroll" id="side-bar-container">
  <div class="d-flex flex-column" id="button-and-sidebar-container">

{/* Side Bar Content */}
    <div class="collapse collapse-horizontal show" id="side-bar">
      <div>
        Chat History
      </div> 
    </div>
  </div>
</div>  
  

{/* Nav + User Prompt */}

<div class="nav-chat-container pb-5">

{/* Nav Bar */}

<nav class="navbar px-2">
<div id="button-container">
      <button 
        class="btn active collapse-toggle border-0 text-start"
        id="side-bar-button"
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#side-bar" 
        aria-expanded="true" 
        aria-controls="side-bar"
      >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
      </button>
    </div>
    <a class="nav-link fw-bold" href="#">NETSIA</a>
    <a class="nav-link" href="#">Login</a>
</nav>


      {/* Chat Container */}
      <div class="chat-container mx-1 border-0">
  <div class="messages mx-1">
    {messages.map((msg, index) => (
      <div key={index} class={`message ${msg.user.toLowerCase()} px-5 fs-5`}>
        <strong>{msg.user}: </strong>
        {msg.text}
      </div>
    ))}
  </div>
</div>


      {/* User Input */}
        <div class="input-container mx-auto">
          <textarea
            class="form-control bg-transparent text-light"
            rows="3"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button class="btn btn-secondary" onClick={handleSend}>
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
