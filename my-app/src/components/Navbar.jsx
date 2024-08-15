import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar px-2">
      <div id="button-container d-none d-lg-block d-md-block">
        <button className="btn active border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#side-bar-mobile" aria-controls="side-bar-mobile">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </button>
      </div>
      <a className="nav-link fw-bold" href="#">NETSIA</a>
      <button className="btn active" type="button" data-bs-toggle="offcanvas" data-bs-target="#login-side-bar" aria-controls="login-side-bar">Login</button>
    </nav>
  );
};

export default Navbar;
