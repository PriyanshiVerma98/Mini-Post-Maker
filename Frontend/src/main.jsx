import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/dancing-script/700.css";
import "@fontsource/caveat/700.css";

import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
)
