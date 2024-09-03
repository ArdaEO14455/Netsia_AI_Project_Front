
//import main CSS file
import './App.css';

// import bootstrap functionality
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//Importing React & Hooks
import React, { useState, useEffect } from 'react';

//Importing React Routing Functions
import { Route, Routes, useNavigate } from 'react-router-dom';

// Importing components
import SignUp from './components/SignUp';
import Navbar from './components/Navbar.jsx';
import Chatbox from './components/Chatbox.jsx';
import SideBar from './components/SideBar.jsx';
import LoginForm from './components/LoginForm.jsx';

//import

const App = () => {

  const navigate = useNavigate()
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [selectedConversationId, setSelectedConversationId] = useState('')
  const [conversations, setConversations] = useState([]);
  const [loggedIn, setloggedIn] = useState(false)
  const apiKey = process.env.REACT_APP_API_KEY;
  
  // const userId = localStorage.getItem('userId')
  const testUserId = '66bea5d4b257f0beea286433'
  const [userId, setuserId] = useState(localStorage.getItem('userId'))
  const token = localStorage.getItem('token')
  
  useEffect(() => {
    console.log('conversation check')
    if (token && userId && !conversations.length) {
    fetchConversations()};
  }, [userId]);














}