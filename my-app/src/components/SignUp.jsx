import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = ({ addUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log({ username, email, password });
    const newUser = {
      username,
      email,
      password
    }
    addUser(newUser)
  };

  return (
      <header className="App-header">
        <div className="container-fluid">
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center">Create an Account</h2>
              <form onSubmit={submit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Create Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Create Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </header>
  );
}

export default SignUp;
