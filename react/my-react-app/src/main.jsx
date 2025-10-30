import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import List from './Practice/List.jsx'
import Count from './Practice/Count.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <List/> */}
    <Count/>
  </StrictMode>,
)
