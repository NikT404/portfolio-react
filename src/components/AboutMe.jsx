import React from "react";
import { motion } from "framer-motion";
import './about.css';
import './section-background.css';
import SectionBackground from './SectionBackground';

const AboutMe = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const socialLinkVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "var(--true-blue)",
      color: "white",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const resumeButtonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.6 // Delay after social links
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "var(--true-blue)",
      color: "white",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.section
      id="about"
      className="about-section section-with-background"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <SectionBackground 
        colors={[
          { color: 'rgba(97, 218, 251, 0.15)', position: '20% 20%' },  // React blue
          { color: 'rgba(247, 223, 30, 0.15)', position: '80% 80%' },  // JavaScript yellow
          { color: 'rgba(6, 182, 212, 0.1)', position: '50% 50%' }     // Tailwind cyan
        ]}
      />
      <div className="section-content">
        <motion.div 
          className="about-content"
          variants={containerVariants}
        >
          <motion.img
            src="/IMG20240318173046.jpg"
            alt="Utkarsh Singh - Web Developer"
            className="profile-image"
            loading="lazy"
            variants={imageVariants}
            whileHover="hover"
          />
          <motion.h2
            variants={itemVariants}
            className="about-heading"
          >
            About Me
          </motion.h2>
          <motion.p 
            className="about-text"
            variants={itemVariants}
          >
            Hi! I'm <motion.span 
              className="highlight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >Utkarsh Singh</motion.span>, a passionate developer and designer who loves building beautiful and functional web experiences. I enjoy working with React, modern CSS, and creative UI/UX. When I'm not coding, you can find me exploring new tech, sketching, or enjoying a good book.
          </motion.p>
          <motion.div 
            className="social-links"
            variants={itemVariants}
          >
            <motion.a 
              href="https://github.com/NikT404"
              className="social-link github"
              aria-label="Visit Utkarsh Singh's GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialLinkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/utkarsh-singh10/"
              className="social-link linkedin"
              aria-label="Visit Utkarsh Singh's LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
              variants={socialLinkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
              </svg>
            </motion.a>
          </motion.div>

          <motion.a
            href="https://flowcv.com/resume/your-resume-id" // Replace with your actual Flow CV URL
            className="resume-button"
            variants={resumeButtonVariants}
            whileHover="hover"
            whileTap="tap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg 
              className="resume-icon" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            <span>View Resume</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;