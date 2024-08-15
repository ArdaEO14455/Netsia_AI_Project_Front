import React from 'react';
import Navbar from './Navbar';
import Chatbox from './Chatbox';
import SideBar from './SideBar';
import LoginForm from './LoginForm';
import { useState, useEffect } from 'react';

const MainPage = () => {
const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [conversations, setConversations] = useState({});
  const [selectedConversation, setSelectedConversation] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(`${apiKey}/allConversations`)
      .then(response => response.json())
      .then(data => setConversations(data))
      .catch(error => console.error('Error fetching conversations:', error));
  }, [apiKey]);

  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { user: 'User', text: input }]);
      setInput('');

      // Mock response
      setMessages(prevMessages => [
        ...prevMessages,
        { user: '', text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
      ]);
    }
  };
  
  const handleConversationSelect = (conversationKey) => {
    setSelectedConversation(conversations[conversationKey]?.messages || []);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid">
        <div className="nav-chat-container ">
          <Navbar />
          <SideBar conversations={conversations} handleConversationSelect={handleConversationSelect} />
          <Chatbox messages={selectedConversation} input={input} setInput={setInput} handleSend={handleSend} />
          <LoginForm />
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainPage;