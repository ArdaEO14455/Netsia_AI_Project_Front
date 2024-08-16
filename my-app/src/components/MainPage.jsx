import React from 'react';
import Navbar from './Navbar';
import Chatbox from './Chatbox';
import SideBar from './SideBar';
import LoginForm from './LoginForm';
import { useState, useEffect } from 'react';

const MainPage = () => {
const [messages, setMessages] = useState([]);
const [input, setInput] = useState('');
const apiKey = process.env.REACT_APP_API_KEY;

  

  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { user: 'user', text: input }]);
      setInput('');

      // Mock response
      setMessages(prevMessages => [
        ...prevMessages,
        { user: '', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
      ]);
    }
  };
  
  const handleConversationSelect = (_id) => {
    fetch(`${apiKey}/message/${_id}`, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => setMessages(data))
    .catch(error => console.error('Error fetching conversations:', error));
  };
  


  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid">
        <div className="nav-chat-container ">
          <Navbar />
          <SideBar handleConversationSelect={handleConversationSelect} />
          <Chatbox messages={messages} input={input} setInput={setInput} handleSend={handleSend} />
          <LoginForm />
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainPage;