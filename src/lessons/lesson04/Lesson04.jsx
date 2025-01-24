import { useState } from "react"
// import lesson04 from "./lesson04.css"

export default function Lesson04() {
  // let count = 0

  // const handlePlus = () => {
  //   count++
  //   console.log(count);


  // let result = useState(0)

  // let count = result[0]
  // let setCount = result[1]

  let [count, setCount] = useState(0)


  const handlePlus = () => {
    setCount(prev => prev+1)
  }

  const handleMinus = () => {
    setCount(prev => prev-1)
  }
 


  

  return (
    <div>
      <h2>React useState() hook 🪝</h2>
      <div className="counter">
        <button onClick={handleMinus}>-</button>
        <span>
          {count}
        </span>
        <button onClick={handlePlus}>+</button>
      </div>
    </div>
  )
}
