import React from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export const Layout = (props) => {
    const { children }= props
    return (
        <>
            <Navbar />
                {children}
            <Footer />
        </>
    )
}