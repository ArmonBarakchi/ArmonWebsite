const VISLAM = () => {
  return (
    <div className="project-page">
      <div className="project-container">
          <div className="project-text">
              <h1>Visual-Inertial SLAM</h1>

              <a
                  className="github-button"
                  href="https://github.com/ArmonBarakchi/Visual-Inertial-Slam/tree/main"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  View the Github →
              </a>

              <section className="project-section">
                  <h2>Overview</h2>
                  <p>
                      This project implements a Visual-Inertial Simultaneous Localization and Mapping (VI-SLAM)
                      pipeline for a Clearpath Jackal robot equipped with an IMU and a stereo camera, navigating
                      the MIT campus in Cambridge. The objective is to answer the two fundamental questions in
                      autonomous robotics — where am I, and what is around me — simultaneously, using only
                      onboard sensor measurements.
                  </p>
                  <p>
                      The pipeline is structured in three progressive stages: IMU-only trajectory estimation via
                      EKF prediction, landmark mapping via EKF update, and full Visual-Inertial SLAM combining
                      both. Each stage builds on the last, with stereo camera observations ultimately correcting
                      the drift that accumulates from integrating inertial measurements alone.
                  </p>
                  <p>
                      The result is an end-to-end robotics perception pipeline that connects Lie group pose
                      representation, stereo feature observation modeling, and joint EKF state estimation —
                      demonstrating how layered sensor fusion on SE(3) progressively improves a robot's
                      understanding of its trajectory and surrounding environment.
                  </p>
              </section>

              <section className="project-section">
                  <h2>How It Works</h2>
                  <p>
                      The system models the robot's pose as an element of SE(3), the special Euclidean group
                      in three dimensions. Uncertainty is represented via perturbations in the Lie algebra
                      se(3), allowing the Extended Kalman Filter to maintain a manifold-aware state with a 6×6
                      covariance matrix. IMU measurements provide linear and angular velocities, assembled into
                      a twist input and used to propagate the pose forward via the matrix exponential.
                  </p>
                  <p>
                      The first stage performs IMU localization using only the EKF prediction step. At each
                      timestep, the mean pose is propagated using the discrete-time kinematic model, and the
                      covariance is updated using the adjoint representation of the motion model. No visual
                      measurements are incorporated at this stage, so the trajectory is entirely determined by
                      integrating IMU-derived velocities — making drift inevitable over long sequences.
                  </p>
                  <p>
                      The second stage estimates landmark positions using the EKF update step, with robot poses
                      from the previous stage treated as known. Each stereo feature observation is modeled by
                      transforming a world-frame landmark into the camera optical frame via the IMU-to-camera
                      extrinsic, applying perspective projection, and scaling by the stereo calibration matrix.
                      Landmark estimates are refined iteratively to minimize the innovation between predicted
                      and observed pixel coordinates.
                  </p>
                  <p>
                      The final stage performs true Visual-Inertial SLAM by jointly estimating both the robot
                      trajectory and the landmark map within a single EKF. The joint state includes the robot
                      pose and all landmark positions, with cross-correlations between pose and map uncertainty
                      tracked in a full joint covariance matrix. During prediction, only the robot pose evolves
                      via the IMU motion model. During update, the Kalman gain simultaneously refines landmark
                      positions linearly and applies a pose correction via the matrix exponential, allowing
                      stereo observations to suppress accumulated drift while building a consistent map of the
                      environment.
                  </p>
              </section>


              <section className="project-section">
                  <h2>Read the Paper</h2>
                  <a
                      className="github-button"
                      href="/images/ECE276A_PR3_REPORT.pdf"
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

export default VISLAM;