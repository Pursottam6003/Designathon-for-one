import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from "./Components/layout/Layout"

import { Home } from "./Components/Home"
import { AddBlogs } from "./Components/addBlogs"
import { ShowBlogs } from "./Components/ShowBlogs";
import { Magzine } from "./Components/Magzine";
import { Magazine } from "./Components/Magazine";
import { Read } from "./Components/read";

import { FetchData } from "./Components/FetchData";
// import { Magzine2 } from "./Components/Magzine2";
import { Signup } from "./Components/SignUp";
import { Login } from "./Components/Login";
import { About } from "./Components/about";
import { AdminLogin } from "./Components/AdminLogin";
import { FacultyLogin } from "./Components/FacultyLogin";
import { Upload_Cover } from "./Components/Upload_Cover";
import { AdminConsole } from "./Components/admin/admin";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={(
          <Layout admin={false}>
            <Home />
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
        <Route path="/magazine" element={(
          <Layout admin={false}>
            <Read />
          </Layout>
        )} />
        <Route path="/magazine_old" element={(
          <Layout admin={false}>
            <Magazine />
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
        <Route path="/show_blogs" element={(
          <Layout admin={false}>
            <ShowBlogs />
          </Layout>
        )} />
        <Route path="/signup" element={(
          <Layout admin={false}>
            <Signup />
          </Layout>
        )} />
        <Route path="/login" element={(
          <Layout admin={false}>
            <Login />
          </Layout>
        )} />
        <Route path="/adminLog" element={(
          <Layout admin={false}>
            <AdminLogin />
          </Layout>
        )} />
        <Route path="/facultylogin" element={(
          <Layout admin={false}>
            <FacultyLogin />
          </Layout>
        )} />
        <Route path="/uploadcover" element={(
          <Layout admin={false}>
            <Upload_Cover />
          </Layout>
        )} />
        <Route path="/admin/*" element={(
          <Layout admin={true}>
            <AdminConsole />
          </Layout>
        )} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
