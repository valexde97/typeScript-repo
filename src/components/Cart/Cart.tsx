import styles from './cart.module.css';

import { useCart } from "../../context/CartContext";
import MyButton from "../MyButton/MyButton";

export default function Cart(): JSX.Element {
  const { cart, clearCart, removeFromCart, totalPrice } = useCart();

  return (
    <div className={styles.cartContainer}>
      <h2>Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className={styles.cartEmpty}>Your cart is empty...</p>
      ) : (
        <>
          {cart.map((el) => (
            <div key={el.id} className={styles.cartItem}>
              <span>{el.title} x{el.quantity}</span>
              <span className={styles.cartItemPrice}>
                {(el.price * el.quantity).toFixed(2)}€
              </span>
              <button onClick={() => removeFromCart(el.id)}>❌</button>
            </div>
          ))}

          <div className={styles.cartButtons}>
            <button onClick={clearCart} className={styles.clearCartButton}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

