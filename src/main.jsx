import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Payments from './components/payments/Payments'
import Home from './components/home/Home'
import Deposits from './components/deposits/Deposits'
import History from './components/history/History'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="payments" element={<Payments />} />
          <Route path="deposits" element={<Deposits />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
