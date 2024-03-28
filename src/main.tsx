import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import Header from './layout/Header'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <main className="max-w-screen-xl px-8">
        <Router />
      </main>
    </BrowserRouter>
  </React.StrictMode>
)
