const Orientation = () => {
  return (
    <div className="project-page">
      <div className="project-container">
          <div className="project-text">
              <h1>3D Orientation Tracking</h1>
              <p className="project-subtitle">
                  3D orientation tracking algorithm using unit quaternions
              </p>
              <a
                  className="github-button"
                  href="https://github.com/ArmonBarakchi/Orientation-Track-from-Sensor-Data"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  View the Github →
              </a>

              <section className="project-section">
                  <h2>Overview</h2>
                  <p>
                      This project focuses on 3D orientation tracking and panoramic scene reconstruction using inertial
                      measurement unit (IMU) data. The objective is to estimate the rotational motion of a rigid body
                      undergoing pure rotation and use the recovered orientation trajectory to generate a stitched
                      panoramic visualization from onboard camera images.
                  </p>
                  <p>
                      Orientation is represented using unit quaternions, enabling smooth and singularity-free modeling
                      of rotations on the SO(3) manifold. A projected gradient descent (PGD) optimization framework
                      combines a physics-based motion model derived from angular velocity with an observation model
                      enforcing gravity alignment from accelerometer measurements.
                  </p>
                  <p>
                      The system integrates calibration, estimation, and visualization into a unified pipeline.
                      Sensor biases are estimated from static intervals, quaternion trajectories are optimized using
                      gradient-based methods, and roll–pitch–yaw angles are compared against VICON motion-capture
                      ground truth to evaluate accuracy.
                  </p>
                  <p>
                      Using the optimized orientations, the project constructs cylindrical panorama images by mapping
                      camera rays into the world frame and rasterizing them into a global visual representation.
                      The result is an end-to-end robotics perception workflow that connects estimation theory,
                      geometric modeling, and computer vision.
                  </p>
                  <p>
                      Built with Python, PyTorch, NumPy, and scientific visualization tools, this project highlights
                      advanced state estimation, nonlinear optimization, and applied robotics mathematics, demonstrating
                      how sensor fusion techniques translate raw measurements into interpretable spatial understanding.
                  </p>
              </section>

              <section className="project-section">
                  <h2>How It Works</h2>
                  <p>
                      The system begins with an IMU calibration stage that estimates gyroscope and accelerometer biases
                      using an initial static time window. Raw ADC measurements are converted into physical units using
                      sensor sensitivities and reference voltage parameters, producing bias-corrected angular velocity
                      and acceleration signals suitable for downstream estimation.
                  </p>
                  <p>
                      Orientation propagation follows quaternion kinematics, where incremental rotations are computed
                      from angular velocity measurements and integrated forward in time. This gyro-only trajectory
                      provides a baseline estimate and serves as a validation step against VICON ground truth data.
                  </p>
                  <p>
                      The core estimation process formulates orientation tracking as a constrained optimization problem
                      over a sequence of unit quaternions. A motion model penalizes deviation from predicted rotations,
                      while an observation model enforces alignment between measured acceleration and the gravity
                      vector.
                      Gradients of the objective function are computed using PyTorch autograd, and projected gradient
                      descent enforces unit-norm constraints by normalizing quaternions after each update.
                  </p>
                  <p>
                      To evaluate performance, the optimized trajectory is converted into roll, pitch, and yaw angles
                      and compared to motion-capture data using rotation-angle error metrics defined directly on SO(3).
                      This avoids Euler-angle singularities and provides a physically meaningful measure of estimation
                      accuracy.
                  </p>
                  <p>
                      For panorama construction, each camera image is aligned with the closest-in-the-past orientation
                      estimate. Pixel coordinates are transformed into bearing vectors through an approximate pinhole
                      camera model, rotated into the world frame, and mapped onto a cylindrical projection. Colors are
                      rasterized into the panorama grid using nearest-neighbor assignment to create a global visual map.
                  </p>
                  <p>
                      The modular pipeline separates calibration, optimization, and visualization components, allowing
                      experimentation with learning rates, iteration counts, and projection parameters while maintaining
                      mathematical consistency across the entire system.
                  </p>
              </section>


              <section className="project-section">
                  <h2>See the Code</h2>
                  <a
                      className="github-button"
                      href="https://github.com/ArmonBarakchi/Orientation-Track-from-Sensor-Data"
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

export default Orientation;