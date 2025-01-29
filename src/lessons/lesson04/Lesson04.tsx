import { useState } from "react"
// import lesson04 from "./lesson04.css"

export default function Lesson04():JSX.Element {
  // let count:number = 0

  // const handlePlus = () => {
  //   count++
  //   console.log(count);


  // let result = useState(0)

  // let count = result[0]
  // let setCount = result[1]

  let [count, setCount] = useState<number>(0)


  const handlePlus = (): void => {
    setCount(prev => prev+1)
  }

  const handleMinus = (): void => {
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
