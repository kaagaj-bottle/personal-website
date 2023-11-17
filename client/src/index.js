// importing underlying packages
import 'core-js/stable/index.js'
import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom/client'

// importing from React Router
import { BrowserRouter } from 'react-router-dom'

// import App
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
)
