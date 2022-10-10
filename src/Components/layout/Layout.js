import React from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

export const Layout = (props) => {
    const { children, admin }= props
    return (
        <>
            <Navbar admin={admin} />
                {children}

            {!admin && (
                <Footer />
            )}
        </>
    )
}