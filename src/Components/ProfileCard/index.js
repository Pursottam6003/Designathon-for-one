import React from "react";
import styles from './ProfileCard.module.scss';

const ProfileCard = ({links, name, designation, description, profile}) => (
  <div className="team-member-card">
    <div className="member-image"> <img alt={name} src={profile} /></div>
    <div className="member-info"><h3>{name}</h3>
      <p><i>{designation}</i></p>
      <p>{description}</p>
      <ul>
        {links.map(link => <li><a href={link.to}>{link.icon}</a></li>)}
      </ul>
    </div>
  </div>
)

export default ProfileCard;