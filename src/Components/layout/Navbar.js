import React from 'react'
import { NavLink } from 'react-router-dom'
import technodayaLogo from "../../images/logo/technodaya-logo1.png"
import technodayaLogoLight from "../../images/logo/technodaya-logo-white.png"
import { ReactComponent as CloseIcon } from '../../images/logo/remove.svg'

const toggleHamburger = () => {
  let navbar = document.getElementsByClassName("mobile")[0];
  navbar.style.width = "100%";

}
const close = () => {
  let navbar = document.getElementsByClassName("mobile")[0];
  navbar.style.width = "0";

}

const NavLis = (props) => {
  const { links } = props

  const mobile = links.map((li, i) => {
    const { link, name } = li
    if (link === '/') {
      return (
        <li>
          <NavLink key={`m${i}`} onClick={close} className='nav-item' exact to={link}>
            <div className='nav-item-txt'>{name}</div>
          </NavLink>
        </li>
      )
    }
    return (
      <li>
        <NavLink key={`m${i}`} onClick={close} className='nav-item' to={link}>
          <div className='nav-item-txt'>{name}</div>
        </NavLink>
      </li>
    )
  })

  const desktop = links.map((li, i) => {
    const { link, name } = li
    if (link === '/') {
      return (
        <li>
          <NavLink key={`d${i}`} className='nav-item' exact to={link}>
            <div className='nav-item-txt'>{name}</div>
          </NavLink>
        </li>
      )
    }
    return (
      <li>
        <NavLink key={`d${i}`} className='nav-item' to={link}>
          <div className='nav-item-txt'>{name}</div>
        </NavLink>
      </li>
    )
  })

  return (
    <div className='nav-items-wrapper'>
      <ul className='nav-items mobile'>
        <li>
          <button className='hide-nav-menu' onClick={close}>
            <CloseIcon />  
          </button>
        </li>
        {mobile}
      </ul>

      <ul className='nav-items desktop'>
        {desktop}
      </ul>

      <div id='hamburgerMenu' className='hamburgur' onClick={toggleHamburger}>
        <div className='line first'></div>
        <div className='line second'></div>
        <div className='line third'></div>
      </div>
    </div>
  )
}


export const Navbar = (props) => {
  return (
    <div className={`navbar-component${props.admin ? ' admin' : ''}`}>
      <div className='nav-content-wrapper container'>
        <header className='banner'>
          <NavLink exact to='/'><img id='technodayaLogo' src={props.admin ? technodayaLogoLight : technodayaLogo} alt="Technodaya" /></NavLink>
        </header>
        {props.admin ? (
          <NavLis links={[
            { link: '/', name: 'Logout' }
          ]} />
        ) : (
          <NavLis links={[
            { link: '/', name: 'Home' },
            { link: '/magazine', name: 'Read' },
            { link: '/about', name: 'About us' },
            { link: '/addBlogs', name: 'Submit' },
            { link: '/admin', name: 'Admin' }
          ]} />
        )}

      </div>

    </div>
  )
}
