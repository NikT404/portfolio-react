import React from "react";
import './projects.css';

const projects = [
  {
    title: "Project One",
    description: "A brief description of Project One.",
    image: "/path/to/project1.jpg",
    link: "#",
    github: "#"
  },
  {
    title: "Project Two",
    description: "A brief description of Project Two.",
    image: "/path/to/project2.jpg",
    link: "#",
    github: "#"
  },
  {
    title: "Project Three",
    description: "A brief description of Project Three.",
    image: "/path/to/project3.jpg",
    link: "#",
    github: "#"
  },
  {
    title: "Project Four",
    description: "A brief description of Project Four.",
    image: "/path/to/project4.jpg",
    link: "#",
    github: "#"
  }
  // Add more projects here as needed
];

const Projects = () => {
  // Divide projects into two groups if needed, or just map all into one grid container
  // For simplicity, let's just map all into one grid for now, and we can adjust if you need two distinct blocks
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link live">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* If you need a second grid block, you can add another div here */}
      {/* <div className="projects-grid">{...more projects map...}</div> */}
    </section>
  );
};

export default Projects;
