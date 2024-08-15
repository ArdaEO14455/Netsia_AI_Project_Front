import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage.jsx';

const App = () => {

  

  return (
    <>
        <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/" element={<MainPage />}/>
        
      </Routes>
    </>  
  );
}

export default App;
