import React from 'react';

const Navbar = ({ loggedIn, userId, logOut }) => {
  return (
    <nav className="navbar px-2">
      <div id="button-container" className="d-block">
        <button className="btn active border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#side-bar-mobile" aria-controls="side-bar-mobile">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </button>
      </div>
      <a className="nav-link fw-bold" href="#">NETSIA</a>

      {loggedIn === false ? (
        <button className="btn active" type="button" data-bs-toggle="offcanvas" data-bs-target="#login-side-bar" aria-controls="login-side-bar">Login</button>
      ) : (
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg xmlns="http://www.w3.org/2000/svg"
              width="32" height="32"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
            <li>
              <button className="dropdown-item text-light" onClick={logOut}>Log-Out</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
