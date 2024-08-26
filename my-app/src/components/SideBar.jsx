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
          <ul class="dropdown-menu">
    
    {/* Dropdown Items */}
{/* Dropdown - Delete Icon */}
    <li class="dropdown-item">

      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="dropdown-item bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
      </svg>

</li>


  </ul>


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
