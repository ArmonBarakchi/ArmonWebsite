import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./bloggeneral.css";

const Blog_MedToEng = () => {
  return (
    <div className="App">
        <main className="blog-post">
        <h1>Why I Walked Away from Medicine</h1>
        <p className="blog-meta">Posted on January 17th, 2023</p>

        <section>
          <p>
            For most of my life, I believed I would become a doctor. It wasn’t just an expectation — it was part of my identity. I pursued the prerequisites, shadowed physicians, and immersed myself in the idea of becoming someone who healed others. But somewhere along the way, that path started to feel increasingly disconnected from the kind of impact I wanted to make.
          </p>

          <p>
            During my undergraduate years at UCSD, I found myself more energized by technical problem-solving than anything I encountered in the pre-med track. I began experimenting with code, circuit design, and systems modeling — and realized that what I truly loved was building. It was through these experiences that I gradually let go of the idea of medicine and shifted toward electrical engineering.
          </p>

          <p>
            The transition wasn’t easy. Letting go of a goal I’d held for years felt like a failure at first. But in reality, it was one of the best decisions I’ve ever made. Engineering gave me a creative outlet, a framework for logical thinking, and the satisfaction of seeing ideas become real. What I once saw as a detour became a new beginning.
          </p>

          <p>
            And I didn’t walk away from medicine empty-handed. That journey taught me discipline, resilience, and empathy — traits I carry with me in every project I work on. Whether I’m building a robot or optimizing an algorithm, that foundation still shapes how I think and how I solve problems.
          </p>

          <p>
            If there's one thing I’ve learned from all of this, it’s that changing your mind isn't weakness — it’s growth. And sometimes, letting go of one identity is the only way to discover the one that truly fits.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Blog_MedToEng;
