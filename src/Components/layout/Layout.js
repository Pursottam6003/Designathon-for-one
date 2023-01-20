import React from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export const Layout = ({ children, user, logoutUser }) => {
  return (<>
    <Navbar user={user} logoutUser={logoutUser} />
    <main className="main-page">
      {children}
    </main>
    <Footer />
  </>)
}