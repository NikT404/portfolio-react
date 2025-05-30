import React from 'react';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    years: '2022 - Present',
    description: 'Leading development of enterprise-scale web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices for code quality and performance optimization.',
    technologies: ['React', 'Node.js', 'AWS', 'Team Leadership'],
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Digital Innovations Ltd.',
    years: '2020 - 2022',
    description: 'Developed responsive web applications and collaborated with design teams to create intuitive user interfaces. Implemented modern JavaScript frameworks and optimized application performance.',
    technologies: ['Vue.js', 'JavaScript', 'CSS/SASS', 'API Integration'],
  },
  {
    id: 3,
    title: 'Junior Web Developer',
    company: 'StartUp Studio',
    years: '2019 - 2020',
    description: 'Started my professional journey building responsive websites and learning modern development practices. Gained experience in full-stack development and agile methodologies.',
    technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Professional Experience</h2>
        <p className="section-subtitle">My journey through various roles and projects that have shaped my expertise in web development.</p>
        <div className="experience-timeline">
          {experienceData.map((item, index) => (
            <div key={item.id} className="experience-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-title">{item.title}</h3>
                  <span className="experience-years">{item.years}</span>
                </div>
                <p className="experience-company">{item.company}</p>
                <p className="experience-description">{item.description}</p>
                <div className="experience-technologies">
                  {item.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 