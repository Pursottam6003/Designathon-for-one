import React from "react"
import EditorInChief from "../../src/images/logo/sir.jpeg"
import Chairman from '../../src/images/chairman.png';
import Daknya from "../../src/images/daknya.jpeg"
import ashok from '../../src/images/ashok.jpg'
import subhajitSir from '../../src/images/subhajitSir.jpg'
import ProfileCard from "../Components/ProfileCard"
import styles from "./styles/About.module.scss";
import cx from "classnames";

const People = {
  chief: [
    {
      name: 'Dr Pinakeswar Mahanta',
      role: 'Chairman',
      designation: 'Director, NIT Arunachal Pradesh',
      description: 'Assistant Professor, Management & Humanities NIT AP and He is a  speaker, a listener, a demonstrator, and most of all, an influencer. He ia a teacher which is passionate, compassionate, dedicated, understanding, and supportive when it comes to their jobs and their students.',
      profile: Chairman,
      links: [
        { to: 'https://www.linkedin.com/in/pinakeswar-mahanta-30592616', icon: 'linkedin' },
      ],
    },
    {
      name: 'Dr K. Vijaykumar',
      role: 'Editor-in-chief',
      designation: 'Assistant Professor, Department of M&H',
      description: 'Assistant Professor, Management & Humanities NIT AP and He is a  speaker, a listener, a demonstrator, and most of all, an influencer. He ia a teacher which is passionate, compassionate, dedicated, understanding, and supportive when it comes to their jobs and their students.',
      profile: EditorInChief,
      links: [
        { to: 'https://www.linkedin.com/in/vijayakumar-kathirvel-75ab64143', icon: 'linkedin' },
        { to: 'https://www.facebook.com/kapvijayakumar', icon: 'facebook' },
        { to: 'https://www.instagram.com/vijayakumarkathirvel/', icon: 'instagram' },
      ],
    },
  ],

  editors: [
    {
      name: 'Dr. Shubhajit Das',
      role: 'Editor',
      designation: 'Assistant Professor, Department of ME',
      description: 'Assistant Professor, Department of Mechanical Engineering NIT AP.His qualities include being a great speaker and most importantly, an influencer. When it comes to his job and his students, he is passionate, compassionate, dedicated, understanding, and supportive.',
      profile: subhajitSir,
      links: [
        { to: 'https://www.linkedin.com/in/shubhajit-das-8860a873/', icon: 'linkedin' },
        { to: 'https://www.facebook.com/06shubhajit', icon: 'facebook' },
      ],
    },
    {
      name: 'Mr Ashok. R',
      role: 'Co-Editor',
      designation: 'Research Scholar, Department of ME',
      description: 'Research Scholar, Department of Mechanical Engineering NIT AP. One of best student from the Department of Mechanical Engineering working very hard to achieve great sucess.Also, he is passionate about writing journels and documentations.',
      profile: ashok,
      links: [
        { to: 'https://www.instagram.com/ashokravi3652/', icon: 'instagram' },
      ],
    },
  ],
  studentEditors: [
    {
      name: 'Chandrashekhar Tripathi',
      role: 'Developer and Maintainer',
      designation: 'UG Student, CSE 3rd year',
      description: 'A passionate developer who is completely open to learn new technologies and help his friends in working under tough conditions',
      profile: 'https://avatars.githubusercontent.com/u/68462214',
      links: [
        { to: 'https://www.linkedin.com/in/tripathics', icon: 'linkedin' },
        { to: 'https://github.com/tripathics/', icon: 'github' },
        { to: 'https://www.instagram.com/c_strip.z/', icon: 'instagram' },
      ],
    },
    {
      name: 'Pursottam Sah',
      role: 'Back-end, database',
      designation: 'UG Student, CSE 3rd year',
      description: 'Future CEO ,Computer Sciecne undergratuate student who is currenlty exploring all fields and also a coder who is working together in a team',
      profile: 'https://pursottam6003.github.io/Portfolio/images/update_image.png',
      links: [
        { to: 'https://www.linkedin.com/in/pursottam-sah-78aa4a1bb', icon: 'linkedin' },
        { to: 'https://github.com/Pursottam6003', icon: 'github' },
        { to: 'https://www.instagram.com/rahulsah6003/', icon: 'instagram' },
      ],
    },
    {
      name: 'Daknya Bam',
      role: 'Font-end, UI-UX',
      designation: 'UG Student, CSE 3rd year',
      description: 'A coder. singer,guitarist a full pack of combination of computer science undergratuate',
      profile: Daknya,
      links: [
        { to: 'https://www.linkedin.com/in/daknya-bam-4a4812237', icon: 'linkedin' },
        { to: 'https://github.com/daknya', icon: 'github' },
        { to: 'https://www.instagram.com/dak.nya/', icon: 'instagram' },
      ],
    },
    {
      name: 'Dev Singh Kanyal',
      designation: 'UG Student, CSE 3rd year',
      role: 'Web editor and designer',
      description: 'An all rounder coder popularly known for performing outstanding actvities and coordination, CSE undergratuate',
      profile: 'https://avatars.githubusercontent.com/u/77870205',
      links: [
        { to: 'https://www.linkedin.com/in/dev-singh-kanyal/', icon: 'linkedin' },
        { to: 'https://github.com/dev-singh-kanyal', icon: 'github' },
        { to: 'https://www.instagram.com/dev_singh_kanyal', icon: 'instagram' },
      ],
    },
  ]
}

export const About = () => (
  <div className={styles["about-component"]}>
    <div className="container">
      <header className={cx('page-header')}>
        <h1 className="heading">About us</h1>
      </header>

      <section>
        <div className={styles.technodaya}>
          <p>Technodaya is the bimonthly newsletter of National Institute of Technology, Arunachal Pradesh. Every issue of this magazine contains the activities held within the last two months in the institute. </p>
        </div>
      </section>

      <section className={styles.people}>
        <header className={cx(styles["section-header"])}>
          <h1 className={styles.heading}>Editorial</h1>
        </header>

        <div className={styles.members}>
          {People.chief.map(person => <ProfileCard key={person.name} {...person} />)}
        </div>
        <div className={styles.members}>
          {People.editors.map(person => <ProfileCard key={person.name} {...person} />)}
        </div>
      </section>
      <section className={styles.people}>
        <header className={cx(styles["section-header"])}>
          <h1 className={styles.heading}>Student Editors & Developers</h1>
        </header>
        <div className={styles.members}>
          {People.studentEditors.map(person => <ProfileCard key={person.name} {...person} />)}
        </div>
      </section>
    </div>
  </div>
)