import React from 'react'

import logo from "../../images/logo.png"
import nitapLogo from "../../images/logo/nitap-logo.png"
import technodayaLogo from "../../images/logo/technodaya-logo1.png"

export const Navbar = () => {
  return (
    <div className='navbar-component'>
      <header className='banner'>
        <div className='logos'>
          <img src={nitapLogo} alt="NIT Arunachal Pradesh Logo" />
          <div className='sep' />
          <div className='college-name'>
            <img src={technodayaLogo} alt="Technodaya Logo" height="64" />
            <p className='nitap'>National Institute of Technology,<br /> Arunachal Pradesh</p>
          </div>
        </div>
      </header>

        <div className='nav-items'>
          <a className='nav-item' href='/'> <div>Home</div></a>
          <a className='nav-item' href='/magazine'> <div>Magazines</div></a>
          <a className='nav-item' href='https://nitap.ac.in'> <div>NITAP Home</div></a>
          <a className='nav-item' href='https://youtu.be/dQw4w9WgXcQ'> <div>if you dont have direction</div></a>
          <div className='sep' />
          <a className='nav-item' href='/addBlogs'> <div>Add New Activity</div></a>
          <a className='nav-item' href='https://youtu.be/dQw4w9WgXcQ'> <div>Admin login</div></a>
        </div>

    </div>
  )
}
