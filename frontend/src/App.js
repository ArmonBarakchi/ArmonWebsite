// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from "./components/Projects";
import MedEE from './components/MedEE';
import FunProblems from './components/FunProblems';
import Letter from './components/Letter';
import WhyEngineersShouldWrite from './components/WhyEngineersShouldWrite';
import BuildingWebsite from './components/BuildingWebsite';
import C from './components/C';
import Python from './components/Python';
import Undergraduate from './components/Undergraduate';
import Numpy from './components/Numpy';
import Pandas from './components/Pandas';
import LineBot from './components/LineBot'
import Transcriptomic from './components/Transcriptomic'
import E6 from './components/E6'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} /> {/* ✅ */}

        <Route path="/blog/med-EE" element={<MedEE />} />
        <Route path="/blog/building" element={<BuildingWebsite/>} />
        <Route path="/blog/WhyEngineersShouldWrite" element={<WhyEngineersShouldWrite />} />
        <Route path="/blog/funproblems" element={<FunProblems />} />
        <Route path="/blog/A_Letter_to_Home" element={<Letter />} />


        <Route path="/guide/C++" element = {<C />} />
        <Route path="/guide/numpy" element = {<Numpy />} />
        <Route path="/guide/pandas" element = {<Pandas />} />
        <Route path="/guide/mostofundergraduate" element = {<Undergraduate />} />
        <Route path="/guide/python" element = {<Python />} />

        <Route path="/project/LineBot" element={<LineBot/>} />
        <Route path="/project/Transcriptomic" element={<Transcriptomic/>} />
        <Route path="/project/E6" element={<E6/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
