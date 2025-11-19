import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import LayoutRoutes from './components/LayoutRoutes'
import './index.css'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
