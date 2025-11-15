import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import Store from './redux/Store.js'
import Navbar from './components/Navbar.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />,
     
    </Provider>
  </React.StrictMode>,
)
