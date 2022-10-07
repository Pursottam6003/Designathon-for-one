import React, { Component } from "react"
import Cover from '../images/technodaya-cover.png'

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
            <div className="issue">Vol {vol} issue {iss}</div>
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
  render() {
    return (
      <div className="read-component route">
        <div className="container">
          <header className="page-header">
            <h1 className="heading">All releases</h1>
          </header>
          <div className="grid-gallery">
            <Card imgsrc={Cover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'}/>
            <Card imgsrc={Cover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'}/>
            <Card imgsrc={Cover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'}/>
            <Card imgsrc={Cover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'}/>
            <Card imgsrc={Cover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'}/>
            <Card imgsrc={Cover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'}/>
            <Card imgsrc={Cover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'}/>
            <Card imgsrc={Cover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'}/>
            <Card imgsrc={Cover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'}/>
            <Card imgsrc={Cover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'}/>
            <Card imgsrc={Cover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'}/>
            <Card imgsrc={Cover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'}/>
            <Card imgsrc={Cover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'}/>
          </div>
        </div>
      </div>
    )
  }
}

