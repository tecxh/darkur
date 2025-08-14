import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeartIcon } from '@phosphor-icons/react'
import { DarkurProvider } from './DarkurProvider/DarkurProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkurProvider>
      <p className="text-xl text-gray-600">hello</p>
      <button className="bg-sky-500  p-100">hello</button>
      <HeartIcon />
    </DarkurProvider>
  </StrictMode>,
)
