import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage.jsx';

const App = () => {

  const navigate = useNavigate()

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

  

  return (
    <>
        <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/" element={<MainPage addUser={addUser} />}/>
        
      </Routes>
    </>  
  );
}

export default App;
