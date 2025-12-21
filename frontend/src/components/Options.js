// src/components/LineBot.js
import React from "react";
import "./ProjectPage.css";
import botImage from "./Linebot.JPG"; // adjust path to your actual image

const LineBot = () => {
  return (
    <div className="project-page">
      <div className="project-container">
        <div className="project-text">
          <h1>LineBot</h1>
          <p className="project-subtitle">
            Interactive online GUI for pricing options.
            <a
                className="github-button"
                href="https://optionspricingmodels.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
            >
              View the Website →
            </a>
          </p>

            <section className="project-section">
                <h2>Overview</h2>
                <p>
                    This project is an interactive options pricing platform designed to explore how theoretical option
                    values respond to changes in market conditions. It implements multiple industry-standard pricing
                    models and provides visual tools that make abstract financial concepts intuitive and analyzable in
                    real time.
                </p>
                <p>
                    The application supports Black–Scholes, Monte Carlo simulation, and Cox–Ross–Rubinstein (binomial
                    tree) models, allowing direct comparison between closed-form solutions and numerical methods. Users
                    can dynamically adjust parameters such as spot price, strike price, time to maturity, volatility,
                    and risk-free rate to observe their impact on call and put option values.
                </p>
                <p>
                    To go beyond single-point estimates, the platform includes option price heatmaps that visualize
                    option sensitivity across ranges of spot prices and volatilities. These heatmaps help reveal
                    nonlinear behaviors, payoff asymmetries, and the limitations of theoretical assumptions under
                    different regimes.
                    </p>
                    <p>
                        The project is built with Python and Streamlit, integrates live market data via Yahoo Finance,
                        and uses NumPy, SciPy, and Matplotlib for numerical computation and visualization. Emphasis was
                        placed on modular design, mathematical correctness, and an intuitive user interface suitable for
                        both educational and analytical use.
                        </p>
                        <p>
                            This project demonstrates applied probability, numerical methods, financial modeling, and
                            full-stack data visualization, bridging theory and practice in quantitative finance.
                        </p>
            </section>

            <section className="project-section">
            <h2>How It Works</h2>
            <p>
                The application is structured around a modular pricing engine that separates market data ingestion,
                model computation, and visualization. Each pricing method implements a common interface, allowing
                parameters to be shared consistently while enabling direct comparison between models.
            </p>
            <p>
                Live price data is fetched using Yahoo Finance and cached to minimize redundant network calls.
                The most recent closing price is used as the spot price, while time to maturity is computed in years
                (not days) to ensure consistency with continuous-time models like Black–Scholes.
                Volatility and interest rates are normalized from percentage inputs into model-ready values.
            </p>
            <p>
                The Black–Scholes implementation uses the closed-form solution for European options,
                assuming geometric Brownian motion with constant volatility and risk-free rate. The model computes d1
                and d2 and evaluates the option price using the cumulative standard normal distribution.
                This serves as a baseline reference model and highlights the limitations of idealized assumptions
                when compared to numerical methods.
            </p>
            <p>
                The Monte Carlo engine simulates thousands of stochastic price paths using discretized geometric
                Brownian motion. Each path evolves forward in time under the risk-neutral measure,
                and option payoffs are evaluated at maturity and discounted back to present value.
                This method provides intuition for path-dependent behavior and demonstrates convergence
                properties as the number of simulations increases.
            </p>
            <p>
                The binomial model constructs a recombining price tree using up and down factors derived from volatility
                and time step size. Backward induction is used to compute option values, enforcing risk-neutral
                probabilities at each node. This approach bridges discrete-time intuition with continuous-time limits
                and provides a useful comparison to Black–Scholes as the number of time steps increases.
            </p>
            <p>
                To explore model behavior beyond single-point estimates, the app generates option price heatmaps across
                ranges of spot prices and volatilities. These visualizations reveal nonlinear sensitivity, payoff asymmetry,
                and the effect of volatility skew on option values. Heatmaps are computed by re-evaluating the pricing models
                over a parameter grid, ensuring mathematical consistency across all displayed results.
            </p>
            <p>
                The Streamlit frontend enables live updates, allowing results to recompute automatically when inputs
                change. Figures are rendered responsively, and results are cached where appropriate to maintain performance
                without sacrificing accuracy.
            </p>
          </section>


          <section className="project-section">
            <h2>See the Code</h2>
            <a
                className="github-button"
                href="https://github.com/ArmonBarakchi/OptionsPricingModels"
                target="_blank"
                rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </section>
        </div>


      </div>
    </div>
  );
};


