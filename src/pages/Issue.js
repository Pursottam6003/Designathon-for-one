import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Sections } from '../helpers';
import { Route, Routes, useParams } from 'react-router-dom';
import { getBiMonth, BiMonthlyNames } from '../helpers';
import { LoadingPage } from '../Components/Loading';
import { useFetchCollection } from '../hooks/hooks';

import styles from './styles/Issue.module.scss';
import NotFound from './NotFound';

const MagazineActivity = ({ id, title, content, brochureUrl, imgUrl, imgCaption }) => {
  const images = imgUrl.map((url, i) => (
    <div key={`img${id}${i}`} className={styles['img-wrapper']}>
      <img src={url} key={`i${i}`} alt={imgCaption} />
    </div>
  ))

  return (
    <li className={styles['magazine-article']}>
      {title && <h4>{title}</h4>}
      <div className={styles.content}>
        <div>
          <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]} />
        </div>
        {brochureUrl && (
          <p>For more details, <a href={brochureUrl}>download brochure</a> or visit <a href='https://nitap.ac.in/'>NIT Arunachal Pradesh website</a>.</p>
        )}
        <div className={styles['mag-images']}>
          {images}

          {images.length !== 0 && (
            <p className={styles['img-caption']}>
              {imgCaption ? imgCaption : title ? title : ''}
            </p>
          )}
        </div>
      </div>
    </li>
  )
}

const MagazineSubSection = ({ title, activityIds, activities }) => {
  return (
    <div className={styles['magazine-section']}>
      <header className={styles['category-header']}>
        {title && title !== 'Other' && <h3 className={styles['category-heading']}>{title}</h3>}
      </header>
      <ol className={styles['article-ls']}>
        {activityIds.map(activityId => (
          <MagazineActivity key={`activity${activityId}`} {...activities[activityId]}
            id={activityId} data={activities[activityId]} />
        ))}
      </ol>
    </div>
  )
}

const MagazineSection = ({ id, subSecIds, subSections, activities }) => {
  return (
    <div className={styles['magazine-section']}>
      <header className={styles['category-header']}>
        <h2 id={`category${id}`}>{Sections[id].title}</h2>
      </header>
      {subSecIds.map(subSecId => (
        <MagazineSubSection key={`subsection${subSecId}`}
          {...subSections[subSecId]}
          activities={activities}
        />
      ))}
    </div>
  )
}

const FetchedIssue = ({ slug }) => {
  const { year, biMonth } = useParams();
  const { fetching: loading, docs } = useFetchCollection(`${slug}/${year}/${biMonth}`);
  const [issueData, setIssueData] = useState(null);
  const [currentSectionIds, setCurrentSectionIds] = useState([]);

  useEffect(() => {
    if (loading) return;
    if (Object.keys(docs).length) {
      const data = docs[Object.keys(docs)[0]]
      data.publishedAtStr = BiMonthlyNames[getBiMonth(data.month)][1] + ' ' + data.month.slice(0, 4);
      setIssueData(data)
    }
    // eslint-disable-next-line
  }, [loading])

  useEffect(() => {
    if (issueData) {
      createComponents();
    }
    // eslint-disable-next-line
  }, [issueData])

  const createComponents = () => {
    const { sections, sectionOrder } = issueData.orders;

    const nonEmptySectionIds = sectionOrder.filter(secId => sections[secId].subSecIds.length !== 0)
    setCurrentSectionIds(nonEmptySectionIds);
  }

  return (
    loading ? <LoadingPage /> : !issueData ? <NotFound /> :
      <div className='container'>
        <div className={styles['page-header']}>
          <div className={styles['issue-meta']}>
            <time className={styles['publish-date']}>{issueData.publishedAtStr}</time>
            <span className={styles['iss-vol']}>Vol-{issueData.vol}, Issue-{issueData.iss}</span>
          </div>
          <h1 className={styles.heading}>{issueData.title.slice(0, 1).toUpperCase() + issueData.title.slice(1, issueData.title.length)}</h1>
        </div>
        <div className={styles['magazine-wrapper']}>
          <div className={styles.magazine}>
            {currentSectionIds.map(secId =>
              <MagazineSection
                key={`section${secId}`}
                {...issueData.orders.sections[secId]}
                subSections={issueData.orders.subSections}
                activities={issueData.orders.activities}
              />
            )}
          </div>
        </div>
      </div>
  )
}

export const Issue = ({ slug }) => (
  <div className={styles['published-component']}>
    <Routes>
      <Route path=":year/:biMonth" element={<FetchedIssue slug={slug} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
)
