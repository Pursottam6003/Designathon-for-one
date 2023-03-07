import React from 'react'
import technodayaLogo from "../../images/logo/technodaya-logo-white.png"
import styles from './Footer.module.scss'
import cx from 'classnames';
import { useLocation } from 'react-router-dom';

export const Footer = () => {
  const location = useLocation();

  return (
    <footer className={cx(styles.footer, {[styles['mobile-submit']]: location.pathname.startsWith('/submit')})}>
      <div className={cx('container', styles['info-Footer'])}>
        <section>
          <img id={styles.technodayaLogo} src={technodayaLogo} alt="Technodaya" />
          <div>
            <p className={styles.tagline}>The Technical Meraki of Arunachal</p>
            <p>National Institute of Technology,<br />Arunachal Pradesh</p>
          </div>
        </section>
        <section>
          <h3>External links</h3>
          <ul>
            <li><a href='https://nitap.ac.in' target='_blank' rel='noreferrer'>NIT Arunachal Pradesh</a></li>
            <li><a href='https://github.com/Pursottam6003/Designathon-for-one/issues' target='_blank' rel='noreferrer'>Report a bug 🐞</a></li>
          </ul>
        </section>
        <section>
          <h3>Contact us</h3>
          <ul>
            <li><a href='tel:0360-2954549'>0360-2954549</a></li>
            <li><a href='mailto:nitapadmin@nitap.ac.in'>technodaya@nitap.ac.in</a></li>
          </ul>
        </section>
      </div>
      <div className={styles.copyright}>
        <p className='container'>
          &#169;&nbsp;2022-present&nbsp;Technodaya, NIT&nbsp;Arunchal&nbsp;Pradesh
        </p>
      </div>
    </footer>
  )
}
