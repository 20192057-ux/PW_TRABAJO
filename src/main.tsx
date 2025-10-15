import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Nosotros from './pages/Nosotros'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './pages/app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
