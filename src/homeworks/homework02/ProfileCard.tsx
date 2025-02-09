import React from 'react';
import styles from './profileCard.module.css'; 

function ProfileCard({ avatar, name, occupation, hobbies }) {
  return (
    <div className={styles.profileCard}>
      <img src={avatar} alt={`${name}'s avatar`} className={styles.avatar} />
      <div className={styles.cardContent}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.occupation}><strong>Occupation:</strong> {occupation}</p>
        <p className={styles.hobbies}><strong>Hobbies:</strong> {hobbies}</p>
      </div>
    </div>
  );
}

export default ProfileCard;