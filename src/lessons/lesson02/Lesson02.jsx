import MyButton from "../../components/MyButton";

function Lesson02() {
  const element = <h4>Это JSX элемент из переменной element!</h4>;
  const text = "Это строка из переменной text...";

  const react = {
    library: "react",
    developer: "Meta",
    logo: "https://cdn.pixabay.com/photo/2022/01/18/08/43/meta-6946620_960_720.jpg",
  };

  const angular = {
    library: "Angular",
    developer: "Google",
  };

  function showDeveloper(obj) {
    if (obj.developer) {
      return `Developer of ${obj.library} is ${obj.developer}`;
    }
    return "Not valid data";
  }

  const isLoggedIn = true

  return (
    <div>
      <h2>React JSX components</h2>
      <p>
        В JSX мы можем пользоваться динамическими данными, которые приходят из
        тела функции React компонента или других файлов
      </p>
      {element}
      <p>Здесь будет строка: {text}</p>
      {/* {В фигурных скобках в верстке JSX можно использовать логические конструкции JS в том числе и числовые} */}
      <p>Это вычисление случилось в JSX: {40 * 42} !!</p>

      <p>{showDeveloper(react)}</p>
      <p>{showDeveloper(angular)}</p>
      <p>{showDeveloper(element)}</p>

     {isLoggedIn ? <img width={"250px"} src={react.logo} alt="" /> : ""}
    
    {/* Пример множественного импорта компонента */}
     <div>
      <MyButton/>
      <MyButton/>
      <MyButton/>
    </div>
    
    </div>

 
  );
}

export default Lesson02;
