import MyButton from "../../components/MyButton/MyButton"
import styles from "./lesson09.module.css"

export default function Lesson09() {
  return (
    <div>
      {/* Если css написан давно в кебаб кейс, мы можем обратиться к нему так */}
      {/* <h2 className={styles["text-orange"]}>Lesson09. CSS Modules🎨</h2> */}
      {/* <h2 className={styles.textOrange + " " + styles.heading}>Lesson09. CSS Modules🎨</h2> */}
     
      <h2 className={`${styles.textOrange} ${styles.heading}`}>Lesson09. CSS Modules🎨</h2>
      <p className={styles.des}>CSS modules - Это способ, как мы можем 
        изолированно работать со стилями CSS</p>
        <MyButton children={""}/>
    </div>
  )
}
