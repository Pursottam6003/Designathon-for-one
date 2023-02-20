import React, { useEffect, useState } from 'react'
import { ReactComponent as ArrowIcon } from '../images/icons/arrowicon.svg'
import styles from './styles/Home.module.scss'
import cx from 'classnames'
import MagazineCard from "../Components/MagazineCard";
import { useFetchCollection } from '../hooks/hooks'
import { orderBy, limit } from 'firebase/firestore'
import { LoadingPage } from '../Components/Loading'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  const {
    docs: issues,
    fetching: fetchingIssues
  } = useFetchCollection('PastPublications', [
    orderBy('index', 'desc'),
    limit(3),
  ])

  const [latestIssueId, setLatestIssueId] = useState(null);

  useEffect(() => {
    if (!fetchingIssues) {
      console.log(Object.keys(issues)[0])
      setLatestIssueId(Object.keys(issues)[0])
    }
  }, [fetchingIssues])

  return (
    <div className={styles['home-component']}>
      <div className='route'>

        <section className={cx(styles.hero, styles.parallax, styles.home)}>
          <div className='container'>
            <h4>Latest issue published</h4>
            {latestIssueId && (<>
              <h1>{issues[latestIssueId].Title}</h1>
              <div className={styles['issue-info']}>
                <p>Vol-{issues[latestIssueId].Vol} Issue-{issues[latestIssueId].Issue}</p>
                <p>{issues[latestIssueId].Month} {issues[latestIssueId].Year}</p>
              </div>
            </>)}
            <NavLink to='/magazine' className={styles.btn}>Read more</NavLink>
          </div>
        </section>

        <section className={styles.home}>
          <div className='container'>
            <header>
              <h1> Recent releases</h1>
              <button className='btn'>View all</button>
            </header>
            <div className={styles.issues}>
              {fetchingIssues ? <LoadingPage /> : (
                <div className='grid-gallery'>
                  {Object.keys(issues).map(id => {
                    const { ImageUrl, Title, Vol, Issue, Month, Year, Link, PdfUrl } = issues[id];
                    return <MagazineCard key={id} imgsrc={ImageUrl} title={Title} vol={Vol} iss={Issue} month={Month} year={Year} link={Link} pdfLink={PdfUrl} />
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className={cx(styles.counts, styles.parallax, styles.home)}>
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

        <section className={styles.home}>
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
