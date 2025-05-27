import React from 'react';
import ScrollAnimation from './ScrollAnimation';

export default function Footer() {
  const email = "utkarshsinghrajawat120@gmail.com";
  const phone = "+919351571387";

  const handleEmailClick = (e) => {
    e.preventDefault();
    // Create a direct Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <ScrollAnimation>
      <section id="contact" className="contact-section" style={{ marginBottom: '2rem' }}>
        <h2>Contact Me</h2>
        <div className="contact-links">
          <a 
            href={`mailto:${email}`}
            className="contact-link"
            aria-label="Send email to Utkarsh Singh"
            onClick={handleEmailClick}
          >
            <span className="shine"></span>
            {email}
          </a>
          <a 
            href={`tel:${phone}`}
            className="contact-link"
            aria-label="Call Utkarsh Singh"
          >
            <span className="shine"></span>
            {phone}
          </a>
        </div>

        <p className="footer-text">© 2025 My Portfolio. All rights reserved.</p>
      </section>
    </ScrollAnimation>
  );
}
