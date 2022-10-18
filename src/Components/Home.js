import React from 'react'
// import AddBlogs from '../images/AddBlogs.jpeg'
import MagazineCover from '../images/technodaya-cover.png'
import { MagazineCard } from './read'
import { ReactComponent as ArrowIcon } from '../images/icons/arrowicon.svg'

import Ph from '../images/technodaya-cover.png'
export const Home = () => {
  return (
    <div className='home-component '>
      <div className='route'>

        <section className='home-section hero parallax'>
          <div className='content container'>
            <h4>Latest issue published</h4>
            <h1 className='section-heading'>Technodaya Vol-3 Issue-4</h1>
            <p>12-11-2022 July-August</p>

            <a href='#' className='btn home-btn'>Read more</a>
          </div>
        </section>

        <section className='home-section'>
        <div className='container'>
          <header className='section-header'>
            <h1 className='section-heading'> Recent releases</h1>
            <button className='btn'>View all</button>
          </header>
          <div className='issues grid-gallery'>
            <MagazineCard imgsrc={MagazineCover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'} />
            <MagazineCard imgsrc={MagazineCover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'} />
            <MagazineCard imgsrc={MagazineCover} title={'Technodaya Vol IV, Issue-2'} vol={'IV'} iss={'2'} month={'Mar-Apr'} year={2021} link={'https://www.nitap.ac.in/news-details?slno=UE82M2lVejRPYzY4NkErTC9kYWdGdz09&notice='} pdfLink={'https://www.nitap.ac.in/storage/pdf/9112Technodaya-Vol-IV-iss-2-2021.pdf'} />
          </div>
        </div>
        </section>

        <section className='home-section publication-count-wrapper parallax'>
          <div className='container publication-counts'>
            <div className='journels publication'>
              <h1>53</h1>
              <h4 className='title'>International Journals</h4>
            </div>
            <div className='research-papers publication'>
              <h1>109</h1>
              <h4 className='title'>National Journals</h4>
            </div>
            <div className='book chapters publication'>
              <h1>24</h1>
              <h4 className='title'>Technodaya Issues</h4>
            </div>
          </div>
        </section>


        <section className='home-section'>
            <div className='subscription-cont container'>
              <h1 className='section-heading'>subscribe to our<br/> newsletter</h1>
              <h4>Stay updated with new Issues of Technodaya!</h4>
              <form>
                <div>
                  <input type="text" placeholder='First Name'></input>
                  <input type="text" placeholder='Last Name'></input>
                  <input type="text" placeholder='Email'></input>
                </div>
                <div>
                  <button type="submit" className='submit'>  
                    <div className='circle'>
                      <span>
                        <ArrowIcon />  
                      </span>  
                    </div>
                    <h3>subscribe</h3>  
                  </button>
                </div>
              </form>
          </div>
        </section>
      </div>


    </div>
  )
}
