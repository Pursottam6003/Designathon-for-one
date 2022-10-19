import React, { Component } from 'react'
import { BiMonthlyNames } from '../helpers';
import { fs } from '../config/config'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Categories, getBiMonth } from '../helpers';

class MagezineArticle extends Component {
  render() {
    const { title, eventDate, imgUrl, content, brochureUrl, imgCaption } = this.props.data
    const { categoryId } = this.props
    const images = imgUrl.map((url, i) => {
      return (
        <div className='img-wrapper'>
          <img src={url} key={`i${i}`} alt={imgCaption} />
        </div>
      )
    })

    console.log(title, Categories[parseInt(categoryId)])
    return (
      <li className='magazine-article'>
        {title !== Categories[parseInt(categoryId)] && (
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
                {imgCaption ? imgCaption : Categories[parseInt(categoryId)]}
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
          <h3 className='category-heading' id={`category${id}`}>{Categories[id]}</h3>
        </header>
        <ol className='article-ls'>
          {articlesCompArr}
        </ol>
      </div>
    )
  }
}

export class Published extends Component {
  initialState = {
    title: '',
    vol: '',
    iss: '',
    month: '',
    orders: null
  }
  state = this.initialState


  getTechnodayaBlogs = async () => {
    const year = '2022'

    const blogsFirebase = await fs.collection(`issues/${year}/${BiMonthlyNames[getBiMonth('2022-03')]}/`).get();
    // getting its snapshort 
    for (var snap of blogsFirebase.docs) {
      var data = snap.data();
      data.ID = snap.id;

      this.setState({ ...data }, () => {
        this.createComponents();
      })
    }
  }

  createComponents() {
    const { columns, columnOrder, tasks } = this.state.orders
    const tocln = []
    const categoriesCompArr = columnOrder.map(colId => {
      if (columns[colId].taskIds.length) {
        return (
          <MagazineSection id={colId} key={`s${colId}`} order={columns[colId].taskIds} articles={tasks} />
        )
      }
    })

    this.setState({
      magSecComponents: categoriesCompArr,
      toc: tocln
    })
  }

  changebg = () => {
    var maxNumber = 21;
    let bg = document.getElementById('Main_box')
    var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
    let randClass = `bg${randomNumber}`
    if (bg.classList.length > 1) {
      bg.classList.remove(bg.classList[1]);
      bg.classList.add(randClass);
    } else {
      bg.classList.add(randClass);
    }
  }

  componentDidMount() {
    this.getTechnodayaBlogs()
  }

  render() {
    const { title, iss, vol, month } = this.state
    const monthObj = new Date(month)
    const publishedAtStr = monthObj.toLocaleDateString('default', {
      year: 'numeric',
      month: 'long',
    })

    return (
      <div className='route published-component'>
        <div className='container'>
          <div className='page-header'>
            <div className='issue-meta'>
              <time className='publish-date'>{publishedAtStr}</time>
              <span className='iss-vol'>{vol} {iss}</span>
            </div>
            <h1 className='heading'>{title}</h1>
          </div>

          <div className='magazine-wrapper'>
            <div className='magazine'>
              <ul>
                {this.state.magSecComponents}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}