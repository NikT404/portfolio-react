import React from "react";
import ScrollAnimation from './ScrollAnimation';
import './projects.css';

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio built with React and Tailwind CSS, showcasing my skills and projects with a modern, responsive design.",
    link: "https://yourportfolio.com",
  },
  {
    title: "E-commerce Store",
    description: "A full-stack e-commerce site using MERN stack, featuring user authentication, product management, and secure payment processing.",
    link: "https://yourecommerce.com",
  },
  {
    title: "Weather App",
    description: "Real-time weather updates using OpenWeather API, with location-based forecasting and interactive weather maps.",
    link: "https://yourweatherapp.com",
  },
  {
    title: "Task Manager",
    description: "A productivity app built with React and Firebase, featuring real-time updates, user authentication, and task categorization.",
    link: "https://yourtaskmanager.com",
  }
];

const Projects = () => {
  return (
    <ScrollAnimation>
      <section id="projects" className="projects-section-boxed">
        <div className="projects-grid-boxed">
          <h2>My Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="project-box">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
};

export default Projects;
