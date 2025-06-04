import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/AboutUs';
import Services from './components/Service/AllServices';
import AllServices from './components/Service/AllServices';
import ContactUs from './components/Contact/Contact';
import Skills from './components/Skills/Skill';
import AllProjects from './components/Project/AllProject';
import ScrollToTop from './components/ScrollOnTop/ScrollOnTop';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add more routes here like: */}
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<AllServices/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<AllProjects/>} />
         
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
