import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import './Footer.css';

const Footer = () => {
  return (
    <ScrollAnimation>
      <footer className="footer">
        <p className="copyright">
          © {new Date().getFullYear()} Utkarsh Singh. All rights reserved.
        </p>
      </footer>
    </ScrollAnimation>
  );
};

export default Footer; 