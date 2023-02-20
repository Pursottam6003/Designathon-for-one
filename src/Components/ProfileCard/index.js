import React from "react";
import styles from './ProfileCard.module.scss';

const icons = {
  facebook: 'https://img.icons8.com/fluent/40/000000/facebook-new.png',
  linkedin: 'https://img.icons8.com/fluent/40/000000/linkedin-circled.png',
  instagram: 'https://img.icons8.com/color/40/000000/instagram-new--v1.png',
  github: "https://img.icons8.com/dusk/40/null/github.png"
}

const ProfileCard = ({ links, name, designation, description, profile }) => (
  <div className={styles.card}>
    <div className={styles.profile}> <img alt={name} src={profile} /></div>
    <div className={styles.info}><h3>{name}</h3>
      <p><i>{designation}</i></p>
      <p>{description}</p>
    </div>
    <ul className={styles.social}>
      {links.map(link => (
        <li><a href={link.to}>
          <img alt="" src={icons[link.icon]} />
        </a></li>
      ))}
    </ul>
  </div>
)

export default ProfileCard;