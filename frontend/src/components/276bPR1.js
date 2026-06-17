const DYNPRO = () => {
  return (
    <div className="project-page">
      <div className="project-container">
          <div className="project-text">
              <h1>Dynamic Programming for Motion Planning</h1>

              <a
                  className="github-button"
                  href="https://github.com/ArmonBarakchi/Dynamic-Programming-for-Motion-Planning"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  View the Github →
              </a>

              <section className="project-section">
                  <h2>Overview</h2>
                  <p>
                      This project develops an optimal planning framework for the Door & Key environment by
                      formulating the task as a Markov Decision Process (MDP) and solving it using Dynamic
                      Programming. The objective is to compute control policies that minimize the total cost
                      required for an agent to navigate a grid world, collect keys when necessary, unlock
                      doors, and reach a goal location.
                  </p>
                  <p>
                      Two scenarios are considered. In the first, the environment is fully known and a
                      dedicated optimal policy is generated for each map. In the second, a family of
                      randomized environments must be solved using a single policy that generalizes across
                      all possible map configurations. To achieve this, the environment state is augmented
                      with observable map information such as key locations, goal locations, and door states.
                  </p>
                  <p>
                      The result is an end-to-end planning pipeline that combines state-space graph
                      construction, dynamic programming, and policy extraction to produce provably optimal
                      action sequences for a variety of navigation tasks.
                  </p>
              </section>

              <section className="project-section">
                  <h2>How It Works</h2>
                  <p>
                      The pipeline begins by representing the Door & Key environment as a Markov Decision
                      Process. The state captures the agent's position, orientation, key possession status,
                      and door states. In the randomized setting, additional state variables encode the
                      possible key and goal locations, ensuring the process remains Markovian and can be
                      solved using a single stationary policy.
                  </p>
                  <p>
                      Because the simulator only exposes the environment through actions, the full state
                      transition graph must first be constructed. A breadth-first search explores every
                      reachable state from the initial conditions and records the deterministic transitions
                      and associated action costs for all valid actions. This produces an explicit MDP graph
                      suitable for dynamic programming.
                  </p>
                  <p>
                      Once the state space is enumerated, an infinite-horizon Dynamic Programming algorithm
                      is applied. The value function is initialized using terminal costs and repeatedly
                      updated through Bellman optimality backups until convergence. At each iteration, the
                      algorithm evaluates every available action and computes the minimum achievable
                      cost-to-go from every state.
                  </p>
                  <p>
                      After convergence, the optimal policy is extracted directly from the value function.
                      For each state, the policy selects the action that minimizes the sum of immediate
                      action cost and future cost-to-go. Executing this policy greedily yields a globally
                      optimal sequence of actions that reaches the goal with minimum total cost.
                  </p>
                  <p>
                      For the randomized environments, all possible map configurations are combined into a
                      unified augmented state space. Dynamic Programming is then performed once over this
                      larger MDP, producing a single policy capable of handling every valid environment
                      instance while minimizing the expected navigation cost across the entire distribution
                      of maps.
                  </p>
              </section>
          </div>


      </div>
    </div>
  );
};

export default DYNPRO;