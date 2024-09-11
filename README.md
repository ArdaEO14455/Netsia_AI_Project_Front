# Netsia AI Project Front End

This AI application is designed to work as a development tool for company developers. Sharing many of its components and concepts with chatGPT, it serves as a conversation platform to interact with the AI.


## Prerequisites

### Setup

Ensure that you have the following software installed:

    Node.js (version 16.x or later)
    npm (version 7.x or later) or yarn (version 1.x or later)
    Python 3.x (for virtual environment setup)

Once you've cloned the repository, change directory to the parent of 'my-app'. Ensure that you have the following software installed:

    Node.js (version 16.x or later)
    npm (version 7.x or later) or yarn (version 1.x or later)
    Python 3.x (for virtual environment setup)


it is recommended to set up a virtual environment with nodeenv using pip to install:


    pip install nodeenv

then activate the virtual environment in your terminal:
 - **On Windows:**

        ```bash
        nodeenv venv
        .\venv\Scripts\activate
        ```

    - **On macOS/Linux:**

        ```bash
        nodeenv venv
        source venv/bin/activate
        ```

### Libraries

Ensure that you are in the my-app directory, and install dependencies within the virtual environment:
    
    cd my-app
    npm install

Use check that depenencies are installed in the terminal: 

    npm list



you should have the following:

@popperjs/core@2.11.8 
@testing-library/jest-dom@5.17.0
@testing-library/react@13.4.0
@testing-library/user-event@13.5.0
bootstrap@5.3.3
dotenv@16.4.5
jwt-decode@4.0.0
react-copy-to-clipboard@5.1.0
react-dom@18.3.1
react-icons@5.3.0
react-router-dom@6.26.0
react-scripts@5.0.1
react-syntax-highlighter@15.5.0
react-type-animation@3.2.0
react@18.3.1
web-vitals@2.1.4



## Other Dependencies

As this application is in development, it requires two other repositories to be utilized:

Node.js API: https://github.com/ArdaEO14455/Netsia_AI_Project_Back
Python Webserver (AI): https://github.com/atabahr/Flask

Set up the Node.js API using the README in that repository. Once set up on a development server, ensure that the server's URI is added to the env in this repository under REACT_APP_API_KEY

### Running the Application

start the development server:

    npm start

This will start a development server at http://localhost:3000 by default


### PlantUML Sequence Diagram:
![PlantUML Sequence Diagram](/docs/plantuml_sequence_diagram.png)

