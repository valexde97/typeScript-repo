// import styles from './cart.module.css'

import { useCart } from "../../context/CartContext"
import MyButton from "../MyButton/MyButton";

export default function Cart(): JSX.Element {
  const { cart, clearCart, removeFromCart, totalPrice} = useCart();


  return (
    <div>
   <h2>Cart 🛒</h2>
      <div>
        {cart.map(el => (
          <div key={el.id}>
            <span>{el.title}. Quantity: {el.quantity}</span>
            <button onClick={()=> removeFromCart(el.id)}>Delete</button>
          </div>
        ))}
      </div>
        <h3>Total: €{totalPrice.toFixed(2)}</h3>
      <MyButton func={clearCart} variant="danger" text="Clear Cart" /></div>
  );
}

