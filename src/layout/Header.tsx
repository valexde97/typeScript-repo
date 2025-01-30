import { NavLink } from "react-router-dom";
import styles from "./layout.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"/"}>Home</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"fetch-fox"}>Fetch Fox</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"lesson10"}>Lesson 10</NavLink>
    </header>
  );
}