import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from 'react'
import Home from "./components/pages/Home";
import Firstpage from "./First";
import Second from "./Second"
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Deals from "./components/pages/Deals";
import Signin from "./components/pages/Signin";
import Register from "./components/pages/Register";
import MUIHome from "./components/pages/MUIHome";
import Cart from "./components/pages/Cart";
import Blogs from "./components/pages/Blogs";
import Contact from "./components/pages/Contact";

const MyRoutes = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/deals" element={<Deals/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path='/home' element={<MUIHome/>} />
            <Route path="/cart" element= {<Cart/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/contact" element={<Contact/>}/>


        </Routes>
        <Footer/>
    </Router>
  )
}

export default MyRoutes