import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./homeworks.module.css"

export default function Lessons() {
  return (
          <div className={styles.lessonContainer}>
      <h2>Homeworks📚</h2>
      <div className={styles.gridContainer}>
    

       <Link to="/homework01"><div>Homework 01</div></Link>
        <Link to="/homework02"><div>Homework 02</div></Link>
        <Link to="/homework03"><div>Homework 03</div></Link>
        <Link to="/homework04"><div>Homework 04</div></Link>
        <Link to="/homework05"><div>Homework 05</div></Link>
        <Link to="/homework06"><div>Homework 06</div></Link>
        <Link to="/homework07"><div>Homework 07</div></Link>
        <Link to="/homework08"><div>Homework 08</div></Link>
        <Link to="/homework09"><div>Homework 09 </div></Link>
        <Link to="/homework10"><div>Homework 10</div></Link>
        <Link to="/homework11"><div>Homework 11</div></Link>
        <Link to="/homework12"><div>Homework 12</div></Link>
        <Link to="/homework13"><div>Homework 13</div></Link>
        <Link to="/homework14"><div>Homework 14</div></Link>
        <Link to="/homework15"><div>Homework 15</div></Link>
        <Link to="/homework16"><div>Homework 16</div></Link> 
       


        
      </div>
      </div>
    
  )
}