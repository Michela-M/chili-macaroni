// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Change this import

import './index.css';
import App from './App';

// Use createRoot() to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
