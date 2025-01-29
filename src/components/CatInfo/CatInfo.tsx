import styles from "./catInfo.module.css"
interface CatInfo {
    info: string;
  }
  
  export default function CatInfo({ info }: CatInfo) {
    return (
      <div className={styles.textContainer}>
        <h3 className={styles.textCatInfo}>😼{info}😼</h3>
      </div>
    );
  }

