import styles from "../MyButton/myButton.module.css"
import cn from 'classnames'
// пример отдельного компонента кнопки
// экспорт по умолчанию можно писать как в конце так и в начале объявления функции

interface IMyButtonProps{
  type?:"button" | "submit" | "reset"
  children:string
  onClick?:() => void
  disabled?: boolean
  variant?: "primary" | "danger";
}

function MyButton({type = "button", children, 
  onClick}:IMyButtonProps) {
  return <button type={type} onClick={onClick} 
  className={cn(styles.myButton, styles.primary)}>{children} </button>;
}

export default MyButton;

// * компонент button должен принимать props: text - с текстом кнопки, func - с функцией которая сработает по нажатию на кнопку

// для того чтобы функция отработала на кнопке присвойте ее на аттрибут onClick внутри кнопки
// <button onClick={...}>Click me!</button>
// в качестве теста может функции могут выводить в консоль разные данные

// вызовите кнопку два раза внутри Lesson03.jsx с разными данными