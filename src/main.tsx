// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import App from './App.jsx'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Counter from './components/Counter/Counter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <Counter /> */}
  </StrictMode>,
)
