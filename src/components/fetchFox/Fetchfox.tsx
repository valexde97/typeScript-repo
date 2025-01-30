import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import MyButton from "../MyButton/MyButton";
import './fetchFox.css';

// * типизация данных с сервера
interface IFoxData {
  image: string;
  link: string;
}

export default function FetchFox(): JSX.Element {
  // * переменная состояния для хранения полученной с сервера ссылки на картинку
  const [foxImg, setFoxImg] = useState<string>('');

  // * переменная переключатель loader индикатора загрузки
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // * асинхронная функция для получения данных с сервера
  const fetchFox = async (): Promise<void> => {
    const res = await fetch('https://randomfox.ca/floof/');
    const data: IFoxData = await res.json();
    setFoxImg(data.image);
    // ! выключаем loader
    setIsLoading(false)
  };

  // * функция обработчик, которая чуть замедляет вызов fetchFox для красивого отображения loader
  const handleGetFox = ():void => {
    // ! включаем loader
    setIsLoading(true)
    // * функция fetchFox вызовется через 1.5 секунд
    setTimeout(()=> {
      fetchFox();
    }, 500)
  }


  // * оборачиваем fetch запрос в useEffect, чтобы он вызывался только один раз в начале жизненного цикла
  useEffect(() => {
    // вызываем функцию чуть замедляющую вызов
    handleGetFox();
  }, []);

  return (
    <div className="container">
      {isLoading && (
        <div className="loader-overlay">
          <Loader />
        </div>
      )}
      <div className="fox-wrapper">
        <img src={foxImg} alt="Fox" />
      </div>
      <MyButton func={handleGetFox} text="get new fox" />
    </div>
  );
}