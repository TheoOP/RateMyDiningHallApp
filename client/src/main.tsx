import React from 'react'
import ReactDOM from 'react-dom/client'
import './config/firebase-config';
import { BrowserRouter as Router, Route, Routes, useMatch, useLocation } from 'react-router-dom';

import App from './App'

// import './index.css'
import './components/cssStyles/css.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
