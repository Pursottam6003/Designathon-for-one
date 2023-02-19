import React, { Component } from "react"
import Cover from '../images/technodaya-cover.png'
import { fs } from '../config/config'
import { LoadingPage } from "../Components/Loading";
import MagazineCard from "../Components/MagazineCard/";

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
    blogs: [],
    loading: true
  }

  state = this.initialState

  fetchPrevIssues = async () => {
    const previousBlogs = []
    const blogsFirebase = await fs.collection(`PastPublications`).get();
    for (var snap of blogsFirebase.docs) {
      var data = snap.data();
      data.id = snap.id;
      previousBlogs.push({
        ...data
      })
      if (previousBlogs.length === blogsFirebase.docs.length) {
        this.setState({
          blogs: previousBlogs,
          loading: false
        })
      }
    }

    const blogs = previousBlogs.map(element => {
      return {
        imgsrc: element.ImageUrl,
        title: element.Title,
        vol: element.Vol,
        iss: element.Issue,
        month: element.Month,
        year: element.Year,
        pdfLink: element.PdfUrl,
        link: element.Link
      }
    });

    this.setState({ blogs: blogs })
  }

  componentDidMount() {
    this.fetchPrevIssues();
  }

  render() {
    return (
      <div className="read-component">
        <div className="container">
          <header className="page-header">
            <h1 className="heading">All releases</h1>
          </header>
          <div className="grid-gallery">
            {this.state.loading ? <LoadingPage /> : this.state.blogs.map((blog, i) => {
              const { imgsrc, title, vol, iss, month, year, link, pdfLink } = blog
              return <MagazineCard key={i} imgsrc={imgsrc} title={title} vol={vol} iss={iss} month={month} year={year} link={link} pdfLink={pdfLink} />
            })}
          </div>
        </div>
      </div>
    )
  }
}
