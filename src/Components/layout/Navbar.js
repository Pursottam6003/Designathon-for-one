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
      <div className='nav-content-wrapper container'>
        <header className='banner'>
          <img id='technodayaLogo' src={technodayaLogo} alt="Technodaya" />
        </header>
        <div className='nav-items-wrapper'>
          <ul className='nav-items mobile'>
            <li><a className='hideNavMenu' onClick={close}>X</a></li>
            <li><NavLink onClick={close} className='nav-item' exact to='/'> <div className='nav-item-txt'>Home</div></NavLink></li>
            <li><NavLink onClick={close} className='nav-item' to='/magazine'> <div className='nav-item-txt'>Read</div></NavLink></li>
            <li><NavLink onClick={close} className='nav-item' to='/about'> <div className='nav-item-txt'>About us</div></NavLink></li>
            <li><NavLink onClick={close} className='nav-item' to='/addBlogs'> <div className='nav-item-txt'>Submit</div></NavLink></li>
            <li><NavLink onClick={close} className='nav-item' to='/admin'> <div className='nav-item-txt'>Admin</div></NavLink></li>
          </ul>

          <ul className='nav-items desktop'>
            <li><NavLink className='nav-item' exact to="/"> <span className='nav-item-txt'>Home</span></NavLink></li>
            <li><NavLink className='nav-item' to="/magazine"> <span className='nav-item-txt'>Read</span></NavLink></li>
            <li><NavLink className='nav-item' to="/about"> <span className='nav-item-txt'>About us</span></NavLink></li>
            <li><NavLink className='nav-item' to="/addBlogs"> <span className='nav-item-txt'>Submit</span></NavLink></li>
            <li><NavLink className='nav-item' to="/admin"> <span className='nav-item-txt'>Admin</span></NavLink></li>
          </ul>

          <div id='hamburgerMenu' className='hamburgur' onClick={toggleHamburger}>
            <div className='line first'></div>
            <div className='line second'></div>
            <div className='line third'></div>
          </div>
        </div>
      </div>

    </div>
  )
}
