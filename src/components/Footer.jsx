import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import './footer.css';  // Make sure this CSS file exists

const Footer = () => {
  const email = "utkarshsinghrajawat120@gmail.com";
  const phone = "+919351571387";

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.open(`mailto:${email}`, '_blank');
  };

  return (
    <ScrollAnimation>
      <section id="contact" className="contact-section">
        <h2>Get in Touch</h2>
        
        <div className="contact-links">
          <a 
            href={`mailto:${email}`}
            onClick={handleEmailClick}
            className="contact-link email"
          >
            <i className="icon"></i>
            {email}
          </a>
          
          <a 
            href={`tel:${phone}`}
            className="contact-link phone"
          >
            <i className="icon"></i>
            {phone}
          </a>
        </div>

        <p className="copyright">© 2025 My Portfolio. All rights reserved.</p>
      </section>
    </ScrollAnimation>
  );
};

export default Footer;
