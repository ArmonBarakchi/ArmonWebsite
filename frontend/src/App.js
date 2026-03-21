// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from "./components/Projects";
import C from './components/C';
import Python from './components/Python';
import Undergraduate from './components/Undergraduate';
import Numpy from './components/Numpy';
import Pandas from './components/Pandas';
import LineBot from './components/LineBot'
import Transcriptomic from './components/Transcriptomic'
import E6 from './components/E6'
import Options from './components/Options'
import Orientation from "./components/Orientation";
import Hybridwealt from "./components/hybridwealth";
import LIDAR from "./components/LIDAR"
import VISLAM from "./components/VISLAM"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/guide/C++" element = {<C />} />
        <Route path="/guide/numpy" element = {<Numpy />} />
        <Route path="/guide/pandas" element = {<Pandas />} />
        <Route path="/guide/mostofundergraduate" element = {<Undergraduate />} />
        <Route path="/guide/python" element = {<Python />} />


        <Route path="/project/VISLAM" element ={<VISLAM />} />
        <Route path="/project/LIDAR" element ={<LIDAR />} />
        <Route path="/project/hybridwealth" element ={<Hybridwealt />} />
        <Route path="/project/orientation" element={<Orientation />} />
        <Route path="/project/options" element={<Options />} />
        <Route path="/project/LineBot" element={<LineBot/>} />
        <Route path="/project/Transcriptomic" element={<Transcriptomic/>} />
        <Route path="/project/E6" element={<E6/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
