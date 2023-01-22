import React from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { useLocation } from "react-router-dom"

export const Layout = ({ children, user, logoutUser, checkingStatus }) => {
  const location = useLocation();

  if (location.pathname.startsWith('/admin')) {
    return (<>
      <Navbar user={user} logoutUser={logoutUser} checkingStatus={checkingStatus} />
      <main className="main-page">
        {children}
      </main>
    </>)
  }

  return (<>
    <Navbar user={user} logoutUser={logoutUser} checkingStatus={checkingStatus} />
    <main className="main-page">
      {children}
    </main>
    <Footer />
  </>)
}