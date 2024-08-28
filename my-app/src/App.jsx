
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
  // const [userId, setuserId] = useState(testUserId)
  
  useEffect(() => {
    // Define an async function
    
    if (localStorage.getItem('token')) {
      console.log(localStorage.getItem('token'))
    // Call the async function
    fetchConversations()};
  }, [userId]);
  



// ------------------------------------------------------------------------------------------
//General Functions

const checkLogIn = async () => {
  if (userId) {
    fetchConversations()
  }
}

  //User Functions

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
            navigate('/')
        } else { 
            console.error("Error:", response.statusText)
          }
      } catch(error) {
          console.error('Error:', error)
      }
  }
  



// ------------------------------------------------------------------------------------------
  //Conversation Functions
  
  const fetchConversations = async () => {
    try {
      // Fetch data using await
      const response = await fetch(`${apiKey}/conversation/${userId}`, {
        method: 'GET',
      });
      const data = await response.json();
  
      // Check if data is an array, if not setConversations to an empty array
      if (Array.isArray(data)) {
        setConversations(data);
      } else {
        setConversations([]);
      }
    } catch (error) {
      console.error('Error fetching conversations:', error);
      // If an error occurs, set conversations to an empty array
      setConversations([]);
    }
  };
  
  

  
    // New Conversation
    const newConversation = async () => {
      try {
        const response = await fetch(`${apiKey}/conversation/${userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            subject: "NewConversationTestSubject",
            messages: [],
            timeCreated: "Test Time"
          })
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const newConversation = await response.json();
        
        setConversations(prevConversations => [...prevConversations, newConversation]);
    
      } catch (error) {
        console.error('Error creating a new conversation:', error);
      }
    };

    // Delete Conversation

    const handleDelete = async (id) => {
      const userConfirmed = window.confirm("Are you sure you want to delete this conversation?")
      if (!userConfirmed) {
        return 
      }
      try {
        const response = await fetch(`${apiKey}/conversation/${id}`, {
          method: 'DELETE',
        })
          // removing the deleted conversation from the state
          setConversations(prevConversations => prevConversations.filter(emp => emp._id !== id))
          // displaying a message that conversation was deleted with the toast library 
          // navigating to the conversations page after the deletion
          setMessages([])
          fetchConversations()     
      } catch (error) {
        console.error("Error:", error.message)
      }
    }


  
// ------------------------------------------------------------------------------------------


//Message Functions

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
          handleConversationSelect(selectedConversationId)
          setInput('')
      }
      catch(error){
        console.error("Error:", error.message)
      }
    }

    
  //Select Conversation & Retrieve Messages
  const handleConversationSelect = async (_id) => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      console.log(token)
      if (!token) {
        console.error('No token found');
        return;
      }
  
      setSelectedConversationId(_id);
  
      const response = await fetch(`${apiKey}/message/${_id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
  
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
      // If the messages return too late or there is an error, then set the messages to an empty array
      setMessages([]);
      navigate('/')
    }
  };
  

  

return (
  <>
    <Routes>
      <Route path="/" element={
          <div className="App">
            <header className="App-header">
              <div className="container-fluid">
                <div className="nav-chat-container">
                  <Navbar />
                  <SideBar conversations={conversations} newConversation={newConversation} handleConversationSelect={handleConversationSelect} handleDelete={handleDelete}/>
                  <Chatbox
                    messages={messages}
                    setMessages={setMessages}
                    input={input}
                    setInput={setInput}
                    sendMessage={sendMessage}
                    handleDelete={handleDelete}
                  />
                  <LoginForm userId={userId} setuserId={setuserId} />
                </div>
              </div>
            </header>
          </div>
        }
      />
      <Route path="/signup" element={<SignUp addUser={addUser} />} />
    </Routes>
  </>
);
};

export default App;