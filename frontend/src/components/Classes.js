// src/components/Classes.js
import React from 'react';
import './Classes.css';

const classes = [
  'Math 18: Linear Algebra',
  'Math 20A-E: Calculus',
  'Math 102: Applied Linear Algebra',
  'Math 180C: Introduction to Stochastic Processes II',
  'Math 294: Mathematics of Finance',
  'CSE 100: Advanced Data Structures',
  'CSE 101: Design and Analysis of Algorithms',
  'CSE 150B: AI - Search and Reasoning',
  'ECE 15: Engineering Computation in C',
  'ECE 25: Introduction to Digital Design',
  'ECE 35: Introduction To Analog Design',
  'ECE 45: Circuits and Systems',
  'ECE 65: Components and Circuits Lab',
  'ECE 100: Linear Electronic Systems',
  'ECE 101: Linear Systems Fundamentals',
  'ECE 107: Electromagnetism',
  'ECE 109: Probability for Engineers',
  'ECE 111: Advanced Digital Design Project',
  'ECE 141A: Software Foundations I',
  'ECE 141B: Software Foundations II',
  'ECE 153: Random Processes',
  'ECE 158: Data Networks',
  'ECE 171A: Linear Control System Theory',
  'ECE 171B: Linear Control System Theory 2',
  'ECE 172A: Robotics and Machine Intelligence',
  'ECE 174: Linear and Nonlinear Optimization with Applications',
  'ECE 175: Pattern Recognition and Machine Learning',
  'ECE 176: Deep Learning and Applications',
  'ECE 253: Fundamentals of Digital Image Processing',
  'ECE 260A: VLSI Digital System Algorithms and Architectures',
  'ECE 260B: VLSI Integrated Circuits and Systems Design',
  'ECE 260C: VLSI Advanced Topics',
  'ECE 269: Advanced Linear Algebra and Applications',
  'ECE 271A: Statistical Learning',
  'ECE 272A: Dynamic Systems I: Linear Systems',
  'ECE 273: Convex Optimization',
  'ECE 275A: Parameter Estimation I',
  'ECE 275B: Parameter Estimation II',
  'ECE 276A: Sensing and Estimation in Robotics',
  'ECE 276B: Planning and Learning in Robotics',
  'ECE 284: VLSI Implementation for ML'

];

const onlineClasses = [
    'Matlab Onramp',
    'Simulink Fundamentals',
    'QuantConnect Algorithmic Trading A-Z',
    'QuantConnect Boot Camp 103 (Futures)',
    'QuantConnect Boot Camp 101 (US Equities)'

];

const Classes = () => {
  return (
      <section className="classes-section">
        <h2>Relevant College Coursework</h2>
        <p className="course-note">
          All courses completed at the University of California, San Diego. The relevant information about each class
          can be found at the{' '}
          <a href="https://catalog.ucsd.edu/courses/ECE.html" target="_blank" rel="noopener noreferrer">Electrical
            Engineering Catalog</a>,{' '}
          <a href="https://catalog.ucsd.edu/courses/MATH.html" target="_blank" rel="noopener noreferrer">Math
            Catalog</a>, and{' '}
          <a href="https://catalog.ucsd.edu/courses/CSE.html" target="_blank" rel="noopener noreferrer">Computer Science
            Catalog</a>.
        </p>

        <ul className="classes-list">
          {classes.map((course, index) => (
              <li key={index}>{course}</li>
          ))}
        </ul>
        <h2>Relevant Online Coursework</h2>
        <ul className="classes-list">
          {onlineClasses.map((course, index) => (
              <li key={index}>{course}</li>
          ))}
        </ul>
      </section>
  );
};

export default Classes;