import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartProvider from './Context/CartContext.jsx' // ⬅️ Import your context provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>  {/* ⬅️ Wrap App with CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>,
)
