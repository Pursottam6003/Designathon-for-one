import React from 'react'
// import AddBlogs from '../images/AddBlogs.jpeg'
import Ph from '../images/technodaya-cover.png'
export const Home = () => {
  return (
    <>
      <div className='home-component '>
        <div className='hero'>

          <div className='content'>
            <h1>LATEST PUBLISHED</h1>
            <h3> Technodaya volume 3 issu 4</h3>
            <p>12-11-2302  july-august</p>

            <a className='read-button'> <p>read</p> </a>
          </div>
        </div>
        <div className='route'>
          <div className='container '>
            <header className='page-header '>
              <h1 className='heading'> MAGAZINE</h1>

            </header>
            <section className='issues'>
              <div className='release-list'>
                <div className='issues-preview'>
                  <img className='image' src={Ph}></img>
                  <div className='overview'>
                    <h3> technodaya vol 1 iss 3</h3>
                    <p> mar-april 2020  vol 1 iss 3</p>
                    <a className='read-magazine'> read</a>
                  </div>
                </div>
                <div className='issues-preview'>
                  <img className='image' src={Ph}></img>
                  <div className='overview'>
                    <h3> technodaya vol 1 iss 3</h3>
                    <p> mar-april 2020  vol 1 iss 3</p>
                    <a className='read-magazine'> read</a>
                  </div>
                </div>
                <div className='issues-preview'>
                  <img className='image' src={Ph}></img>
                  <div className='overview'>
                    <h3> technodaya vol 1 iss 3</h3>
                    <p> mar-april 2020  vol 1 iss 3</p>
                    <a className='read-magazine'> read</a>
                  </div>
                </div>
              </div>
            </section>
              </div>
            </div>
            
          <div className='publication-count'>
              <div className='journels publication'> 123</div>
              <div className='research-papers publication'> 123</div>
              <div className='book chapters publication'> 123</div>
            </div>
           <div className='container'> 
            <div className='subscription-cont'>
          <h1>subscribe to our newsletter</h1>     
          <h3>get updated when new vol is published</h3>     
            <form>
              <div>
            <input type="text" placeholder='first-name'></input>
            <input type="text" placeholder='last-name'></input>
              <input type="text" placeholder='email'></input>
            </div>
            <div>
            <button type="submit" className='submit'>  <div className='circle'> <p> > </p>  </div><h3> subscribe</h3>  </button>
            </div>
            </form>
              <div>
              </div>
          </div> 

        </div>
        
      </div>


    </>
  )
}
