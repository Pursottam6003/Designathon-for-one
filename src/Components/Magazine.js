import React, { Component } from 'react'
import jote_img from "../images/image_jote.jpg"
import bglogo from '../images/logobgrm.png'
import img from '../images/icons8-calendar-week-32.png'
import {fs} from '../config/config'
import $ from 'jquery';


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
    const {Heading, EventDate, Urls, wholeDescription, Brochure} = this.props.data
    const images = Urls.map((url, i) => {
      return (
        <img src={url} key={`i${i}`} />
      )
    })
    return (
      <div className='magazine-article'>
        <h2>{Heading}</h2>
        <div className='content'>
          <p>{wholeDescription}</p>
          <div className='images'>
            {images}
          </div>
        </div>
      </div>
    )
  }
}

class MagazineSection extends Component {
  Catagories = [
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

  render() {
    const { id, articles } = this.props
    const articleComponent = articles.map((article, i) => {
      return (
        <MagezineArticle data={article} key={`a${i}`}/>
      )
    })
    return (
      <div className='magazine-section'>
        <header>
          <h1>{this.Catagories[id]}</h1>
        </header>
        {articleComponent}
      </div>
    )
  }
}

export class Magazine extends Component {
  initialState = {
    blogs: {},
    magSecComponents: []
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
        blogsarray.push({...data})
        if (blogsarray.length === blogsFirebase.docs.length) {
          this.setState({
            blogs: {
              ...this.state.blogs,
              [i]: blogsarray
            }
          }, () => {
            if (i == 17) {
              console.log('creating the blogs component')
              console.log(Object.keys(this.state.blogs));
              this.createComponents()
            }
          })
        }
      }
      
    }
  }

  createComponents() {
    console.log('Inside create components')
    const sections = []
    Object.keys(this.state.blogs).forEach((id, key) => {
      sections.push((
        <MagazineSection id={id} key={`s${key}`} articles={this.state.blogs[id]} />
      ))
    })
    console.log(sections)
    console.log(this.magSecComponents)
    this.setState({
      magSecComponents: sections
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
      <div className='magazine'>
        {this.state.magSecComponents}
      </div>
    )
  }
}