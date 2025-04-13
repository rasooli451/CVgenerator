import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Top from './Top.jsx'
import Information from './Components/Information.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Top />
  </StrictMode>,
)
