import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from "./Components/layout/Layout"
import { Home } from "./Components/Home"
import {AddBlogs} from "./Components/AddBlogs"
import {AddBlogs2} from "./Components/addBlogs2"
import { ShowBlogs } from "./Components/ShowBlogs";
import { Add_blogs } from "./Components/Add_blogs";
import { Magzine } from "./Components/Magzine";


function App() {
  return (
    
    <BrowserRouter> 
    <Routes>
      <Route exact path="/" element={
        <Layout>
          <Home/>
        </Layout>
      } />
      <Route exact path="/add_blogs" element={
        <Layout>
          <Add_blogs/>
        </Layout>
      } />

      <Route exact path="/addblogs" element={
        <Layout>
          <AddBlogs/>
        </Layout> 
      } />

      <Route exact path="/addblogs2" element={
        <Layout>
          <AddBlogs2/>
        </Layout>
      } />

      <Route exact path="/magzine" element={
        <Layout>
          <Magzine/>
        </Layout>
      } />
 
      

      <Route exact path="/show_blogs" element={
        <Layout>
          <ShowBlogs/>
        </Layout>
      } />
 
      
    </Routes>
  </BrowserRouter> 
  )
}

export default App;
