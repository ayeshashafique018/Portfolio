// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './styles/global.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import AOS from 'aos';
AOS.init({ duration: 1000, once: true });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
