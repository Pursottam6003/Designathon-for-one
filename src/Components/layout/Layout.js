import React from "react"
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useLocation } from "react-router-dom";
import styles from './Layout.module.scss';

export const Layout = ({ children, user, logoutUser, checkingStatus }) => {
  const location = useLocation();

  if (location.pathname.startsWith('/admin')) {
    return (<>
      <p className="new-site">
        <span>This site is no longer updated.</span>&nbsp;<span>Go to 👉 <a href="https://technodaya.vercel.app">technodaya.vercel.app</a></span>
      </p>
      <Navbar user={user} logoutUser={logoutUser} checkingStatus={checkingStatus} />
      <main className={styles['main-no-ftr']}>
        {children}
      </main>
    </>)
  }

  return (<>
    <p className="new-site">
      <span>This site is no longer updated.</span>&nbsp;<span>Go to 👉 <a href="https://technodaya.vercel.app">technodaya.vercel.app</a></span>
    </p>
    <Navbar user={user} logoutUser={logoutUser} checkingStatus={checkingStatus} />
    <main className={styles.main}>
      {children}
    </main>
    <Footer />
  </>)
}