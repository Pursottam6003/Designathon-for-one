import React from 'react'
import MagazineCover from '../images/technodaya-cover.png'
import { ReactComponent as ArrowIcon } from '../images/icons/arrowicon.svg'
import styles from './styles/Home.module.scss'
import MagazineCard from "../Components/MagazineCard";

export const Home = () => {
  return (
    <div className={styles['home-component']}>
      <div className='route'>

        <section className={`${styles['hero']} ${styles['parallax']}`}>
          <div className='container'>
            <h4>Latest issue published</h4>
            <h1>Technodaya Vol-3 Issue-4</h1>
            <p>12-11-2022 July-August</p>

            <a href='/' className={styles.btn}>Read more</a>
          </div>
        </section>

        <section>
          <div className='container'>
            <header>
              <h1> Recent releases</h1>
              <button className='btn'>View all</button>
            </header>
            <div className='issues grid-gallery'>
              <MagazineCard imgsrc={MagazineCover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'} />
              <MagazineCard imgsrc={MagazineCover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'} />
              <MagazineCard imgsrc={MagazineCover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'} />
            </div>
          </div>
        </section>

        <section className={`${styles['counts']} ${styles['parallax']}`}>
          <div className={`container ${styles['publication-counts']}`}>
            <div className={styles['publication']}>
              <h1>53</h1>
              <h4>International Journals</h4>
            </div>
            <div className={styles['publication']}>
              <h1>109</h1>
              <h4>National Journals</h4>
            </div>
            <div className={styles['publication']}>
              <h1>24</h1>
              <h4>Technodaya Issues</h4>
            </div>
          </div>
        </section>

        <section>
          <div className={`${styles['subscription-cont']} container`}>
            <h1>subscribe to our<br /> newsletter</h1>
            <h4>Stay updated with new Issues of Technodaya!</h4>
            <form>
              <div className={styles.inputs}>
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
                <input type="text" placeholder='Email' />
              </div>
              <button type="submit" className={styles.submit}>
                <div className={styles.circle}>
                  <span>
                    <ArrowIcon />
                  </span>
                </div>
                <h3>subscribe</h3>
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}
