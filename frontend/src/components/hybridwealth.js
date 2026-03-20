// src/components/LineBot.js
import React from "react";
import "./ProjectPage.css";

const Hybridwealt = () => {
  return (
    <div className="project-page">
      <div className="project-container">
        <div className="project-text">
          <h1>Stochastic Barrier Function Analysis of Market-Relative Wealth via Hybrid Switching Diffusions</h1>


          <section className="project-section">
            <h2>Overview</h2>
            <p>
              This paper studies the long-run behavior of a portfolio manager who is trying to stay close to a benchmark index. The manager has access to three strategies — an aggressive leveraged position, a moderate fully-invested position, and a defensive low-exposure position — and switches between them based on how far the portfolio has fallen behind the benchmark. The central question is whether this switching policy is enough to prevent the portfolio from drifting arbitrarily far below the benchmark over time, no matter how long you wait.
To answer this, the paper models the portfolio's log-relative wealth as a hybrid switching diffusion — a stochastic process whose drift and volatility change depending on which strategy is active — and analyzes it using a barrier function that is zero when performance is acceptable and grows exponentially when the portfolio is in trouble. By showing that the expected value of this barrier function stays bounded for all time, the paper proves that the probability of extreme underperformance decays exponentially as the underperformance threshold deepens. The key condition is intuitive: the manager just needs to switch into recovery mode aggressively enough when things go wrong, not necessarily all the time. Monte Carlo simulations over 5,000 paths and 20 years confirm the theoretical bounds.
            </p>
          </section>


          <section className="project-section">
            <h2>Read the Paper</h2>
            <a
                className="github-button"
                href="/images/Lyapunov_Analysis_of_a_Hybrid_Wealth_Diffusion.pdf"
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

export default Hybridwealt();
