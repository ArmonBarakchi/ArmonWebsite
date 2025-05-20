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
              As I sat on my living room floor, shoulders shrugged, I uttered those fateful words,
              “I quit.” Until the fall quarter of my sophomore year, I was confident that my
              education ended with me holding a medical school diploma. When I realized that
              the aspects of my education I really enjoyed – problem-solving, working on projects,
              and working in teams – were more accessible outside of a biology classroom,
              I decided it was time for a change.
          </p>

          <p>
              I didn’t choose medicine on a whim. It made sense. I liked science, I liked
              people, and being a doctor seemed like the perfect combination of both. Plus,
              it was a path that my family recognized and admired.
          </p>

          <p>
              But as I progressed, cracks started to form. I found myself staring at
              flashcards more than I was asking questions. Memorization overtook imagination.
              The human body fascinated me, but the process of becoming a doctor felt
              increasingly disconnected from the parts of learning that lit me up.
              I didn’t mind hard work — I just wanted it to mean something beyond the next exam.

          </p>

          <p>
              The night I said, “I quit,” it didn’t feel like failure. It felt
              like freedom. Like stepping out of someone else's dream and finally
              waking up to mine. I changed majors. I restructured my schedule. I went
              from hospital internships to engineering projects. And I never looked back.

          </p>

          <p>
              Engineering gave me back the spark I thought I had lost. It gave me
              permission to be curious again, to solve problems that don’t have a
              single right answer, to work in teams where each person’s strengths matter.
              The projects I do now energize me. The challenges feel meaningful.

          </p>

          <p>
              I still carry the lessons from medicine with me. A deep respect for human
              life. The discipline of hard work. The ability to listen and empathize. However,
              now, I keep these ideals in mind while designing, testing, and validating.
          </p>
          <p>
              Changing paths isn't a sign of weakness — it's a declaration of self-awareness.
              I didn't quit medicine because I couldn't handle it. I left because I found
              something that made me feel more like myself. And if there's one thing I've learned,
              it's that the path worth taking isn't always the one you started on.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Blog_MedToEng;
