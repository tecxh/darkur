import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HeartIcon } from '@phosphor-icons/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p className="text-xl text-black">hello</p>
    <HeartIcon />
  </StrictMode>,
)
