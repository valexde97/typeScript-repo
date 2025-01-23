

function Button  ({text, func, type}) {
return(
  <button type={type} onClick = {func}>
    {text}
  </button>
);
}
export default Button;