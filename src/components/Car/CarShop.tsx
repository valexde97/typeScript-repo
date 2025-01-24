import Car from "./Car";
import step from "./Img/step.jpg";

export default function CarShop(): JSX.Element {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Cars</h2>
      <Car brand="Mercedes" color="Black" />
      <Car brand="Opel" color="Yellow" />
      <Car brand="Tesla" color="Red" />
      <Car brand="Lada" color="Green" />
      <Car brand="Audi" color="Pink" />

      <h1>Первый способ подгрузить изображение через импорт</h1>
      <img src={step} alt="step" />

      <h1>Второй способ из папки public</h1>
      <img width={280} src="/vp-1.jpg" alt="img" />
    </div>
  );
}
