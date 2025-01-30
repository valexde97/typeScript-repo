import { NavLink, Outlet } from "react-router-dom"
import styles from "./layout.module.css"

export default function Layout(){
  return(
    <>
    <header className={styles.header}>
    <NavLink className={({isActive}) =>(isActive ? styles.linkActive : " ")}  to={"/"}>home</NavLink>
    <NavLink className={({isActive}) =>(isActive ? styles.linkActive : " ")}  to={"lesson08"}>lesson08</NavLink>
    <NavLink className={({isActive}) =>(isActive ? styles.linkActive : " ")}  to={"lesson10"}>lesson10</NavLink>

    </header>
    <main className={styles.main}>
      <Outlet/>
    </main>
    <footer className={styles.footer}>
      footer
    </footer>
    </>
  )
}