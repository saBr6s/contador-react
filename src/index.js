import React from 'react';
import ReactDOM from 'react-dom/client'; // Note a importação do '/client'
import App from './App';


const container = document.getElementById('root'); 

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
