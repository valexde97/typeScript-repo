import { NavLink } from "react-router-dom";
import styles from "./layout.module.css";
import { useCart } from "../context/CartContext";

export default function Header() {
  const {totalPrice} = useCart();
  return (
    <header className={styles.header}>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"/"}>Home</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"lesson10"}>Cat App</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"formGender"}>Gender Form</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"switchForm"}>Switch Form</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"Cart"}>Cart</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"Products"}>Products</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"lesson17"}>New Shop</NavLink>
    <span className={styles.totalPrice}>Total: €{totalPrice.toFixed(2)}</span>
    </header>
  );
}