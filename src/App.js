import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from "./Components/layout/Layout"

import { Home } from "./Components/Home"
import { Read } from "./Components/read";
import { About } from "./Components/about";
import { Submit } from "./Components/submit";
import { AdminConsole } from "./Components/admin/admin";
import { Login } from "./Components/AdminLogin";

import { AddBlogs } from "./Components/addBlogs"

// import { Login } from "./Components/Login";
// import { FacultyLogin } from "./Components/notInUse/FacultyLogin";
import { Signup } from "./Components/SignUp";

import { UploadCover } from "./Components/uploadCover";

import { Magazine } from "./Components/Magazine";     // published magazine
// below imports are not in use

import { Magzine } from "./Components/notInUse/Magzine";
import { FetchData } from "./Components/FetchData";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={(
          <Layout admin={false}>
            <Home />
          </Layout>
        )} />
        <Route path="/magazine" element={(
          <Layout admin={false}>
            <Read />
          </Layout>
        )} />
        <Route path="/about" element={(
          <Layout admin={false}>
            <About />
          </Layout>
        )} />
        <Route path="/addblogs" element={(
          <Layout admin={false}>
            <AddBlogs />
          </Layout>
        )} />
        <Route path="/submit" element={(
          <Layout admin={false}>
            <Submit />
          </Layout>
        )} />
        <Route path="/admin/*" element={(
          <Layout admin={true}>
            <AdminConsole />
          </Layout>
        )} />

        <Route path="/login" element={(
          <Layout admin={false}>
            <Login />
          </Layout>
        )} />

        <Route path="/magazine_old" element={(
          <Layout admin={false}>
            <Magazine />
          </Layout>
        )} />

        <Route path="/uploadcover" element={(
          <Layout admin={false}>
            <UploadCover />
          </Layout>
        )} />
        <Route path="/magzine" element={(
          <Layout admin={false}>
            <Magzine />
          </Layout>
        )} />
        <Route path="/magzine2" element={(
          <Layout admin={false}>
            <FetchData />
          </Layout>
        )} />

        <Route path="/signup" element={(
          <Layout admin={false}>
            <Signup />
          </Layout>
        )} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
