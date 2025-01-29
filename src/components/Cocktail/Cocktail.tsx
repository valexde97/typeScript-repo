import { useEffect, useState } from "react"
import style from "./Cocktail.module.css"

export default function Cocktail():JSX.Element {
  const [name,setName] = useState<string>("")
  const[image,setImage] = useState<string>("")


 async function loadCocktail():Promise<void>{
  const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  const obj = await res.json();
  const {drinks} = obj;
  const {strDrink, strDrinkThumb} = drinks[0];
  setName(strDrink)
  setImage(strDrinkThumb)
 


}
useEffect(()=>{loadCocktail();
},[])
return(
  <div className={style.container}>
  <h1>Cocktail:{name}</h1>
  <img src={image} alt=""/>
  <button type="button" onClick={()=>loadCocktail()}>Next Cocktail</button>
  </div>
)
}
