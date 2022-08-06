import React from 'react'
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Project from './Component/Project';
import Navbars from './Component/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function Router() {
  return (
    
            <BrowserRouter>
            <Navbars/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Project" element={<Project />} />
                </Routes>
            </BrowserRouter>
    
  )
}

export default Router