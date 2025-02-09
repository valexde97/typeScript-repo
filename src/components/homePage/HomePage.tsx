import { Link } from "react-router-dom";
import styles from "./homePage.module.css"


export default function HomePage() {
  return (
    <div className={styles.lessonContainer}>
      <h2>Home Page🏡</h2>
      <div className={styles.gridContainer}>
      <Link to="lessons"><div>Lessons</div></Link>
      <Link to="homeworks"><div>Homeworks</div></Link>
      </div>
      </div>
   
  )
}
