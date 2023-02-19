import React from 'react'
import technodayaLogo from "../../images/logo/technodaya-logo-white.png"
import styles from './Footer.module.scss'

export const Footer = ({ref}) => {
  return (
    <div className={styles.footer} ref={ref}>

      <div className='container'>
      <div className={styles['info-Footer']}>
        <div className={styles.rights}>
          <div> 
            <img id='technodayaLogo-white' src={technodayaLogo} alt="Technodaya" />
          </div>
          <div> <h4>Technodaya Magazine</h4>
            <p> National Institute of Technology</p>
            <p> Jote , Arunchal Pradesh </p>
          </div>

          <div>
            <p><a href='tel:0360-2954549'>0360-2954549</a></p>
            <p><a href='mailto:nitapadmin@nitap.ac.in'>nitapadmin@nitap.ac.in</a></p>
          </div>
        </div>

        <div className={styles.left}>
        “Dream, Dream Dream
        Dreams transform into thoughts
        And thoughts result in action.”
        ― DR APJ ABDUL KALAM
        </div>
      </div>
      </div>
      <div className={styles.copyright}>
      <div className='container'>&#169; 2022 all rights are reserved, Technodaya, NIT Arunchal Pradesh</div>
      </div>
    </div>
  )
}
