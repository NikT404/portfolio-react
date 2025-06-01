import React from 'react';
import { motion } from 'framer-motion';
import './skills.css';
import ScrollAnimation from './ScrollAnimation';

const skills = [
  { src: 'icons8-html-5.svg', alt: 'HTML', name: 'HTML5', color: '#E34F26' },
  { src: 'icons8-css-logo.svg', alt: 'CSS', name: 'CSS3', color: '#1572B6' },
  { src: 'icons8-javascript.svg', alt: 'JavaScript', name: 'JavaScript', color: '#F7DF1E' },
  { src: 'react-svgrepo-com.svg', alt: 'React', name: 'React', color: '#61DAFB' },
  { src: 'icons8-nodejs.svg', alt: 'Node.js', name: 'Node.js', color: '#339933' },
  { src: 'icons8-github.svg', alt: 'GitHub', name: 'GitHub', color: '#181717' },
  { src: 'icons8-figma.svg', alt: 'Figma', name: 'Figma', color: '#F24E1E' },
  { src: 'icons8-mysql.svg', alt: 'MySQL', name: 'MySQL', color: '#4479A1' },
  { src: 'icons8-c.svg', alt: 'C', name: 'C', color: '#A8B9CC' },
  { src: 'icons8-c (1).svg', alt: 'C++', name: 'C++', color: '#00599C' },
  { src: 'icons8-tailwindcss.svg', alt: 'TailwindCSS', name: 'TailwindCSS', color: '#06B6D4' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const skillVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export default function Skills() {
  return (
    <ScrollAnimation>
      <section id="skills" className="skills-section">
        <motion.div 
          className="skills-background"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h2>
        <motion.div 
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              variants={skillVariants}
              whileHover="hover"
              style={{ "--skill-color": skill.color }}
            >
              <div className="skill-content">
                <motion.img
                  src={skill.src}
                  alt={skill.alt}
                  className="skill-icon"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                />
                <motion.span 
                  className="skill-name"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {skill.name}
                </motion.span>
              </div>
              <div className="skill-glow" />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </ScrollAnimation>
  );
}
