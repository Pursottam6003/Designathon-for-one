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


function App() {
  return (

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/addblogs" element={<AddBlogs/>} />
          <Route exact path="/magazine" element={<Read/>} />
          <Route exact path="/magazine_old" element={<Magazine/>} />
          <Route exact path="/magzine" element={<Magzine/>} />
          <Route exact path="/magzine2" element={<FetchData/>} />
          <Route exact path="/show_blogs" element={<ShowBlogs/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/adminLog" element={<AdminLogin/>} />
          <Route exact path="/facultylogin" element={<FacultyLogin/>} />
          <Route exact path ="uploadcover" element ={<Upload_Cover/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
