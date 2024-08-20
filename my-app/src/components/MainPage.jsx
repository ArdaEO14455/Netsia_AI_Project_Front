import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Chatbox from './Chatbox';
import SideBar from './SideBar';
import LoginForm from './LoginForm';

const MainPage = () => {
const [messages, setMessages] = useState([]);
const [input, setInput] = useState('');
const [selectedConversationId, setSelectedConversationId] = useState('')
const apiKey = process.env.REACT_APP_API_KEY;


const handleConversationSelect = (_id) => {
    setSelectedConversationId(_id)
    fetch(`${apiKey}/message/${_id}`, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => setMessages(data))
    .catch(error => console.error('Error fetching conversations:', error));
  };

  const sendMessage = async (newMessage) => {
    try {
        const response = await fetch(`${apiKey}/message/${selectedConversationId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify(newMessage)
        })
        const responseBody = await response.json()
        handleConversationSelect(responseBody.conversationId)
    }
    catch(error){
      console.error("Error:", error.message)
    }
  }
  


  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid">
        <div className="nav-chat-container ">
          <Navbar />
          <SideBar handleConversationSelect={handleConversationSelect} />
          <Chatbox messages={messages} setMessages={setMessages} input={input} setInput={setInput} sendMessage={sendMessage}/>
          <LoginForm />
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainPage;