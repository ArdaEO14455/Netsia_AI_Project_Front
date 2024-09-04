## Netsia AI Project Front End

This AI application is designed to work as a development tool for company developers. Sharing many of its components and concepts with chatGPT, it serves as a conversation platform to interact with the AI.


### Prerequisites

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

Ensure that you are in the my-app directory, and install dependencies within the virtual environment:

    npm install

Use check that depenencies are installed in the terminal: 

    npm list



you should have the following:

├── @popperjs/core@2.11.8
├── @testing-library/jest-dom@5.17.0
├── @testing-library/react@13.4.0
├── @testing-library/user-event@13.5.0
├── axios@1.7.3
├── bootstrap@5.3.3
├── react-dom@18.3.1
├── react-router-dom@6.26.0
├── react-scripts@5.0.1
├── react-type-animation@3.2.0
├── react@18.3.1
└── web-vitals@2.1.4


### Running the Application

start the development server:

    npm start

This will start a development server at http://localhost:3000 by default

