import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { CategoryTitles, Sections } from '../helpers';
import { Route, Routes, useParams } from 'react-router-dom';
import { getBiMonth, BiMonthlyNames } from '../helpers';
import { LoadingPage } from '../Components/Loading';
import { useFetchCollection } from '../hooks/hooks';

import styles from './styles/Issue.module.scss';
import NotFound from './NotFound';

const MagazineActivity = ({ data, categoryId, id }) => {
  const { title, imgUrl, content, brochureUrl, imgCaption } = data;
  const images = imgUrl.map((url, i) => {
    return (
      <div key={`img${id}${i}`} className={styles['img-wrapper']}>
        <img src={url} key={`i${i}`} alt={imgCaption} />
      </div>
    )
  })

  return (
    <li className={styles['magazine-article']}>
      {title !== CategoryTitles[parseInt(categoryId)] && (
        <h4>{title}</h4>
      )}
      <div className={styles.content}>
        <div>
          <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]} />
        </div>
        {categoryId === 17 && (
          <p>For more details, <a href={brochureUrl}>download brochure</a> or visit <a href='https://nitap.ac.in/'>NIT Arunachal Pradesh website</a>.</p>
        )}
        <div className={styles['mag-images']}>
          {images}

          {images.length !== 0 && (
            <p className={styles['img-caption']}>
              {imgCaption ? imgCaption : CategoryTitles[parseInt(categoryId)]}
            </p>
          )}
        </div>
      </div>
    </li>
  )
}

const MagazineSubSection = ({ id, order, activities }) => {
  return (
    <div className={styles['magazine-section']}>
      <header className={styles['category-header']}>
        {CategoryTitles[id] !== 'Untitled' && (
          <h3 className={styles['category-heading']}>
            {CategoryTitles[id]}
          </h3>
        )}
      </header>
      <ol className={styles['article-ls']}>
        {order.map(activityId => (
          <MagazineActivity key={`activity${activityId}`} id={activityId} categoryId={id} data={activities[activityId]} />
        ))}
      </ol>
    </div>
  )
}

const MagazineSection = ({ id, order, subSections, activities }) => {
  return (
    <div className={styles['magazine-section']}>
      <header className={styles['category-header']}>
        <h2 id={`category${id}`}>{Sections[id].title}</h2>
      </header>
      {order.map(subSecId => (
        <MagazineSubSection id={subSecId}
          key={`subsection${subSecId}`}
          order={subSections[subSecId].activityIds}
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
      console.log(data);
      setIssueData(data)
    }
  }, [loading])

  useEffect(() => {
    if (issueData) {
      createComponents();
    }
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
                id={secId}
                activities={issueData.orders.activities}
                order={issueData.orders.sections[secId].subSecIds}
                subSections={issueData.orders.subSections}
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
