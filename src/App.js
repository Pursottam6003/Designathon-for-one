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
import { Issue } from "./Components/Issue";

import { Signup } from "./Components/SignUp";
import { UploadCover } from "./Components/uploadCover";

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
        <Route path="/issues/*" element={(
          <Layout admin={false}>
            <Issue slug='issues' />
          </Layout>
        )} />

        <Route path="/previews/*" element={(
          <Layout admin={false}>
            <Issue slug='previews' />
          </Layout>
        )} />

        <Route path="/login" element={(
          <Layout admin={false}>
            <Login />
          </Layout>
        )} />

        <Route path="/uploadcover" element={(
          <Layout admin={false}>
            <UploadCover />
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
