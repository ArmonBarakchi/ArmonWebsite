import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./bloggeneral.css";

const Blog_MedToEng = () => {
  return (
    <div className="App">
        <main className="blog-post">
        <h1>A Letter to Home</h1>
        <p className="blog-meta">Posted on May 1st, 2025</p>

            <section>
                <p>
                    My home is not my actual home. I reside in Laguna Niguel, CA. I live in Dana Point, CA.
                    Although the two are separated by only a single city limit, the difference is glaring:
                    repetitive street corners versus picturesque beach views, Starbucks versus Delta Cafe (my favorite
                    local coffee).
                    The best way to explain the contrast is the context in which I’ve experienced both places.
                </p>

                <p>
                    I moved to Laguna Niguel when I was ten years old. I liked it — the weather was perfect, the streets
                    were clean,
                    and the neighborhood was safe. But it was quiet in a way that felt empty. There was no one around,
                    and I often found myself
                    arguing with my parents more than any kid should. I was isolated on a hill, kept away from my
                    classmates not by distance,
                    but by an insurmountable pile of “no’s.” No walking to friends’ houses. No going out after school.
                    No freedom.
                    From that hill, I could see the world, but I couldn’t reach it.
                </p>

                <p>
                    Dana Point, on the other hand, was where I discovered who I was. It’s where I learned my favorite
                    hobby: surfing.
                    As I grew older, the endless stream of “no’s” slowly turned into cautious “okay’s” — always followed
                    by, “only because
                    you’re going surfing.” That freedom, limited though it was, opened the door to a town that would
                    become my sanctuary.
                </p>

                <p>
                    Dana Point isn’t big. It’s a small coastal community, shaped by one vibrant artery: the Pacific
                    Coast Highway.
                    But to me, that road was everything. It led to the cliffs, the harbor, the salty wind, and the early
                    morning lineups.
                    It led to Delta Cafe, to conversations with locals, to the kind of peace you only find with sand
                    beneath your feet
                    and the horizon stretched out before you. Off that road — and off the land — I felt free at last.
                </p>

                <p>
                    That’s why I say Dana Point is where I live. It's where I found independence, joy, and
                    a version of myself I actually liked. It may be just one city away, but to me, it will
                    always feel like a world apart. And that, more than anything, is why I love Dana Point.
                </p>

            </section>
        </main>
    </div>
  );
};

export default Blog_MedToEng;
