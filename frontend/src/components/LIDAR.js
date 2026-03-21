const LIDAR = () => {
  return (
    <div className="project-page">
      <div className="project-container">
          <div className="project-text">
              <h1>LiDAR-Based SLAM</h1>
              <p className="project-subtitle">
                  SLAM using LiDAR measurements to improve dead-reckoning trajectories.
              </p>
              <a
                  className="github-button"
                  href="https://github.com/ArmonBarakchi/LiDAR-BASED-SLAM"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  View the Github →
              </a>

              <section className="project-section">
                  <h2>Overview</h2>
                  <p>
                      This project implements a full LiDAR-based Simultaneous Localization and Mapping (SLAM) pipeline
                      for a differential drive robot equipped with wheel encoders, an IMU, a Hokuyo LiDAR sensor, and a
                      Kinect RGBD camera. The objective is to answer the two fundamental questions in autonomous
                      robotics — where am I, and what is around me — simultaneously, using only onboard sensor
                      measurements.
                  </p>
                  <p>
                      The pipeline begins with a dead-reckoning trajectory estimate from encoder and IMU data, which is
                      then refined using ICP-based LiDAR scan matching to reduce accumulated drift. From the refined
                      trajectory, 2D occupancy grid maps and texture maps of the floor are constructed. Finally, pose
                      graph optimization with loop closure constraints is applied to further improve trajectory
                      consistency and map quality.
                  </p>
                  <p>
                      The result is an end-to-end robotics perception pipeline that connects state estimation, geometric
                      registration, probabilistic mapping, and graph-based optimization — demonstrating how layered
                      sensor fusion techniques progressively improve a robot's understanding of its environment.
                  </p>
              </section>

              <section className="project-section">
                  <h2>How It Works</h2>
                  <p>
                      The system begins with data preprocessing, where encoder, IMU, and LiDAR measurements are loaded
                      from raw sensor files and structured into dataclass objects. Since each sensor operates at a
                      different sampling rate, the angular velocity from the IMU is interpolated onto the encoder time
                      axis to form synchronized control inputs. LiDAR scans are kept on their own time axis and
                      associated with poses only when needed.
                  </p>
                  <p>
                      The initial trajectory is estimated using a differential-drive motion model. Wheel encoder ticks
                      are converted to travel distances and combined with IMU yaw-rate measurements to integrate a pose
                      sequence forward in time. Both a forward Euler approximation and an exact closed-form integration
                      scheme are supported, though no meaningful difference was observed between them in practice.
                  </p>
                  <p>
                      LiDAR scan matching is then applied to reduce the drift inherent in dead-reckoning. Consecutive
                      LiDAR scans are aligned using a 2D Iterative Closest Point algorithm, where each scan is matched
                      against a local submap of previously aligned scans. Correspondences are found via nearest-neighbor
                      search using a KDTree, and the optimal yaw and translation update is computed in closed form using
                      a planar Procrustes formulation. Odometry provides the initialization for each ICP step, and
                      failed alignments fall back to the odometry prediction.
                  </p>
                  <p>
                      Occupancy grid mapping is performed by projecting LiDAR beams into the world frame using the
                      estimated robot pose and updating a log-odds grid along each ray. Cells intersected by the beam
                      are marked free and the endpoint cell is marked occupied, with log-odds saturation applied to
                      prevent unbounded confidence. The resulting map is visualized as an occupancy probability grid.
                  </p>
                  <p>
                      Texture mapping constructs a top-down color map of the floor using synchronized RGBD frames from
                      the Kinect camera. Each depth image is unprojected into 3D using the pinhole camera model,
                      transformed into the world frame via the robot pose and camera extrinsics, and projected onto the
                      ground plane. RGB colors are accumulated into the corresponding grid cells to produce a spatially
                      accurate floor texture.
                  </p>
                  <p>
                      Finally, pose graph optimization is applied using the GTSAM library. Relative pose constraints
                      between consecutive frames are inserted as BetweenFactors, and loop closure constraints are
                      detected using two strategies: fixed-interval candidate pairs and proximity-based spatial
                      detection. In both cases, ICP is used to verify the alignment before a constraint is accepted. The
                      graph is optimized using the Levenberg–Marquardt algorithm, and the refined trajectory is used to
                      reconstruct improved occupancy and texture maps.
                  </p>
              </section>


              <section className="project-section">
                  <h2>Read the Paper</h2>
                  <a
                      className="github-button"
                      href="/images/ECE276A_PR2_REPORT ARMON BARAKCHI 2.pdf"
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

export default LIDAR;