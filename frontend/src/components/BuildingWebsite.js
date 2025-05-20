import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./bloggeneral.css";

const Blog_MedToEng = () => {
  return (
    <div className="App">
        <main className="blog-post">
        <h1>What I Learned Building My Website</h1>
        <p className="blog-meta">Posted on October 14th, 2023</p>

            <section>
                <p>
                    Breaking down the design, tech stack, and small decisions that made a big difference.
                </p>

                <p>
                    Building a personal website sounds simple until you actually start. What began as a side project
                    quickly turned into a crash course in design thinking and front-end development. I chose React as my framework, wrote everything from scratch using HTML and CSS, and
                    deployed the final version using Vercel. Along the way, I made dozens of small but significant
                    decisions — each one shaping not just how the site looked and functioned, but how it felt to use.
                </p>

                <p>
                    Using React gave me modularity and structure. It allowed me to break my website down into reusable
                    components — from the navigation bar and typewriter effect to project cards and blog post templates.
                    React’s JSX syntax made it easy to blend logic with layout, which was especially helpful as I
                    iterated quickly through design tweaks and added new features. I appreciated how natural it felt to
                    work with state, props, and conditional rendering to drive subtle user interactions.
                </p>

                <p>
                    CSS was where the real refinement happened. I kept things minimal — leaning into modern design
                    principles like whitespace, contrast, and simplicity. Animations were kept purposeful: smooth
                    transitions on hover, a slight bounce to buttons, and a responsive layout that adapts cleanly across
                    screen sizes. Every line of CSS was a deliberate choice in tone, from font weights to padding
                    ratios. The design I landed on feels light and readable, but still personal.
                </p>

                <p>
                    Hosting on Vercel was seamless. Git integration meant every push to my repo automatically deployed a
                    new version of the site. The instant feedback loop helped me stay in a creative flow, and the
                    built-in analytics were a nice bonus. I didn’t have to think much about infrastructure — which let
                    me focus purely on what I wanted to build.
                </p>

                <p>
                    Building this website wasn’t just a portfolio exercise — it was a reflection of how I think and
                    work. It sharpened my design eye, deepened my front-end skills, and gave me something tangible to
                    iterate on. And now that it's live, I have a home for my thoughts, projects, and future ideas — all
                    built from the ground up.
                </p>
            </section>
        </main>
    </div>
  );
};

export default Blog_MedToEng;
