import React from 'react';
import { useState, useEffect } from 'react';



const SideBar = ({ conversations, handleConversationSelect }) => {
  return (
    <div className="offcanvas offcanvas-start" 
      data-bs-scroll="true" 
      data-bs-backdrop="false" 
      tabIndex="-1" 
      id="side-bar-mobile" 
      aria-labelledby="offcanvasWithBothOptionsLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title text-light" id="offcanvasWithBothOptionsLabel">Chat History</h5>
        <button type="button" className="btn-close bg-secondary" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body text-light">
        <ul>
          {conversations.map((conversation) => (
            <li
              key={conversation._id}
              className="conversations"
              onClick={() => handleConversationSelect(conversation._id)}
            >
              {conversation.subject}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};




export default SideBar;
