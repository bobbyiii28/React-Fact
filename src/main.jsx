import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './components/Navbar'
import Body from './components/Body'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
      <Navbar />
      <Body />
  </div>
  
)
