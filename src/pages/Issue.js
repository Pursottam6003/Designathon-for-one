import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { CategoryTitles } from '../helpers';
import { Route, Routes, useParams } from 'react-router-dom';
import { getBiMonth, BiMonthlyNames } from '../helpers';
import { LoadingPage } from '../Components/Loading';
import { useFetchCollection } from '../hooks/hooks';

import styles from './styles/Issue.module.scss';
import NotFound from './NotFound';

const MagazineArticle = ({ data, categoryId }) => {
  const { title, imgUrl, content, brochureUrl, imgCaption } = data;
  const images = imgUrl.map((url, i) => {
    return (
      <div className={styles['img-wrapper']}>
        <img src={url} key={`i${i}`} alt={imgCaption} />
      </div>
    )
  })
  
  return (
    <li className={styles['magazine-article']}>
      {title !== CategoryTitles[parseInt(categoryId)] && (
        <h4>
          <ReactMarkdown children={title} rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]} />
        </h4>
      )}
      <div className={styles.content}>
        <p>
          <ReactMarkdown children={content} rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]} />
        </p>
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

const MagazineSection = ({ id, order, articles }) => {
  const articlesCompArr = order.map((articleId) => {
    return (
      <MagazineArticle categoryId={id} data={articles[articleId]} key={articleId} />
    )
  })

  return (
    <div className={styles['magazine-section']}>
      <header className={styles['category-header']}>
        <h3 className={styles['category-heading']} id={`category${id}`}>{CategoryTitles[id]}</h3>
      </header>
      <ol className={styles['article-ls']}>
        {articlesCompArr}
      </ol>
    </div>
  )
}

const FetchedIssue = ({ slug }) => {
  const { year, biMonth } = useParams();
  const { fetching: loading, docs } = useFetchCollection(`${slug}/${year}/${biMonth}`);
  const [issueData, setIssueData] = useState(null);
  const [magSecComponents, setMagSecComponents] = useState(null);

  useEffect(() => {
    if (!loading) {
      if (Object.keys(docs)) {
        const data = docs[Object.keys(docs)[0]]
        data.publishedAtStr = BiMonthlyNames[getBiMonth(data.month)][1] + ' ' + data.month.slice(0, 4);
        setIssueData(data)
      }
    }
  }, [loading])

  useEffect(() => {
    if (issueData) {
      createComponents();
    }
  }, [issueData])

  const createComponents = () => {
    const { columns, columnOrder, tasks } = issueData.orders;
    const categoriesCompArr = columnOrder.map(colId => {
      if (columns[colId].taskIds.length) {
        return (
          <MagazineSection id={colId} key={`s${colId}`} order={columns[colId].taskIds} articles={tasks} />
        )
      }
      return null;
    })
    setMagSecComponents(categoriesCompArr);
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
            <ul>
              {magSecComponents}
            </ul>
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
