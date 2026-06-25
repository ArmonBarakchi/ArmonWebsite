const QUAD = () => {
  return (
    <div className="project-page">
      <div className="project-container">
          <div className="project-text">
              <h1>Full-Stack Autonomous Quadrotor System for Safe Navigation </h1>

              <a
                  className="github-button"
                  href="https://github.com/ArmonBarakchi/QuadRotor"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  View the Github →
              </a>
              <a
                  className="github-button"
                  href="https://youtu.be/Quh9KCInP-I"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  View Preview on Youtube →
              </a>

              <section className="project-section">
                  <h2>Overview</h2>
                  <p>
                      This project presents a full-stack autonomous quadrotor navigation system
                      that solves the problem of safe waypoint navigation in unknown, obstacle-rich
                      environments using only onboard sensing. The drone discovers them online through a simulated
                      spinning LiDAR and must
                      navigate safely in real time.
                  </p>
                  <p>
                      Four subsystems are integrated into a layered pipeline running at 500 Hz. A
                      Multiplicative Unscented Kalman Filter on SE(3) fuses noisy IMU and GPS measurements
                      to estimate the drone's position, velocity, attitude, and sensor biases. A simulated
                      648-ray LiDAR builds a local obstacle map online using MuJoCo raycasting. Real-Time
                      Adaptive A* (RTAA*) replans a collision-free path at 5 Hz using only the current
                      LiDAR map, with no global map required. A Control Barrier Function safety filter runs
                      as a quadratic program at every control step, formally guaranteeing the drone remains
                      outside all detected obstacle safety radii regardless of planning approximation or
                      estimation error.
                  </p>
                  <p>
                      The result is a complete autonomous navigation stack. The system is validated across four
                      qualitatively distinct
                      maps — a narrow corridor, a dense column forest, a sequence of gate frames, and a
                      rising spiral — demonstrating that the planner and safety filter are both necessary
                      and complementary: RTAA* resolves the local minima that defeat CBF-only navigation,
                      while the CBF catches the safety violations that slip past the planner.
                  </p>
              </section>

              <section className="project-section">
                  <h2>How It Works</h2>
                  <p>
                      The pipeline begins with state estimation. A Multiplicative Unscented Kalman Filter
                      on SE(3) maintains a posterior estimate of the drone's position, velocity, attitude,
                      and sensor biases by fusing IMU measurements at 500 Hz with GPS corrections at 10 Hz.
                      Unlike standard Kalman filters, attitude perturbations are parameterized in the Lie
                      algebra via the exponential map, ensuring sigma points remain on the unit quaternion
                      sphere throughout propagation. The geodesic mean is recovered iteratively after each
                      prediction step to prevent quaternion drift.
                  </p>
                  <p>
                      Obstacle detection is handled by a simulated spinning LiDAR that casts 648 rays per
                      scan using MuJoCo's raycasting engine. The drone's own geometry is excluded through
                      body-level masking, and obstacles are assigned to a separate geom group so only
                      obstacle spheres are raycasted. Raw hit points are clustered using a DBSCAN-style
                      procedure, and sphere centers are estimated by pushing each cluster centroid away from
                      the drone to correct for the near-face bias inherent in LiDAR returns. Safe radii are
                      inflated by a fixed margin to absorb center estimation error, and the resulting local
                      obstacle map is updated at 10 Hz as the drone moves through the environment.
                  </p>
                  <p>
                      Global navigation is handled by Real-Time Adaptive A* (RTAA*), an online replanning
                      algorithm that operates on a discretized 3D grid using only the current LiDAR map. At
                      each replan cycle, a limited lookahead A* search is run from the drone's current grid
                      cell toward the goal, expanding at most k nodes. After each search, the heuristic
                      value of the start node is updated to the minimum f-value remaining in the open list,
                      preventing the algorithm from revisiting the same node with an overoptimistic estimate
                      and guaranteeing finite convergence. The next intermediate waypoint is extracted as
                      the world-frame position of the first grid cell along the best path found. Before
                      replanning, goals are projected onto the free space — if a goal lies inside any
                      obstacle's safety radius, it is shifted radially outward to the nearest feasible point,
                      preventing conflict between the goal-seeking controller and the safety filter.
                  </p>
                  <p>
                      Safety is enforced by a Control Barrier Function filter that runs as a quadratic
                      program at every control timestep. Given a nominal force vector from the geometric
                      controller, the CBF solves for the minimum-norm modification that satisfies a linear
                      constraint on each active obstacle, ensuring the time derivative of the barrier
                      function remains non-negative along the system trajectory. The CBF constraint for each
                      obstacle is gated by proximity and approach direction: it is only enforced when the
                      drone is within a lookahead distance of the safety boundary and moving toward it. This
                      prevents the safety filter from interfering with navigation at range, where the
                      nominal force may point in the general direction of a distant obstacle without posing
                      any actual collision risk.
                  </p>
                  <p>
                      The geometric controller tracks RTAA* waypoints directly on SE(3), computing force and
                      torque commands from position and attitude errors without Euler angle singularities.
                      The nominal force is passed to the CBF filter before application, and torques are
                      expressed in the world frame via the estimated rotation matrix. Physical parameters
                      including mass, gravity, timestep, and maximum thrust are read directly from the
                      MuJoCo XML model at runtime rather than hardcoded, ensuring consistency between the
                      simulation and the controller across all maps.
                  </p>
                  <p>
                      The four subsystems are validated across four maps of increasing navigational
                      complexity. Ablation experiments confirm that RTAA* and the CBF are complementary:
                      removing the safety filter causes physical collisions when planning or estimation
                      errors carry the drone across an obstacle boundary, while removing the planner causes
                      the drone to deadlock at local minima where the goal-seeking controller and CBF
                      repulsion cancel. Together, RTAA* resolves local minima by routing intermediate
                      waypoints around obstacles, and the CBF enforces the safety constraint at every
                      timestep regardless of planning imprecision.
                  </p>
              </section>

              <section className="project-section">
                  <h2>Read the Paper</h2>
                  <a
                      className="github-button"
                      href="/images/quad.pdf"
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

export default QUAD;