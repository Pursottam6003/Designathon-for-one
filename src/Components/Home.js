import React, { useState, useEffect } from 'react'
import { Navbar } from './Navbar'
import AddBlogs from '../images/AddBlogs.jpeg'
import { Footer } from './Footer'
export const Home = () => {
  return (
    <>
      <Navbar />
      <div className='main'>

        <div className='blog_card'>

          <img className='blogimg' src={AddBlogs} alt='this is image'></img>
          <div className='cont'>
            <h4> EVENT TITLE</h4>
            <p>nit ap MOU with govt. school with jote meow meow meow meow meow meow meow meow moew meow
            </p>
            <button className='btn'>read article</button>
          </div>

        </div>


        <div className='blog_card'>

          <img className='blogimg' src={AddBlogs} alt='this is image'></img>
          <div className='cont'>
            <h4> EVENT TITLE</h4>
            <p>nit ap MOU with govt. school with jote meow meow meow meow meow meow meow meow moew meow school with jote meow meow meow meow meow meow meow meow moew meow school with jote meow meow meow meow meow meow meow meow moew meow
            </p>
            <button className='btn'>read article</button>
          </div>

        </div>
        <div className='blog_card'>

          <img className='blogimg' src={AddBlogs} alt='this is image'></img>
          <div className='cont'>
            <h4> EVENT TITLE</h4>
            <p>nit ap MOU with govt. school with jote meow meow meow meow meow meow meow meow moew meow school with jote meow meow meow meow meow meow meow meow moew meow school with jote meow meow meow meow meow meow meow meow moew meow
            </p>
            <button className='btn'>read article</button>
          </div>

        </div>
        <div className='blog_card'>

          <img className='blogimg' src={AddBlogs} alt='this is image'></img>
          <div className='cont'>
            <h4> EVENT TITLE</h4>
            <p>nit ap MOU with govt. school with jote meow meow meow meow meow meow meow meow moew meow school with jote meow meow meow meow meow meow meow meow moew meow school with jote meow meow meow meow meow meow meow meow moew meow
            </p>
            <button className='btn'>read article</button>
          </div>

        </div>
        <div className='blog_card'>

          <img className='blogimg' src={AddBlogs} alt='this is image'></img>
          <div className='cont'>
            <h4> EVENT TITLE</h4>
            <p>nit ap MOU with govt. school with jote meow meow meow meow meow meow meow meow moew meow school with jote meow meow meow meow meow meow meow meow moew meow school with jote meow meow meow meow meow meow meow meow moew meow
            </p>
            <button className='btn'>read article</button>
          </div>

        </div>

      </div>
      <Footer />
    </>
  )
}
