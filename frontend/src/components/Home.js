// src/components/Home.js
import React from "react";
import Hero from "./Hero";
import Guides from "./Guides";
import Blogs from "./Blogs";

import "./Home.css";

//add guides back once you make them
function Home() {
  return (
    <div className="Home">
      <Hero />


      <hr className="section-divider"/>
      <Blogs />
    </div>
  );
}

export default Home;
