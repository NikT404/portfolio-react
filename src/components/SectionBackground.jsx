import React from 'react';
import { motion } from 'framer-motion';

const SectionBackground = ({ 
  colors = [
    { color: 'rgba(97, 218, 251, 0.15)', position: '20% 20%' }, // React blue
    { color: 'rgba(247, 223, 30, 0.15)', position: '80% 80%' }, // JavaScript yellow
    { color: 'rgba(6, 182, 212, 0.1)', position: '50% 50%' }    // Tailwind cyan
  ],
  scale = 1 
}) => {
  const gradientString = colors
    .map(({ color, position }) => `radial-gradient(circle at ${position}, ${color} 0%, transparent 70%)`)
    .join(', ');

  return (
    <motion.div
      className="section-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        background: gradientString,
        transform: `scale(${scale})`,
        transformOrigin: 'center'
      }}
    />
  );
};

export default SectionBackground; 