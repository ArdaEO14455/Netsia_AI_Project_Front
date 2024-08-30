import React, { useState } from 'react';

const Sidebar = ({ 
  conversations, 
  handleConversationSelect, 
  handleDelete, 
  newConversation, 
  renameConversation,
  selectedConversationId,
  setSelectedConversationId
}) => {

  const [newName, setNewName] = useState('');
  const [editingConversation, setEditingConversation] = useState(false)

  const startEditing = (currentName) => {
    setNewName(currentName); // Set the current name to the input field
  };

  const saveNewName = async () => {
    await renameConversation(newName);
    setSelectedConversationId(null); // Reset the state to exit editing mode
    setEditingConversation(false) // Reset the EditingConversation State to un-render the rename input
  };

  return (
    <div className="offcanvas offcanvas-start" 
      data-bs-scroll="true" 
      data-bs-backdrop="false" 
      tabIndex="-1" 
      id="side-bar-mobile" 
      aria-labelledby="offcanvasWithBothOptionsLabel">
      
      <div className="offcanvas-header">
        {/* <h5 className="offcanvas-title text-light" id="sidebar-header">Chat History</h5> */}

        {/* New Conversation Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="dropdown-icon bi bi-pencil-square" viewBox="0 0 16 16" onClick={newConversation}>
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
        </svg>


        <button id="close-sidebar-button"type="button" className="btn-close bg-secondary" width="24" height="24" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      
      <div className="offcanvas-body text-light">
        <ul id="conversations-container">
          {conversations.map((conversation) => (
            <li
              key={conversation._id}
              className="conversation-item"
              
            >
              <div className="conversation-content" >
                {/* Conditional Rendering of Input Field for Renaming */}
                {selectedConversationId === conversation._id && editingConversation == true ? (
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    onBlur={() => {
                      saveNewName();
                      setEditingConversation(false);
                    }} // Save on blur
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') saveNewName(); // Save on Enter key press
                    }}
                  />
                ) : (
                  <span id="conversation-subject" onClick={() => {handleConversationSelect(conversation._id)}}>
                    {conversation.subject}
                  </span>
                )}

                {/* Options Dropdown - Delete & Rename */}
                <div className="dropdown-container">
                  {/* Dropdown Expand Icon */}
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
                    <path d="M3 13a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m0-5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m0-5a.5.5 0 0 1-1 0 1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0z" />
                  </svg>
  
                  <ul className="dropdown-menu">
                    {/* Dropdown - Delete Icon */}
                    <li 
                      className="dropdown-item text-light" 
                      onClick={() => handleDelete(conversation._id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="dropdown-icon bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                      </svg>
                      Delete
                    </li>

                    {/* Dropdown - Rename Conversation Icon */}
                    <li 
                      className="dropdown-item text-light" 
                      onClick={() => {
                        setSelectedConversationId(conversation._id)
                        startEditing(conversation.subject);
                        setEditingConversation(true);
                      }}
                    >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="dropdown-icon bi bi-pencil" viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                    </svg>
                      Rename
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div id="new-conversation" >New Conversation</div>
      </div>
    </div>
  );
};

export default Sidebar;
