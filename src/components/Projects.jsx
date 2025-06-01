import React from "react";
import { motion } from "framer-motion";
import './projects.css';
import './section-background.css';
import SectionBackground from './SectionBackground';

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    image: "/path/to/project1.jpg",
    link: "#",
    github: "#",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "/path/to/project2.jpg",
    link: "#",
    github: "#",
    technologies: ["Vue.js", "Express", "PostgreSQL"]
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    image: "/path/to/project3.jpg",
    link: "#",
    github: "#",
    technologies: ["React", "Firebase", "TailwindCSS"]
  },
  {
    title: "Project Four",
    description: "A brief description of Project Four.",
    image: "/path/to/project4.jpg",
    link: "#",
    github: "#",
    technologies: ["Next.js", "TypeScript", "Prisma"]
  }
  // Add more projects here as needed
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

const projectCardVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
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

const Projects = () => {
  return (
    <section id="projects" className="projects-section section-with-background">
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
          My Projects
        </motion.h2>
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={projectCardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="project-image-container"
                variants={imageVariants}
              >
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`} 
                  className="project-image" 
                />
                <motion.div 
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                </motion.div>
              </motion.div>
              <div className="project-info">
                <motion.h3 
                  className="project-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="project-description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  className="project-technologies"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {project.technologies.map((tech, techIndex) => (
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
