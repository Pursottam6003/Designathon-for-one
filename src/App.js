import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./Components/Home"
import {Add_blogs} from "./Components/Add_blogs"
import { ShowBlogs } from "./Components/ShowBlogs";

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element=  {<Home/>}/>
      {/* <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/> */}
      <Route path="/add_blogs" element ={<Add_blogs/>}/>
      <Route path="/show_blogs" element={<ShowBlogs/>} />
      
      {/* <Route path="/show_products" element={<ShowProducts/>} />
      <Route path ="show_products/cart" element={<Cart/>} />
      <Route path ="/cart" element ={<Cart/>} />
      <Route path ="/about_user" element={<About_user/>} />
      <Route path ="/contact_us" element={<Contact_Us/>} /> */}
 
    </Routes>
  </BrowserRouter> 
  )
}

export default App;
