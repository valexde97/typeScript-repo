import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./lessons.module.css"

export default function Lessons() {
  return (
          <div className={styles.lessonContainer}>
      <h2>Lessons📚</h2>
      <div className={styles.gridContainer}>
    

       <Link to="/lesson01"><div>Lesson 1</div></Link>
        <Link to="/lesson02"><div>Lesson 2</div></Link>
        <Link to="/lesson03"><div>Lesson 3</div></Link>
        <Link to="/lesson04"><div>Lesson 4</div></Link>
        <Link to="/lesson05"><div>Lesson 5</div></Link>
        <Link to="/lesson06"><div>Lesson 6</div></Link>
        <Link to="/lesson07"><div>Lesson 7</div></Link>
        <Link to="/lesson08"><div>Lesson 8</div></Link>
        <Link to="/lesson09"><div>Lesson 9</div></Link>
        <Link to="/lesson10"><div>Lesson 10</div></Link>
        <Link to="/lesson11"><div>Lesson 11</div></Link>
        <Link to="/lesson12"><div>Lesson 12</div></Link>
        <Link to="/lesson13"><div>Lesson 13</div></Link>
        <Link to="/lesson14"><div>Lesson 14</div></Link>
        <Link to="/lesson14"><div>Lesson 15</div></Link>
        <Link to="/lesson16"><div>Lesson 16</div></Link>
        <Link to="/lesson17"><div>Lesson 17</div></Link> 
    
      </div>
      </div>
    
  )
}
