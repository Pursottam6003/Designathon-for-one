import React, { Component } from 'react'
// import jote_img from "../images/image_jote.jpg"
// import bglogo from '../images/logobgrm.png'
// import img from '../images/icons8-calendar-week-32.png'
import { fs } from '../config/config'
import $ from 'jquery';

const Catagories = [
  '',
  'Memorandum of Understanding (MoU)',
  'Invited/Expert Lectures given by NIT AP members',
  'Visits and Invited/Expert Lectures to NITAP from other insitutes',
  'External Funded Projects',
  'Patent (APA 7th edition format)',
  'Consultancy Projects',
  'Books',
  'Research Papers',
  'Conference Paper',
  'Book Chapters',
  'Faculty Empowerment Programmes',
  'Reviewers',
  'Session Chairs',
  'Winners of Competition',
  'Workshop/FDP/Conference/seminar/short term course etc.',
  'Outreach Activity',
  'Announcement',
]

const linkCopied = () => {
  var $temp = $("<input>");
  var $url = $(window.location).attr('href');
  $('.share').on('click', function () {
    $("body").append($temp);
    $temp.val($url).select();
    document.execCommand("copy");
    $temp.remove();
    console.log('working inside')

  })
  let btn = document.getElementById('share');
  btn.innerHTML = "Linked Copied"
}

class MagezineArticle extends Component {
  render() {
    const { Heading, EventDate, Urls, wholeDescription, Brochure } = this.props.data
    const { categoryId } = this.props
    const images = Urls.map((url, i) => {
      return (
        <img src={url} key={`i${i}`} />
      )
    })
    return (
      <div className='magazine-article'>
        {Heading !== Catagories[parseInt(categoryId)] && (
          <h2>{Heading}</h2>
        )}
        <div className='content'>
          <p>{wholeDescription}</p>
          {categoryId === 17 && (
            <p>For more details, <a href={Brochure}>download brochure</a> or visit <a href='https://nitap.ac.in/'>NIT Arunachal Pradesh website</a>.</p>
          )}
          <div className='images'>
            {images}
          </div>
        </div>
      </div>
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
          <h1>{Catagories[id]}</h1>
        </header>
        {articleComponent}
      </div>
    )
  }
}

export class Magazine extends Component {
  initialState = {
    blogs: {},
    magSecComponents: [],
    toc: []
  }
  state = this.initialState


  getTechnodayaBlogs = async () => {
    // section component array
    for (let i = 1; i <= 17; i++) {
      const blogsarray = []
      const blogsFirebase = await fs.collection(`/Technodaya/Blogs/${i}`).get();
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
        <li><a href="">{Catagories[id]}</a></li>
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
    // this.changebg();
    this.getTechnodayaBlogs()
  }

  render() {
    return (
      <div className='magazine-wrapper'>
        <div className='magazine-toc'>
          <div className='toc'>
            <h4>In this article</h4>
            {this.state.toc}
          </div>
        </div>
        <div className='magazine'>
          <ul>
            {this.state.magSecComponents}
          </ul>
        </div>
        <div className='read-more'>
          <h5>Other releases</h5>
          <ul>
            <li>
              <h6>Technodaya (Vol-V iss-3)</h6>
              <time>Jul 23, 2022</time>
            </li>
            <li>
              <h6>Technodaya (Vol-V iss-2)</h6>
              <time>May 28, 2022</time>
            </li>
            <li>
              <h6>Technodaya (Vol-V iss-1)</h6>
              <time>Mar 24, 2022</time>
            </li>
            <li>
              <h6>Technodaya (Vol-IV iss-6)</h6>
              <time>Jan 24, 2022</time>
            </li>
            <li>
              <h6>Technodaya (Vol-IV iss-5)</h6>
              <time>Nov 17, 2021</time>
            </li>
            <li>
              <h6>Technodaya (Vol-IV iss-4)</h6>
              <time>Sep 20, 2021</time>
            </li>
            <li>
              <h6>Technodaya (Vol-IV iss-3)</h6>
              <time>Jul 13, 2021</time>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}