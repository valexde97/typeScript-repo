import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import CatInfo from "../../components/CatInfo/CatInfo";
import styles from "../lesson10/lesson10.module.css"
import MyButton from "../../components/MyButton/MyButton";
interface ICatImageData {
  url: string;
}
interface ICatFactData {
  fact: string;
}
export default function Lesson10(): JSX.Element {
  let isExist:boolean = true;
  const [catImg, setCatImage] = useState<string>("");
  const [catText, setCatText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [catArray, setCatArray] = useState<string[]>([]);
  const fetchCatImage = async (): Promise<void> => {
    setIsLoading(true);
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
    );
    const data: ICatImageData[] = await res.json();
    setCatImage(data[0].url);
    setIsLoading(false);
  };
  const delFacts = (): void => {
    setCatArray([]);
    isExist = false;
  };
  const fetchTextCat = async (): Promise<void> => {
    const res = await fetch("https://catfact.ninja/fact");
    const data: ICatFactData = await res.json();
    setCatText(data.fact);
    setCatArray((prevArray) => [...prevArray, data.fact]);
    isExist = true;
  };
  const handleGetCat = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      fetchCatImage();
      fetchTextCat();
    }, 1500);
  };
  useEffect(() => {
    handleGetCat();
  }, []);
  const handleGetCatAndFact = (): void => {
    fetchCatImage();
    fetchTextCat();
  };
  return (
    <div className={styles.cat_wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.catWrapper}>
            <img src={catImg} alt="A random cat" />
          </div>
        </>
      )}
      <button onClick={handleGetCatAndFact}>Get more info!</button>
      
      {catArray.length > 0 && (
        <button onClick={delFacts}>
          DELETE ALL DATA
        </button>
      )}
      
      <ul>
        {catArray.map((fact, index) => (
          <CatInfo key={index} info={fact} />
        ))}
      </ul>
    </div>
  );
}
