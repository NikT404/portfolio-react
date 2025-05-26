import React from "react";
import ScrollAnimation from './ScrollAnimation';
import './pop.css';

export default function Pop() {
  return (
    <ScrollAnimation>
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              I'm a <span className="highlight purple" style={{ '--highlight-index': 1 }}>Developer</span>,{' '}
              <span className="highlight pink" style={{ '--highlight-index': 2 }}>Designer</span>, and{' '}
              <span className="highlight yellow" style={{ '--highlight-index': 3 }}>Creator</span>{' '}
              who loves <span className="highlight red" style={{ '--highlight-index': 4 }}>React</span>
            </h1>
            <p className="hero-subtitle">
              Crafting beautiful and functional web experiences with modern technologies
            </p>
            <div className="hero-cta">
              <a href="#projects" className="cta-button primary">View My Work</a>
              <a href="#contact" className="cta-button secondary">Get in Touch</a>
            </div>
          </div>
          <div className="hero-decoration">
            <div className="floating-shapes">
              <div className="shape circle"></div>
              <div className="shape square"></div>
              <div className="shape triangle"></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}