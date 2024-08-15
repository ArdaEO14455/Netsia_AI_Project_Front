import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chatbox from './components/Chatbox';
import SideBar from './components/SideBar';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [conversations, setConversations] = useState({});
  const [selectedConversation, setSelectedConversation] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  // Fetch conversation history and all conversations from the back-end
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
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
