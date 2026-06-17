const OPTIMAL = () => {
  return (
    <div className="project-page">
      <div className="project-container">
          <div className="project-text">
              <h1>Optimal Trajectory Planning via MPC and GPI</h1>

              <a
                  className="github-button"
                  href="https://github.com/ArmonBarakchi/Optimal-Trajectory-Tracking-via-MPC-and-GPI"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  View the Github →
              </a>

              <section className="project-section">
                  <h2>Overview</h2>
                  <p>
                      This project investigates trajectory tracking and obstacle avoidance for a
                      differential-drive robot operating in a stochastic environment. The objective is to
                      follow a figure-eight reference trajectory while avoiding multiple obstacles, despite
                      motion uncertainty and actuator constraints, by solving a discounted infinite-horizon
                      optimal control problem.
                  </p>
                  <p>
                      Two fundamentally different control approaches are implemented and compared. The first
                      is a receding-horizon Certainty Equivalent Controller (CEC), which can be viewed as a
                      nonlinear Model Predictive Control (MPC) scheme that repeatedly solves a finite-horizon
                      optimal control problem online using the current tracking error state. The second is a
                      Generalized Policy Iteration (GPI) framework that discretizes the state space and
                      computes an approximately optimal policy offline through dynamic programming.
                  </p>
                  <p>
                      The result is an end-to-end optimal control framework that combines trajectory tracking,
                      obstacle avoidance, nonlinear optimization, and dynamic programming to study the
                      tradeoffs between online predictive control and offline policy computation in
                      autonomous robotics.
                  </p>
              </section>

              <section className="project-section">
                  <h2>How It Works</h2>
                  <p>
                      The pipeline begins by modeling the robot using a differential-drive kinematic model
                      with additive Gaussian motion noise. Rather than controlling the robot directly in its
                      global state space, the problem is reformulated in terms of tracking error relative to
                      a desired reference trajectory. This error-state formulation produces a compact
                      representation that captures deviations in position and orientation while preserving
                      the periodic structure of the reference path.
                  </p>
                  <p>
                      The first control strategy uses Certainty Equivalent Control, which functions as a
                      nonlinear Model Predictive Controller. At every timestep, the stochastic optimal
                      control problem is approximated as deterministic by assuming zero future disturbance.
                      A finite-horizon nonlinear program is then solved online to generate an optimal control
                      sequence subject to robot dynamics, actuator limits, and obstacle avoidance
                      constraints. Only the first control input is applied before the optimization is solved
                      again at the next timestep using updated state information.
                  </p>
                  <p>
                      The finite-horizon optimization problem is implemented using CasADi and solved with
                      IPOPT. Obstacle avoidance is enforced through nonlinear geometric constraints that
                      maintain a minimum separation distance between the robot and nearby obstacles. To
                      improve runtime performance, the optimization problem is symbolically constructed once,
                      warm-started using the previous solution, and differentiated automatically through
                      CasADi's computational graph.
                  </p>
                  <p>
                      The second control strategy uses Generalized Policy Iteration. The continuous tracking
                      error state space is discretized into a multidimensional grid spanning position error,
                      heading error, and trajectory phase. Transition probabilities and stage costs are
                      precomputed for every state-action pair, allowing Bellman updates to be performed
                      efficiently during policy iteration.
                  </p>
                  <p>
                      Policy improvement and policy evaluation steps are alternated until convergence,
                      producing a feedback policy that maps tracking errors directly to control actions.
                      Since all computation occurs offline, runtime execution consists only of a table
                      lookup, enabling extremely fast control updates at the expense of increased memory
                      usage and reduced accuracy due to discretization.
                  </p>
                  <p>
                      Extensive experiments compare both approaches under varying prediction horizons,
                      tracking cost weights, obstacle margins, grid resolutions, and policy iteration
                      parameters. The results demonstrate that MPC-style CEC achieves significantly lower
                      tracking error by continuously reoptimizing in continuous space, while GPI offers
                      substantially faster runtime execution through precomputed policies.
                  </p>
              </section>

              <section className="project-section">
                  <h2>Read the Paper</h2>
                  <a
                      className="github-button"
                      href="/images/ECE276B_PR3_REPORT%20(1).pdf"
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

export default OPTIMAL;