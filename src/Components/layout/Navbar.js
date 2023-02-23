import React, { useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import technodayaLogo from "../../images/logo/technodaya-logo1.png"
import { ReactComponent as CloseIcon } from '../../images/logo/remove.svg'
import { ReactComponent as LogoutIconDark } from '../../images/icons/logout-dark-no-bg.svg'
import { ReactComponent as LogoutIconLight } from '../../images/icons/logout-light-no-bg.svg'
import { ReactComponent as SpinnerIcon } from '../../images/icons/spinner.svg'
import { useNavigate } from 'react-router-dom'
import cx from 'classnames';
import styles from './Navigation.module.scss';

const HamburgerIcon = ({ toggleNavbar }) => (
  <div id='hamburgerMenu' className={styles.hamburgur} onClick={toggleNavbar}>
    <div className={styles.line} />
    <div className={styles.line} />
    <div className={styles.line} />
  </div>
)

const NavItem = ({ link, name, toggleNavbar }) => (
  <li>
    <NavLink
      onClick={() => { if (toggleNavbar) toggleNavbar() }}
      className={state => (cx(styles['nav-item'], { [styles.active]: state.isActive }))}
      to={link}
    >
      <div className={styles['nav-item-txt']}>{name}</div>
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

export const Navbar = ({ user, logoutUser, checkingStatus, ref }) => {
  const history = useNavigate();
  const location = useLocation();

  const mobileNavRef = useRef(null);

  const toggleSideNav = () => {
    if (mobileNavRef.current.style.width === "0%") {
      mobileNavRef.current.style.width = "100%";
    } else {
      mobileNavRef.current.style.width = "0%";
    }
  }

  const handleLogout = (e) => {
    e.preventDefault();
    toggleSideNav();
    history('/');
    logoutUser();
  }
  return (
    <div ref={ref} className={cx(styles['navbar-component'], { [styles.admin]: user.admin })}>
      <div className={cx(styles['nav-content-wrapper'], 'container')}
        style={location.pathname.includes('/admin') ? { maxWidth: '100%' } : {}}>
        <header className={styles.banner}>
          <NavLink exact="true" to='/'><img id='technodayaLogo' src={technodayaLogo} alt="Technodaya" /></NavLink>
        </header>

        <div className={styles['nav-items-wrapper']}>
          <div ref={mobileNavRef} className={styles['mobile-nav-wrapper']}>
            <ul className={cx(styles['nav-items'], styles.mobile)}>
              <li className={styles['hide-btn-wrapper']}>
                <button className={styles['hide-nav-menu']} onClick={toggleSideNav}>
                  <CloseIcon />
                </button>
              </li>
              {/* USUAL */}
              {NavLinks.filter(item => !item.auth).map((item, i) => (
                <NavItem key={`mu${i}`} {...item} toggleNavbar={toggleSideNav} />
              ))}

              {/* AUTH */}
              {user.user ? (<>
                <>
                  {NavLinks.filter(item => item.auth && !item.admin).map((item, i) => (
                    <NavItem key={`mau${i}`} {...item} toggleNavbar={toggleSideNav} />
                  ))}
                </>

                {user.admin && (<>
                  {NavLinks.filter(item => item.admin).map((item, i) => (
                    <NavItem key={`ma${i}`} {...item} toggleNavbar={toggleSideNav} />
                  ))}
                </>)}

                {/* SIGNOUT BUTTON */}
                <button aria-label='Logout button' title='Logout' type="button" onClick={handleLogout} className={cx(styles['nav-item'], styles.logout)}>
                  <div className={cx(styles['btn-txt'], styles['nav-item-txt'])}>
                    <span>{user.user.displayName ? user.user.displayName.slice(0, user.user.displayName.search(' ')) : 'Logout'}</span>
                    <LogoutIconDark />
                  </div>
                </button>

              </>) : <NavItem link={'/login'} name='Login' mobile={true} toggleNavbar={toggleSideNav} />}
            </ul>
          </div>


          <ul className={cx(styles['nav-items'], styles.desktop)}>
            {/* USUAL */}
            {NavLinks.filter(item => !item.auth).map((item, i) => (
              <NavItem key={`du${i}`} {...item} />
            ))}

            <li>
              <hr className={styles.divider} />
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
              <button aria-label='Logout button' title='Logout' type="button" onClick={handleLogout} className={cx(styles['nav-item'], styles.logout)}>
                <div className={cx(styles['btn-txt'], styles['nav-item-txt'])}>
                  <span>{user.user.displayName ? user.user.displayName.slice(0, user.user.displayName.search(' ')) : 'Logout'}</span>
                  {user.admin ? <LogoutIconDark /> : <LogoutIconLight />}
                </div>
              </button>
            </>) : checkingStatus ?
              <div className={cx(styles['nav-item'], styles.spinner)}>
                <SpinnerIcon />
              </div> :
              <NavItem link={'/login'} name='Login' mobile={false} />}
          </ul>
          <HamburgerIcon toggleNavbar={toggleSideNav} />
        </div>
      </div>
    </div>
  )
}
