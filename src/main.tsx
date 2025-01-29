// import App from './App.jsx'
import styles from "./index.module.css"
// import { StrictMode } from 'react'
import Lesson03 from "./lessons/lesson03/Lesson03.jsx"
import { createRoot } from 'react-dom/client'
import Homework05 from "./homeworks/homework05/Homework05.js"
import Lesson05 from "./lessons/lesson05/Lesson05.js"
import Feedback from "./components/Feedback/Feedback.jsx"
import Homework07 from './homeworks/homework07/Homework07.js'
import App from "./App.js"
import Cocktail from "./components/Cocktail/Cocktail.js"
// import Counter from './components/Counter/Counter.tsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
  {/* <Lesson03/>
   <Feedback/>
   <Homework05/>
   <Homework07/> */}
   {/* <Cocktail/> */}
   <App/>
  </>,
);
