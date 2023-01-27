import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import technodayaLogo from "../../images/logo/technodaya-logo1.png"
import technodayaLogoLight from "../../images/logo/technodaya-logo-white.png"
import { ReactComponent as CloseIcon } from '../../images/logo/remove.svg'
import { ReactComponent as SpinnerIcon } from '../../images/icons/spinner.svg'
import { useNavigate } from 'react-router-dom'

const HamburgerIcon = () => (
  <div id='hamburgerMenu' className='hamburgur' onClick={toggleHamburger}>
    <div className='line first'></div>
    <div className='line second'></div>
    <div className='line third'></div>
  </div>
)

const toggleHamburger = () => {
  let navbar = document.getElementsByClassName("mobile-nav-wrapper")[0];
  navbar.style.width = "100%";
}

const close = () => {
  let navbar = document.getElementsByClassName("mobile-nav-wrapper")[0];
  navbar.style.width = "0";
}

const NavItem = ({ link, name, mobile }) => (
  <li>
    <NavLink onClick={() => { if (mobile) close() }} className='nav-item' to={link}>
      <div className='nav-item-txt'>{name}</div>
    </NavLink>
  </li>
)

const NavLinks = [
  { link: '/', name: 'Home' },
  { link: '/magazine', name: 'Read' },
  { link: '/about', name: 'About us' },
  { link: '/submit', name: 'Submit', auth: true },
  { link: '/activity', name: 'My Activity', auth: true },
  { link: '/admin', name: 'Admin', auth: true, admin: true },
]

export const Navbar = ({ user, logoutUser, checkingStatus }) => {
  const history = useNavigate();
  const location = useLocation();

  const handleLogout = (e) => {
    e.preventDefault();
    close();
    history('/');
    logoutUser();
  }
  return (
    <div className={`navbar-component ${user.admin ? 'admin' : ''}`}>
      <div className='nav-content-wrapper container' style={location.pathname.includes('/admin') ? { maxWidth: '100%' } : {}}>
        <header className='banner'>
          <NavLink exact="true" to='/'><img id='technodayaLogo' src={false ? technodayaLogoLight : technodayaLogo} alt="Technodaya" /></NavLink>
        </header>

        <div className='nav-items-wrapper'>

          <div className='mobile-nav-wrapper'>
            <ul className='nav-items mobile'>
              <li className='hide-btn-wrapper'>
                <button className='hide-nav-menu' onClick={close}>
                  <CloseIcon />
                </button>
              </li>
              {/* USUAL */}
              {NavLinks.filter(item => !item.auth).map((item, i) => (
                <NavItem key={`mu${i}`} {...item} mobile={true} />
              ))}

              {/* AUTH */}
              {user.user ? (<>
                <>
                  {NavLinks.filter(item => item.auth && !item.admin).map((item, i) => (
                    <NavItem key={`mau${i}`} {...item} mobile={true} />
                  ))}
                </>

                {user.admin && (<>
                  {NavLinks.filter(item => item.admin).map((item, i) => (
                    <NavItem key={`ma${i}`} {...item} mobile={true} />
                  ))}
                </>)}

                {/* SIGNOUT BUTTON */}
                <button type="button" onClick={handleLogout} className='nav-item'>
                  <div className='nav-item-txt'>Logout</div>
                </button>
              </>) : <NavItem link={'/login'} name='Login' mobile={true} />}
            </ul>
          </div>


          <ul className='nav-items desktop'>
            {/* USUAL */}
            {NavLinks.filter(item => !item.auth).map((item, i) => (
              <NavItem key={`du${i}`} {...item} />
            ))}

            <li>
              <hr className='divider'/>
            </li>

            {/* AUTH */}
            {user.user ? (<>
                {NavLinks.filter(item => item.auth && !item.admin).map((item, i) => (
                  <NavItem key={`dau${i}`} {...item} />
                ))}

              {user.admin && (
                NavLinks.filter(item => item.admin).map((item, i) => (
                  <NavItem key={`da${i}`} {...item} />
                ))
              )}

              {/* SIGNOUT BUTTON */}
              <button type="button" onClick={handleLogout} className='nav-item'>
                <div className='nav-item-txt'>Logout</div>
              </button>
            </>) : checkingStatus ?
              <div className='nav-item spinner'>
                <SpinnerIcon />
              </div> :
              <NavItem link={'/login'} name='Login' mobile={false} />}
          </ul>

          <HamburgerIcon />
        </div>
      </div>
    </div>
  )
}
