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
            A robot car that follows a black line using infrared sensors.
            <a
                className="github-button"
                href="https://youtube.com/shorts/LzNb0h7NZCM"
                target="_blank"
                rel="noopener noreferrer"
            >
              View Preview on Youtube →
            </a>
          </p>

          <section className="project-section">
            <h2>Overview</h2>
            <p>
              LineBot is a simple yet effective autonomous robot car designed to follow a black line on a white surface
              using infrared (IR) sensors.
              Built with affordability and educational value in mind, it introduces key concepts in control systems,
              electronics, and embedded programming. The
              project was worked on in collaboration with 2 other individuals, with me doing the majority of the
              assembly, coding, and testing. The completed project was entered into a competition against similar robots
              where it
              won 1st place in two challenges and 2nd place in another.
            </p>
          </section>

          <section className="project-section">
            <h2>How It Works</h2>
            <p>
              This Arduino program controls a PID-based line-following robot using data from infrared photoresistors
              (LDRs) and
              adjustable potentiometers. The robot uses an L298N motor driver to control two motors and relies on a
              front-facing sensor array to detect a black line against a lighter background. At startup, the code
              initializes serial communication and sets all pin modes. It then runs a calibration routine that asks the
              user to place the robot over white and black areas. By averaging readings in each state, it establishes a
              reference range to normalize future sensor data, making the robot more robust to ambient light variation.
            </p>
            <p>
              After calibration, the robot enters its main control loop. It first reads values from four potentiometers:
              one controls base speed, while the others adjust the PID constants (kP, kI, and kD). This enables live
              tuning without re-uploading code. The IR sensor readings are then normalized based on the calibration data
              and analyzed to determine the position of the line beneath the robot.
            </p>
            <p>
              To calculate how far the robot has deviated from the center of the line, the code computes a weighted
              average of the sensor values, focusing on the region with the strongest contrast. This error value becomes
              the input to the PID control loop, which computes a correction based on current error, accumulated error
              over time, and the rate of change in error. The code ensures the integral term doesn’t grow uncontrollably
              and resets it when the robot is centered on the line.
            </p>
            <p>
              The PID output is then used to adjust motor speeds. One motor will speed up while the other slows down,
              allowing the robot to steer back toward the line. These motor commands are passed to the motor driver,
              which adjusts the direction and speed of each wheel. If the robot is aligned with the line, it moves
              straight; if it veers, it gently corrects its path.
            </p>
            <p>
              Throughout this process, optional debugging data can be printed to the serial monitor. This includes
              real-time sensor values, PID terms, error calculations, and motor outputs. It's useful for observing how
              the robot reacts to changes and for tuning its behavior. The combination of real-time control, live
              parameter tuning, and feedback makes this a strong example of an embedded control system in practice.
            </p>
          </section>

          <section className="project-section">
            <h2>Tech Stack</h2>
            <ul>
              <li>Arduino Uno</li>
              <li>IR Photo Resistors</li>
              <li>Potentiometers, breadboards, prototyping wires</li>
              <li>C++ PID control code written in Arduino IDE</li>
              <li>L298N Dual H-Bridge Motor Driver and DC motors</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Challenges</h2>
            <p>
              One of the biggest challenges was tuning the sensitivity of the IR sensors and writing a control loop that
              was both reactive and stable.
              The robot needed to respond quickly to line curvature without overcorrecting, which required iterative
              testing and adjustment of motor speed, threshold values,
              and PID settings. To overcome these challenges, hours of testing was performed in order to find the proper
              values for each task.
            </p>
          </section>

          <section className="project-section">
            <h2>See the Code</h2>
            <a
                className="github-button"
                href="https://github.com/ArmonBarakchi/LineBot/blob/main/LineBot.ino"
                target="_blank"
                rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </section>
        </div>

        <div className="project-media">
          <img
              src={botImage} // Make sure `botImage` is correctly imported
              alt="LineBot robot"
              style={{maxWidth: "100%", borderRadius: "10px"}}
          />
        </div>

      </div>
    </div>
  );
};

export default LineBot;
