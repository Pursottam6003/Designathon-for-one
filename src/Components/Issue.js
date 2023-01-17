import React, { Component } from 'react'
import { fs } from '../config/config'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { CategoryTitles } from '../helpers';
import { Route, Routes, useParams } from 'react-router-dom';
import { getBiMonth, BiMonthlyNames } from '../helpers';

class MagezineArticle extends Component {
  render() {
    const { title, imgUrl, content, brochureUrl, imgCaption } = this.props.data
    const { categoryId } = this.props
    const images = imgUrl.map((url, i) => {
      return (
        <div className='img-wrapper'>
          <img src={url} key={`i${i}`} alt={imgCaption} />
        </div>
      )
    })

    console.log(title, CategoryTitles[parseInt(categoryId)])
    return (
      <li className='magazine-article'>
        {title !== CategoryTitles[parseInt(categoryId)] && (
          <h4>{title}</h4>
        )}
        <div className='content'>
          <p>
            <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
          </p>
          {categoryId === 17 && (
            <p>For more details, <a href={brochureUrl}>download brochure</a> or visit <a href='https://nitap.ac.in/'>NIT Arunachal Pradesh website</a>.</p>
          )}
          <div className='mag-images'>
            {images}

            {images.length !== 0 && (
              <p className='img-caption'>
                {imgCaption ? imgCaption : CategoryTitles[parseInt(categoryId)]}
              </p>
            )}
          </div>
        </div>
      </li>
    )
  }
}

class MagazineSection extends Component {
  render() {
    const { id, order, articles } = this.props
    const articlesCompArr = order.map((articleId) => {
      return (
        <MagezineArticle categoryId={id} data={articles[articleId]} key={articleId} />
      )
    })

    return (
      <div className='magazine-section'>
        <header className='category-header'>
          <h3 className='category-heading' id={`category${id}`}>{CategoryTitles[id]}</h3>
        </header>
        <ol className='article-ls'>
          {articlesCompArr}
        </ol>
      </div>
    )
  }
}

const IssueRoute = ({slug}) => {
  const { year, biMonth } = useParams()
  const issueLn = `${year}/${biMonth}`

  return (
    <FetchedIssue slug={slug} issueLn={issueLn} />
  )
}

class FetchedIssue extends Component {
  initialState = {
    title: '',
    vol: '',
    iss: '',
    month: '',
    orders: null
  }
  state = this.initialState

  fetchIssue = async () => {
    const { issueLn, slug } = this.props

    const fetchedIssue = await fs.collection(`${slug}/${issueLn}`).get();
    for (var snap of fetchedIssue.docs) {
      var data = snap.data();
      data.ID = snap.id;

      this.setState({ ...data }, () => {
        this.createComponents();
      })
    }
  }

  createComponents() {
    const { columns, columnOrder, tasks } = this.state.orders
    const categoriesCompArr = columnOrder.map(colId => {
      if (columns[colId].taskIds.length) {
        return (
          <MagazineSection id={colId} key={`s${colId}`} order={columns[colId].taskIds} articles={tasks} />
        )
      }
      return null;
    })

    this.setState({
      magSecComponents: categoriesCompArr,
    })
  }

  componentDidMount() {
    this.fetchIssue()
  }

  render() {
    const { title, iss, vol, month } = this.state
    const publishedAtStr = BiMonthlyNames[getBiMonth(month)][1] + ' ' + month.slice(0, 4);

    return (
      <div className='container'>
        <div className='page-header'>
          <div className='issue-meta'>
            <time className='publish-date'>{publishedAtStr}</time>
            <span className='iss-vol'>Vol-{vol}, Issue-{iss}</span>
          </div>
          <h1 className='heading'>{title.slice(0, 1).toUpperCase() + title.slice(1, title.length)}</h1>
        </div>
        <div className='magazine-wrapper'>
          <div className='magazine'>
            <ul>
              {this.state.magSecComponents}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export class Issue extends Component {
  render() {
    const { slug } = this.props; 
    return (
      <div className='route published-component'>
        <Routes>
          <Route path=":year/:biMonth" element={<IssueRoute slug={slug} />} />
        </Routes>
      </div>
    )
  }
}