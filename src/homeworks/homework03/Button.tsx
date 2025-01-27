import "./button.css"

interface IMyButtonProps{
  type: "button" | "submit" | "reset"
  text: string,
  func: () => void
}

function Button ({text, func, type}:IMyButtonProps) {
return(
  <button className="button" type={type} onClick = {func}>
    {text}
  </button>
);
}
export default Button;