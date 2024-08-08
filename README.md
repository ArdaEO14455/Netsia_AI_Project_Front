Once you've cloned the repository, change directory to the parent of 'my-app' and ensure node and nodeenv is installed:

pip install nodeenv

then activate the virtual environment:

source env/bin/activate

change directory to 'my-app' and use npm to install the neccessary packages:

npm install react-router-dom
npm install bootstrap
npm install @popperjs/core

if you then use 'npm list' in the terminal, you should have the following:

@popperjs/core@2.11.8
├── @testing-library/jest-dom@5.17.0
├── @testing-library/react@13.4.0
├── @testing-library/user-event@13.5.0
├── bootstrap@5.3.3
├── react-dom@18.3.1
├── react-router-dom@6.26.0
├── react-scripts@5.0.1
├── react@18.3.1
└── web-vitals@2.1.4


Making sure you are in the 'my-app' directory, use 'npm start' to run the app in development mode

