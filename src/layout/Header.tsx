import { NavLink } from "react-router-dom";
import styles from "./layout.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"/"}>Home</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"fetch-fox"}>Fetch Fox</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"lesson10"}>Lesson 10</NavLink>
      {/* <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"loginForm"}>Login Form</NavLink> */}
      {/* <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"registerForm"}>Register Form</NavLink> */}
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"formGender"}>Gender Form</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to={"switchForm"}>Switch Form</NavLink>
    </header>
  );
}