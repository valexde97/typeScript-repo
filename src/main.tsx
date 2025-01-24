// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import App from './App.js'
import Bikeshop from './components/Bike/BikeShop.js'
import CarShop from './components/Car/CarShop.js'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Playground from './components/Playground/Playground.js'
import RandomDog from './components/RandomDog/RandomDog.js'
// import Counter from './components/Counter/Counter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RandomDog/>
    <Playground/>
    <CarShop/>
    <Bikeshop/>
    <App />
    {/* <Counter /> */}
  </StrictMode>,
)
