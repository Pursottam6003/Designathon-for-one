import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from "./Components/layout/Layout"

import { Home } from "./Components/Home"
// import {AddBlogs} from "./Components/AddBlogs"
import { AddBlogs } from "./Components/addBlogs"
import { ShowBlogs } from "./Components/ShowBlogs";
// import { Add_blogs } from "./Components/Add_blogs";
import { Magzine } from "./Components/Magzine";
import { Magazine } from "./Components/Magazine";

import { FetchData } from "./Components/FetchData";
// import { Magzine2 } from "./Components/Magzine2";
import { Signup } from "./Components/SignUp";
import { Login } from "./Components/Login";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />

        <Route exact path="/addblogs" element={
          <Layout>
            <AddBlogs />
          </Layout>
        } />

        <Route exact path="/magazine" element={
          <Layout>
            <Magazine />
          </Layout>
        } />

        <Route exact path="/magzine" element={
          <Layout>
            <Magzine />
          </Layout>
        } />

        <Route exact path="/magzine2" element={
          <Layout>
            <FetchData />
          </Layout>
        } />


        <Route exact path="/show_blogs" element={
          <Layout>
            <ShowBlogs />
          </Layout>
        } />

        <Route exact path="/getblogs" element={
          <Layout>
            <FetchData />
          </Layout>
        } />

        <Route exact path="/signup" element={
          <Layout>
            <Signup />
          </Layout>
        } />


        <Route exact path="/login" element={
          <Layout>
            <Login />
          </Layout>
        } />


      </Routes>
    </BrowserRouter>
  )
}

export default App;
