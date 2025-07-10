import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // Remove the .jsx extension

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);