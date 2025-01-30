import MyButton from "../../components/MyButton/MyButton";

interface ILibrary {
  library: string;
  developer?: string;
  logo?: string;
}

function showDeveloper(obj: ILibrary): string {
  if (obj.developer) {
    return `Developer of ${obj.library} is ${obj.developer}`;
  }
  return "Not valid data";
}

function Lesson02(): JSX.Element {
  const element: JSX.Element = <h4>Это JSX элемент из переменной element!</h4>;
  const text: string = "Это строка из переменной text...";

  const react: ILibrary = {
    library: "React",
    developer: "Meta",
    logo: "https://cdn.pixabay.com/photo/2022/01/18/08/43/meta-6946620_960_720.jpg",
  };

  const angular: ILibrary = {
    library: "Angular",
    developer: "Google",
  };

  const isLoggedIn: boolean = true;

  return (
    <div>
      <h2>React JSX components</h2>
      <p>
        В JSX мы можем пользоваться динамическими данными, которые приходят из
        тела функции React-компонента или других файлов.
      </p>
      {element}
      <p>Здесь будет строка: {text}</p>
      <p>Это вычисление случилось в JSX: {40 * 42} !!</p>

      <p>{showDeveloper(react)}</p>
      <p>{showDeveloper(angular)}</p>
      {/* Убрали передачу element, так как он не соответствует интерфейсу ILibrary */}
      
      {isLoggedIn && react.logo && (
        <img width="250px" src={react.logo} alt="React logo" />
      )}

      {/* Пример множественного импорта компонента */}
      <div>
        <MyButton />
        <MyButton />
        <MyButton />
      </div>
    </div>
  );
}

export default Lesson02;