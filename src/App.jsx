import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/AboutUs';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add more routes here like: */}
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
