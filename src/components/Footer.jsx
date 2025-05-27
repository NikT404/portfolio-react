import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import './Footer.css';

const Footer = () => {
  const email = "utkarshsinghrajawat12@gmail.com";
  const phone = "+919351571387";

  return (
    <ScrollAnimation>
      <section id="contact" className="contact-section">
        <h2>Get in Touch</h2>
        <div className="contact-links">
          <a 
            href={`mailto:${email}`}
            className="contact-link email"
            target="_blank"
            rel="noopener noreferrer"
          >
            {email}
          </a>
          <a 
            href={`tel:${phone}`}
            className="contact-link phone"
          >
            {phone}
          </a>
        </div>
        <p className="copyright">© 2025 My Portfolio. All rights reserved.</p>
      </section>
    </ScrollAnimation>
  );
};

export default Footer; 