import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HomePage from './Components/Homepage' // Import the HomePage component

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HomePage /> {/* Render the HomePage component */}
  </React.StrictMode>,
  document.getElementById('root')
);
