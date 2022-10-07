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
import { AdminPortal } from "./Components/adminPortal";


function App() {
  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/addblogs" element={<AddBlogs/>} />
          <Route path="/magazine" element={<Read/>} />
          <Route path="/magazine_old" element={<Magazine/>} />
          <Route path="/magzine" element={<Magzine/>} />
          <Route path="/magzine2" element={<FetchData/>} />
          <Route path="/show_blogs" element={<ShowBlogs/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<AdminPortal />} />
          <Route path="/adminLog" element={<AdminLogin/>} />
          <Route path="/facultylogin" element={<FacultyLogin/>} />
          <Route path ="/uploadcover" element ={<Upload_Cover/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
