import React from "react";
import { motion } from "framer-motion";
import ScrollAnimation from './ScrollAnimation';
import './pop.css';
import '../styles/common.css';

// Animation variants
const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const highlightVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const shapeVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};

export default function Pop() {
  return (
    <ScrollAnimation>
      <motion.section
        id="home"
        className="hero-section"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <div className="hero-content stack-mobile">
            <motion.div className="hero-text" variants={textVariants}>
              <motion.h1 className="heading-responsive mb-3">
                I'm a{" "}
                <motion.span
                  className="highlight purple"
                  style={{ "--highlight-index": 1 }}
                  variants={highlightVariants}
                  whileHover="hover"
                >
                  Developer
                </motion.span>
                ,{" "}
                <motion.span
                  className="highlight pink"
                  style={{ "--highlight-index": 2 }}
                  variants={highlightVariants}
                  whileHover="hover"
                >
                  Designer
                </motion.span>
                , and{" "}
                <motion.span
                  className="highlight yellow"
                  style={{ "--highlight-index": 3 }}
                  variants={highlightVariants}
                  whileHover="hover"
                >
                  Creator
                </motion.span>{" "}
                who loves{" "}
                <motion.span
                  className="highlight red"
                  style={{ "--highlight-index": 4 }}
                  variants={highlightVariants}
                  whileHover="hover"
                >
                  React
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-responsive mb-4"
                variants={textVariants}
              >
                Crafting beautiful and functional web experiences with modern
                technologies
              </motion.p>
              <motion.div
                className="hero-cta stack-mobile gap-responsive"
                variants={textVariants}
              >
                <motion.a
                  href="#projects"
                  className="button primary"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="button secondary"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Get in Touch
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div
              className="hero-decoration"
              variants={textVariants}
            >
              <div className="floating-shapes">
                <motion.div
                  className="shape circle"
                  variants={shapeVariants}
                  whileHover="hover"
                />
                <motion.div
                  className="shape square"
                  variants={shapeVariants}
                  whileHover="hover"
                />
                <motion.div
                  className="shape triangle"
                  variants={shapeVariants}
                  whileHover="hover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="mouse">
            <div className="wheel" />
          </div>
          <div className="arrow">
            <span />
            <span />
            <span />
          </div>
        </motion.div>
      </motion.section>
    </ScrollAnimation>
  );
}