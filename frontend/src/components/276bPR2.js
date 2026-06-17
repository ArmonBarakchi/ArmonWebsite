const DSP = () => {
  return (
    <div className="project-page">
      <div className="project-container">
          <div className="project-text">
              <h1>DSP via Search- and Sampling-Based Algorithms</h1>

              <a
                  className="github-button"
                  href="https://github.com/ArmonBarakchi/Deterministic-Shortest-Path-Motion-Planning-/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  View the Github →
              </a>

              <section className="project-section">
                  <h2>Overview</h2>
                  <p>
                      This project investigates motion planning in static and dynamic three-dimensional
                      environments using both search-based and sampling-based planning algorithms. The
                      objective is to compute collision-free paths for a robot navigating through complex
                      obstacle fields while balancing planning speed, path quality, and computational
                      efficiency.
                  </p>
                  <p>
                      Four classical planning algorithms are implemented and compared: Weighted A*,
                      Anytime Repairing A* (ARA*), RRT*, and RRT-Connect. The planners are evaluated
                      across a variety of environments ranging from open spaces and obstacle fields to
                      narrow-passage mazes and dynamic scenarios where the goal location changes over
                      time under strict planning deadlines.
                  </p>
                  <p>
                      The result is an end-to-end motion planning framework that combines graph search,
                      sampling-based planning, collision checking, and dynamic replanning to study the
                      tradeoffs between optimality, robustness, and computational speed in autonomous
                      navigation tasks.
                  </p>
              </section>

              <section className="project-section">
                  <h2>How It Works</h2>
                  <p>
                      The pipeline begins by modeling the robot as a point mass moving through a bounded
                      three-dimensional workspace containing rectangular obstacles. Since the robot has
                      only translational degrees of freedom, the configuration space is equivalent to the
                      workspace itself. A configuration is considered valid if it lies within the workspace
                      boundaries and outside all obstacle regions.
                  </p>
                  <p>
                      Collision checking is performed using a continuous segment-obstacle intersection
                      test based on the slab method. Each obstacle is represented as an axis-aligned
                      bounding box, and candidate path segments are checked against every obstacle to
                      ensure that the entire trajectory remains collision free.
                  </p>
                  <p>
                      Search-based planning methods discretize the free space into a 26-connected grid
                      and formulate motion planning as a deterministic shortest-path problem. Weighted
                      A* uses an inflated heuristic to accelerate graph search, while ARA* repeatedly
                      refines solutions by gradually reducing the heuristic inflation factor, producing
                      increasingly better paths as computation time permits.
                  </p>
                  <p>
                      Sampling-based planners operate directly in continuous space. RRT* incrementally
                      constructs a collision-free tree and improves path quality through rewiring
                      operations that asymptotically approach the optimal solution. RRT-Connect grows
                      trees simultaneously from the start and goal configurations, allowing feasible
                      paths to be discovered extremely quickly in open environments.
                  </p>
                  <p>
                      The algorithms are evaluated across multiple static and dynamic environments with
                      varying geometric complexity. Performance is measured using planning time, path
                      quality, success rate, and computational effort. The resulting experiments reveal
                      the strengths and limitations of each planning strategy, demonstrating that
                      search-based methods excel in narrow-passage environments while sampling-based
                      methods offer significant speed advantages in open spaces.
                  </p>
              </section>

              <section className="project-section">
                  <h2>Read the Paper</h2>
                  <a
                      className="github-button"
                      href="/images/ECE276B_PR2_REPORT%20(1).pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Open PDF →
                  </a>
              </section>
          </div>


      </div>
    </div>
  );
};

export default DSP;