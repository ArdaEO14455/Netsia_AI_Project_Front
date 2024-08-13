import React, { useState } from 'react';
import AuthService from './AuthService';


const Login = ({ history }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      AuthService.login(username, password)
        .then(() => {
          history.push('/');
        })
        .catch(error => {
          console.error('Login failed:', error);
        });
    };
  }