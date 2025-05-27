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
            aria-label="Send me an email"
          >
            <svg 
              className="icon" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            <span>{email}</span>
          </a>
          <a 
            href={`tel:${phone}`}
            className="contact-link phone"
            aria-label="Call me"
          >
            <svg 
              className="icon" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>{phone}</span>
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Utkarsh Singh. All rights reserved.
        </p>
      </section>
    </ScrollAnimation>
  );
};

export default Footer; 