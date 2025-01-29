import { useEffect, useState } from "react";
import CatInfo from "../../components/CatInfo/CatInfo";

interface ICatImageData {
    url: string;
  }
  interface ICatFactData {
    fact: string;
  }
  export default function Lesson10(): JSX.Element {
    const [catImg, setCatImage] = useState<string>("");
    const [catText, setCatText] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [facts, setFacts] = useState<string[]>([]); // Массив для хранения всех фактов
    const fetchCatImage = async (): Promise<void> => {
      setIsLoading(true);
      const res = await fetch(
        "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
      );
      const data: ICatImageData[] = await res.json();
      setCatImage(data[0].url);
      setIsLoading(false);
    };
    const fetchTextCat = async (): Promise<void> => {
      const res = await fetch("https://catfact.ninja/fact");
      const data: ICatFactData = await res.json();
      setCatText(data.fact);
    };
    const handleGetCat = (): void => {
        fetchTextCat(); // Загружаем новый факт
        setFacts((prevFacts) => [...prevFacts, catText]); // Добавляем новый факт в массив
      };
    useEffect(() => {
      fetchCatImage();
      fetchTextCat();
    }, []);
    return (
      <div className="cat-wrapper">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <img src={catImg} alt="A random cat" />
        )}
        <CatInfo info={catText} />
        <button onClick={fetchTextCat}>Get more info!</button>
      </div>
    );
  }















