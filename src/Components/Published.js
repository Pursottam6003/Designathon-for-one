import React, { Component } from 'react'
import { BiMonthlyNames } from '../helpers';
import { fs } from '../config/config'
import { Categories, getBiMonth } from '../helpers';
import $ from 'jquery';

let MonthName;

if (month === 1 || month === 2) MonthName = BiMonthlyNames[1];
else if (month === 3 || month === 4) MonthName = BiMonthlyNames[2];
else if (month === 5 || month === 6) MonthName = BiMonthlyNames[3];
else if (month === 7 || month === 8) MonthName = BiMonthlyNames[4];
else if (month === 9 || month === 10) MonthName = BiMonthlyNames[5];
else if (month === 11 || month === 12) MonthName = BiMonthlyNames[6];

class MagezineArticle extends Component {
  render() {
    const { Heading, EventDate, Urls, wholeDescription, Brochure, imgCaption } = this.props.data
    const { categoryId } = this.props
    const images = Urls.map((url, i) => {
      return (
        <div className='img-wrapper'>
          <img src={url} key={`i${i}`} />
        </div>
      )
    })
    return (
      <li className='magazine-article'>
        {Heading !== Categories[parseInt(categoryId)] && (
          <h2>{Heading}</h2>
        )}
        <div className='content'>
          <p>{wholeDescription}</p>
          {categoryId === 17 && (
            <p>For more details, <a href={Brochure}>download brochure</a> or visit <a href='https://nitap.ac.in/'>NIT Arunachal Pradesh website</a>.</p>
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
    const { id, articles } = this.props
    const articleComponent = articles.map((article, i) => {
      return (
        <MagezineArticle categoryId={id} data={article} key={`a${i}`} />
      )
    })
    return (
      <div className='magazine-section'>
        <header className='category-header'>
          <h1 id={`category${id}`}>{Categories[id]}</h1>
        </header>
        <ol>
          {articleComponent}
        </ol>
      </div>
    )
  }
}

export class Magazine extends Component {
  initialState = {
    // blogs: {},
    // magSecComponents: [],
    // toc: []
    title: '',
    vol: '',
    iss: '',
    month: '',
    orders: null
  }
  state = this.initialState


  getTechnodayaBlogs = async () => {
    // section component array
    const blogsarray = []
    const blogsFirebase = await fs.collection(`issues/${year}/${BiMonthlyNames[getBiMonth('2022-03')]}/`).get();
    // getting its snapshort 
    for (var snap of blogsFirebase.docs) {
      var data = snap.data();
      data.ID = snap.id;
      blogsarray.push({ ...data })
      if (blogsarray.length === blogsFirebase.docs.length) {
        this.setState({
          blogs: {
            ...this.state.blogs,
            [i]: blogsarray
          }
        }, () => {
          this.createComponents()
        })
      }
    }


  }

  createComponents() {
    console.log('Inside create components')
    const sections = []
    const tocln = []
    Object.keys(this.state.blogs).forEach((id, key) => {
      sections.push((
        <MagazineSection id={id} key={`s${key}`} articles={this.state.blogs[id]} />
      ))
      tocln.push((
        <li><a href={`#category${id}`}>{Categories[id]}</a></li>
      ))
    })
    console.log(sections)
    console.log(this.magSecComponents)
    this.setState({
      magSecComponents: sections,
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
    return (
      <div className='route'>
        <div className='container'>
          <div className='page-header'><h1 className='heading'>Technodaya vol-3 iss-4</h1></div>
          <div className='magazine-wrapper'>

            <div className='magazine'>
              <ul>
                {this.state.magSecComponents}
              </ul>
            </div>
            <div className='magazine-toc'>
              <div className='toc'>
                <h4>In this article</h4>
                {this.state.toc}
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}