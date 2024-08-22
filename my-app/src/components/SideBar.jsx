import React from 'react';

const SideBar = ({handleConversationSelect, conversations, newConversation, handleDelete }) => {

  // const deleteConversation = (e) => {
  //   handleDelete(conversation._id)
  // }

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
      <ul id="conversations-container">
  {conversations.map((conversation) => (
    <li
      key={conversation._id}
      className="conversation-item"
      onClick={async () => handleConversationSelect(conversation._id)}
    >
      <div className="conversation-content">
        {conversation.subject}

        <div className="dropdown-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          </svg>
        </div>
      </div>
    </li>
  ))}
</ul>


        <div onClick={newConversation}>New Conversation</div>
      </div>
    </div>
  );
};




export default SideBar;
