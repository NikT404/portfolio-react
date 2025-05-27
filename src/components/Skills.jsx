// import React from 'react';
// import './Skills.css'; // Make sure to create this CSS file

// export default function Skills() {
//   return (
//     <div className="skills-section">
//       <div className="skills-wrapper">
//         <img src="Images/icons8-html-5.svg" alt="HTML" className="skill-icon" />
//         <img src="Images/icons8-css-logo.svg" alt="CSS" className="skill-icon" />
//         <img src="Images/icons8-javascript.svg" alt="JavaScript" className="skill-icon" />
//         <img src="Images/icons8-github.svg" alt="Git" className="skill-icon" />
//         <img src="Images/icons8-figma.svg" alt="Figma" className="skill-icon" />
//         <img src="Images/react-svgrepo-com.svg" alt="React" className="skill-icon" />
//         <img src="Images/icons8-nodejs.svg" alt="Node.js" className="skill-icon" />
//       </div>
//     </div>
//   );
// }
import React from 'react';
import './skills.css';
import ScrollAnimation from './ScrollAnimation';

const skills = [
  { src: 'icons8-css-logo.svg', alt: 'CSS', name: 'CSS3' },
  { src: 'icons8-javascript.svg', alt: 'JavaScript', name: 'JavaScript' },
  { src: 'icons8-html-5.svg', alt: 'HTML', name: 'HTML5' },
  { src: 'icons8-github.svg', alt: 'GitHub', name: 'GitHub' },
  { src: 'icons8-figma.svg', alt: 'Figma', name: 'Figma' },
  { src: 'react-svgrepo-com.svg', alt: 'React', name: 'React' },
  { src: 'icons8-nodejs.svg', alt: 'Node.js', name: 'Node.js' },
  { src: 'icons8-mysql.svg', alt: 'MySQL', name: 'MySQL' },
  { src: 'icons8-c.svg', alt: 'C', name: 'C' },
  { src: 'icons8-c (1).svg', alt: 'C++', name: 'C++' },
  { src: 'icons8-tailwindcss.svg', alt: 'TailwindCSS', name: 'TailwindCSS' },
];

export default function Skills() {
  return (
    <ScrollAnimation>
      <section id="skills" className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill.src} alt={skill.alt} className="skill-icon" />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
}
