import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import './section-background.css';
import SectionBackground from './SectionBackground';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="contact-section section-with-background">
      <SectionBackground 
        colors={[
          { color: 'rgba(97, 218, 251, 0.1)', position: '30% 30%' },  // React blue - closer to center
          { color: 'rgba(247, 223, 30, 0.1)', position: '70% 70%' },  // JavaScript yellow - closer to center
          { color: 'rgba(6, 182, 212, 0.08)', position: '50% 50%' }   // Tailwind cyan - reduced opacity
        ]}
        scale={0.7}  // Make the background gradient smaller
      />
      <div className="section-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.div 
          className="contact-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <motion.a
              href="mailto:utkarshsinghrajawat12@gmail.com"
              className="contact-link"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>utkarshsinghrajawat12@gmail.com</span>
            </motion.a>
            <motion.a
              href="tel:+919351571387"
              className="contact-link"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>+91 9351571387</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 