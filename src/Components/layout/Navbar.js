import React from 'react'
import Navlink, { NavLink } from 'react-router-dom'

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
        <ul className='nav-items mobile'>
          <li><a className='hideNavMenu' onClick={close}>X</a></li>
          <li><NavLink onClick={close} className='nav-item' exact to='/'> <div className='nav-item-txt'>Home</div></NavLink></li>
          <li><NavLink onClick={close} className='nav-item' to='/magazine'> <div className='nav-item-txt'>Read</div></NavLink></li>
          <li><NavLink onClick={close} className='nav-item' to='/about'> <div className='nav-item-txt'>About us</div></NavLink></li>
          <li><NavLink onClick={close} className='nav-item' to='/addBlogs'> <div className='nav-item-txt'>Submit</div></NavLink></li>
          <li><NavLink onClick={close} className='nav-item' to='/login'> <div className='nav-item-txt'>Admin login</div></NavLink></li>
        </ul>

        <ul className='nav-items desktop'>
          <li><NavLink className='nav-item' exact to="/"> <div className='nav-item-txt'>Home</div></NavLink></li>
          <li><NavLink className='nav-item' to="/magazine"> <div className='nav-item-txt'>Read</div></NavLink></li>
          <li><NavLink className='nav-item' to="/about"> <div className='nav-item-txt'>About us</div></NavLink></li>
          <li><NavLink className='nav-item' to="/addBlogs"> <div className='nav-item-txt'>Submit</div></NavLink></li>
          <li><NavLink className='nav-item' to="/login"> <div className='nav-item-txt'>Admin login</div></NavLink></li>
        </ul>

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
