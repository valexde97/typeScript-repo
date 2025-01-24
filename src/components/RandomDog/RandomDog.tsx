import { useEffect, useState } from "react";
import style from "./RandomDog.module.css";

export default function RandomDog(): JSX.Element{
 
 const [URL, setUrl] = useState<string>("")
 
 async function loadPicture (): Promise<void>{
const res = await fetch("https://dog.ceo/api/breeds/image/random")
const obj = await res.json();
console.log(obj);
const {message} = obj
setUrl(message)
 }

 useEffect(()=>{
  loadPicture();
 },[])

 return(
  <div className={style.container}>
<h1>Random Dog</h1>
<div className={style.imageContainer}>
  <img className={style.image} src={URL} alt="img" />
</div>
<button className={style.btn} type="button" onClick={()=>loadPicture()}>Next image</button>
  </div>
 )
}