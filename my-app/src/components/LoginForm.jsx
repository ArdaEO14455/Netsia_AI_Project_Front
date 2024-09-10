import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = ({ setuserId, loggedIn, setLoggedIn }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitError, setSubmitError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous errors
        setSubmitError(null);

        // Check if email or password is empty
        if (!email || !password) {
            setSubmitError('Please fill in all fields');
            return;
        }

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_KEY}/auth`, { email, password });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.userId);
            setLoggedIn(true)

            // Redirect or update UI based on successful login
            setuserId(res.data.userId);
            window.location.reload();
        } catch (err) {
            setSubmitError(err.response?.data?.msg || 'Login failed');
        }
    };

    const logOut = async (e) => {
        e.preventDefault();

        try {
            // Optionally call the backend /logout route if needed
            await axios.post(`${process.env.REACT_APP_API_KEY}/auth/logout`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            
            // Clear token and user data from local storage
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            
            // Update loggedIn state to false
            setLoggedIn(false);
            setuserId(null);

            // Navigate to login page or any other page
            navigate('/login');
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    return (
        <div className="offcanvas offcanvas-start" 
            data-bs-scroll="false" 
            data-bs-backdrop="false" 
            tabIndex="-1" 
            id="login-side-bar" 
            aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title text-light" id="offcanvasWithBothOptionsLabel">Login</h5>
                <button type="button" className="btn-close bg-secondary" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body text-light">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <Link to="/signup">Create Account</Link>
                    </div>
                    {submitError && (
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            {submitError}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => setSubmitError(null)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    )}
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
