import React from 'react'

import logo from "../../images/logo.png"
import nitapLogo from "../../images/logo/nitap-logo.png"
import technodayaLogo from "../../images/logo/technodaya-logo1.png"

const toggleHamburger = () => {
  let navbar = document.getElementsByClassName("mobile")[0];  
  navbar.style.width = "100%";
 
}
const close = () => {
  let navbar = document.getElementsByClassName("mobile")[0];  
  navbar.style.width = "0";
  
}


export const Navbar = () => {
  return (
    <div className='navbar-component'>
      <header className='banner'>
        <div className='logos'>
          <img id='nitapLogo' src={nitapLogo} alt="NIT Arunachal Pradesh Logo" />
          <div className='sep' />
          <div className='college-name'>
            <img id='technodayaLogo' src={technodayaLogo} alt="Technodaya" />
            <p className='nitap'>National Institute of Technology,<br /> Arunachal Pradesh</p>
          </div>
        </div>
      </header>

      <div className='nav-items-wrapper'>
        <div className=' mobile'>
          <a className='hideNavMenu' onClick={close}>X</a>
          <a className='mob-nav-item' onClick={close}  href='/'> <div className='nav-item-txt'>Home</div></a>
          <a className='mob-nav-item' onClick={close} href='/magazine'> <div className='nav-item-txt'>Read</div></a>
          <a className='mob-nav-item' onClick={close} href='/about'> <div className='nav-item-txt'>About us</div></a>
          <a className='mob-nav-item' onClick={close} href='https://nitap.ac.in'> <div className='nav-item-txt'>NITAP Home</div></a>
         
          <a className='mob-nav-item' onClick={close} href='/addBlogs'> <div className='nav-item-txt'>Submission</div></a>
          <a className='mob-nav-item' onClick={close} href='/login'> <div className='nav-item-txt'>Admin login</div></a>
        </div>

        <div className='nav-items desktop'>
          
          <a className='nav-item'   href='/'> <div className='nav-item-txt'>Home</div></a>
          <a className='nav-item'  href='/magazine'> <div className='nav-item-txt'>Read</div></a>
          <a className='nav-item'  href='/about'> <div className='nav-item-txt'>About us</div></a>
          <a className='nav-item' href='https://nitap.ac.in'> <div className='nav-item-txt'>NITAP Home</div></a>
          <div className='sep' />
          <a className='nav-item'  href='/addBlogs'> <div className='nav-item-txt'>Submission</div></a>
          <a className='nav-item' href='/login'> <div className='nav-item-txt'>Admin login</div></a>
        </div>

        <div className='logo-mobile'>
          <img src={technodayaLogo} alt="Technodaya" />
        </div>
        <div id='hamburgerMenu' className='hamburgur' onClick={toggleHamburger}>
          <div className='line first'></div>
          <div className='line second'></div>
          <div className='line third'></div>
        </div>
      </div>

    </div>
  )
}
