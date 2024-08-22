
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

const App = () => {

  const navigate = useNavigate()
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [selectedConversationId, setSelectedConversationId] = useState('')
  const [conversations, setConversations] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const testUserId = '66bea5d4b257f0beea286433'
  
  
  useEffect(() => {
    // Define an async function
    
  
    // Call the async function
    fetchConversations();
  }, [testUserId]);
  



// ------------------------------------------------------------------------------------------


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
            console.log('user created successfully')
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
      const response = await fetch(`${apiKey}/conversation/${testUserId}`, {
        method: 'GET',
      });
      const data = await response.json();
      // Update state with the retrieved data
      setConversations(data);
    } catch (error) {
      console.error('Error fetching conversations:', error);
    }
  };
  

  //Select Conversation
  const handleConversationSelect = async (_id) => {
    try {
      setSelectedConversationId(_id)
      await fetch(`${apiKey}/message/${_id}`, {
          method: 'GET',
          
      })
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching conversations:', error)); 
    }
    catch (error) {
      console.error('Error creating a new conversation:', error);
    }
    };
  
    // New Conversation
    const newConversation = async () => {
      try {
        const response = await fetch(`${apiKey}/conversation/${testUserId}`, {
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
        if (userConfirmed) {
          // removing the deleted conversation from the state
          setConversations(prevConversations => prevConversations.filter(emp => emp._id !== id))
          // displaying a message that conversation was deleted with the toast library 
          // navigating to the conversations page after the deletion
          setMessages([])
          fetchConversations()
        } else {
          console.error("Error:", response.statusText)
        }       
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

  

  

return (
  <>
    <Routes>
      <Route path="/" element={
          <div className="App">
            <header className="App-header">
              <div className="container-fluid">
                <div className="nav-chat-container">
                  <Navbar />
                  <SideBar conversations={conversations} newConversation={newConversation} handleConversationSelect={handleConversationSelect}/>
                  <Chatbox
                    messages={messages}
                    setMessages={setMessages}
                    input={input}
                    setInput={setInput}
                    sendMessage={sendMessage}
                    handleDelete={handleDelete}
                  />
                  <LoginForm />
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