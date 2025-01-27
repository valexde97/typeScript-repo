import { useEffect, useState } from "react";
import style from "./homework07.module.css";

export default function Homework07(): JSX.Element {
  const [advice, setAdvice] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function loadAdvice(): Promise<void> {
    setIsLoading(true);
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) throw new Error("Failed to fetch advice");
      const data = await res.json();
      console.log(data);

      setAdvice(data.slip.advice);
    }catch(error){
      console.error("Ошибка загрузки данных:", error);
      setAdvice("Unable to load activity. Please try again.");
    }finally{
      setIsLoading(false)
    }
    }


  
  useEffect(() => {
    loadAdvice();
  }, []);

  return (
    <div className={style.container}>
      <h1>Want some action?</h1>
      <div className={style.advice}>
        <p>{isLoading ? "Loading..." : advice}</p>
      </div>
      <button className={style.btn} type="button" onClick={loadAdvice}>
        Another advice
      </button>
    </div>
  );
}
