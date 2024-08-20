import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar.jsx';
import Chatbox from './components/Chatbox.jsx';
import SideBar from './components/SideBar.jsx';
import LoginForm from './components/LoginForm.jsx';

const App = () => {

  const navigate = useNavigate()
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [selectedConversationId, setSelectedConversationId] = useState('')
  const [conversations, setConversations] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const testUserId = '66bea5d4b257f0beea286433'


useEffect(() => {
  // Retrieve conversations upon render
  // fetch(`${apiKey}/conversations/:id`, {
  //below API call uses a hard-coded user ID from a test user
  fetch(`${apiKey}/conversation/${testUserId}`, {
      method: 'GET',
  })
    .then(response => response.json())
    .then(data => setConversations(data))
    .catch(error => console.error('Error fetching conversations:', error));
}, []);
  
  

  //Select Conversation
  const handleConversationSelect = async (_id) => {
      setSelectedConversationId(_id)
      fetch(`${apiKey}/message/${_id}`, {
          method: 'GET',
          
      })
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching conversations:', error));
    };
  
    //New Conversation
    const newConversation = async (id) => {
      // fetch(`${apiKey}/user/${id}`, {
      //Below uses hard-coded testUserId
      fetch(`${apiKey}/user/${testUserId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(newMessage)
    })



    //Send Message
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

    //Add User
  const addUser = async (newUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_KEY}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
        const responseBody = await response.json()
        if (response.ok) {
          console.log('user created successfully')
          navigate('/')
      } else { 
          console.error("Error:", response.statusText)
        }
    } catch(error) {
        console.error('Error:', error)
    }
}

  

  return (
    <>
  
     <div className="App">
       <header className="App-header">
         <div className="container-fluid">
         <div className="nav-chat-container ">
           <Navbar />
           <SideBar conversations={conversations} handleConversationSelect={handleConversationSelect} />
           <Chatbox messages={messages} setMessages={setMessages} input={input} setInput={setInput} sendMessage={sendMessage}/>
           <LoginForm />
           </div>
         </div>
       </header>
     </div>

        <Routes>
        <Route path="/signup" element={<SignUp addUser={addUser} />}/>
        
        
      </Routes>
    </>  
  );
}
}
export default App;
