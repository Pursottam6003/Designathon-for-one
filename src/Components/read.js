import React, { Component } from "react"
import Cover from '../images/technodaya-cover.png'
import { fs } from '../config/config'


class Card extends Component {
  render() {
    const { imgsrc, title, vol, iss, month, year, link, pdfLink } = this.props
    return (
      <section className="magazine-card">
        <figure className="cover-img">
          <a href={link} target='_blank'>
            <img src={imgsrc} alt={`Technodaya Vol ${vol} Iss ${iss} cover`} />
          </a>
        </figure>
        <div className="desc">
          <a className="title" href={link} target='_blank'>
            <p>{title}</p>
          </a>
          <div className="date">
            <time>{month} {year}</time>
            <div className="issue">{vol} issue {iss}</div>
          </div>
          <div className="actions">
            <a className="action-btn" href={pdfLink} target="_blank">View PDF</a>
            <button className="action-btn">Share</button>
          </div>
        </div>
      </section>
    )
  }
}

export class Read extends Component {
  release = {
    imgsrc: { Cover },
    title: 'Technodaya Vol IV, Issue-2',
    vol: 'IV',
    iss: '2',
    month: 'Mar-Apr',
    year: '2021',
    link: 'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice=',
    pdfLink: 'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'
  }

  initialState = {
    blogs: []
  }

  state = this.initialState

  fetchPrevIssues = async () => {
    const previousBlogs = []
    const blogsFirebase = await fs.collection(`PastPublications`).get();
    for (var snap of blogsFirebase.docs) {
      var data = snap.data();
      data.ID = snap.id;
      previousBlogs.push({
        ...data
      })
      if (previousBlogs.length === blogsFirebase.docs.length) {
        this.setState({
          blogs: previousBlogs
        })
      }
    }

    const blogs = previousBlogs.map(element => {
      console.log(element)
      return {
        imgsrc: element.ImageUrl,
        title: element.Title,
        vol: element.Vol,
        iss: element.Issue,
        month: element.Month,
        year: element.Year,
        pdfLink: element.PdfUrl,
      }
    });

    this.setState({ blogs: blogs })
  }

  componentDidMount() {
    this.fetchPrevIssues();
  }

  render() {
    return (
      <div className="read-component route">
        <div className="container">
          <header className="page-header">
            <h1 className="heading">All releases</h1>
          </header>
          <div className="grid-gallery">
            {this.state.blogs.map((blog, i) => {
              const { imgsrc, title, vol, iss, month, year, pdfLink } = blog
              return <Card key={i} imgsrc={imgsrc} title={title} vol={vol} iss={iss} month={month} year={year} link={pdfLink} pdfLink={pdfLink} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

