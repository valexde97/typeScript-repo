import React, { useEffect, useState } from 'react'
import Button from '../../homeworks/homework03/Button'

export default function Lesson08():JSX.Element {
  const [count, setCount] = useState<number>(0)
  const [dog, setDog] = useState<string>("")
  const [toggle, setToggle] = useState<boolean>(true)
  
  
  
  const handleIncrease = ():void => {
    setCount(prev => prev + 1)

    // let num = 0
    // num +=1
  }

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => setDog(data.message));
  },[])

console.log("lesson 8 render", dog);



  return (
    <div>
      <h2>UseEffect + migrate components⚡</h2>
      <p>Чтобы использовать типизированный компонент, нужно передать все props </p>
<Button
text="Click me"
func={() =>console.log("click")}
type="button"
/>
    </div>
  )
}
