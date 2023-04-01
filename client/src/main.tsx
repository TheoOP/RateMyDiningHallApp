import React from 'react'
import ReactDOM from 'react-dom/client'
import './config/firebase-config';
import App from './App'
import $ from 'jquery';

// import './index.css'
import './components/cssStyles/css.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
