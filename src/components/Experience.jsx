import React from "react";
import { motion } from "framer-motion";
import './Experience.css';
import './section-background.css';
import SectionBackground from './SectionBackground';

const experiences = [
  {
    title: "Software Engineer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Led development of key features using React and Node.js. Implemented CI/CD pipelines and improved application performance by 40%.",
    technologies: ["React", "Node.js", "AWS", "Docker"],
    certificate: {
      name: "Advanced React Development",
      url: "#", // Replace with actual certificate URL
      issuer: "Tech Company Academy"
    }
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2021 - 2022",
    description: "Developed responsive web applications and collaborated with design team to implement modern UI/UX practices.",
    technologies: ["JavaScript", "Vue.js", "Sass", "Webpack"],
    certificate: {
      name: "Vue.js Professional",
      url: "#", // Replace with actual certificate URL
      issuer: "Digital Agency Training"
    }
  },
  {
    title: "Junior Developer",
    company: "Startup Inc",
    period: "2020 - 2021",
    description: "Built and maintained client websites, implemented new features, and fixed bugs in existing applications.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    certificate: {
      name: "Web Development Fundamentals",
      url: "#", // Replace with actual certificate URL
      issuer: "Startup Inc Academy"
    }
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const timelineItemVariants = {
  hidden: { 
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const techBadgeVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: "var(--true-blue)",
    color: "white",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "var(--true-blue)",
    color: "white",
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

const Experience = () => {
  return (
    <section id="experience" className="experience-section section-with-background">
      <SectionBackground 
        colors={[
          { color: 'rgba(97, 218, 251, 0.15)', position: '20% 20%' },  // React blue
          { color: 'rgba(247, 223, 30, 0.15)', position: '80% 80%' },  // JavaScript yellow
          { color: 'rgba(6, 182, 212, 0.1)', position: '50% 50%' }     // Tailwind cyan
        ]}
      />
      <div className="section-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={timelineItemVariants}
              whileHover="hover"
            >
              <motion.div 
                className="timeline-content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="timeline-header">
                  <motion.h3 
                    className="timeline-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {experience.title}
                  </motion.h3>
                  <motion.span 
                    className="timeline-period"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {experience.period}
                  </motion.span>
                </div>
                <motion.h4 
                  className="timeline-company"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {experience.company}
                </motion.h4>
                <motion.p 
                  className="timeline-description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  {experience.description}
                </motion.p>
                <motion.div 
                  className="timeline-technologies"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  {experience.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="tech-badge"
                      variants={techBadgeVariants}
                      whileHover="hover"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                {experience.certificate && (
                  <motion.div
                    className="certificate-container"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.a
                      href={experience.certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-button"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <span className="certificate-icon">🏆</span>
                      <span className="certificate-text">
                        {experience.certificate.name}
                      </span>
                      <span className="certificate-issuer">
                        by {experience.certificate.issuer}
                      </span>
                    </motion.a>
                  </motion.div>
                )}
              </motion.div>
              <motion.div 
                className="timeline-dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.3
                }}
              />
              <motion.div 
                className="timeline-line"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.4
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 