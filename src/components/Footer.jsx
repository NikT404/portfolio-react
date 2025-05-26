import React, { useState, useRef } from 'react';
import ScrollAnimation from './ScrollAnimation';
import emailjs from '@emailjs/browser';

export default function Footer() {
  const email = "utkarshsinghrajawat120@gmail.com";
  const phone = "+919351571387";
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    loading: false
  });

  const handleEmailClick = (e) => {
    e.preventDefault();
    // Create a direct Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, error: false, message: '', loading: true });

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill in all fields',
        loading: false
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please enter a valid email address',
        loading: false
      });
      return;
    }

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Utkarsh Singh',
        reply_to: formData.email,
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Message sent successfully! I will get back to you soon.',
        loading: false
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Failed to send message. Please try again later.',
        loading: false
      });
    }
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

        <div className="contact-form-container">
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="form-input"
                required
                disabled={formStatus.loading}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="form-input"
                required
                disabled={formStatus.loading}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="form-textarea"
                required
                rows="5"
                disabled={formStatus.loading}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`submit-button ${formStatus.loading ? 'loading' : ''}`}
              disabled={formStatus.loading}
            >
              {formStatus.loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {formStatus.submitted && (
            <div className={`form-status ${formStatus.error ? 'error' : 'success'}`}>
              {formStatus.message}
            </div>
          )}
        </div>

        <p className="footer-text">© 2025 My Portfolio. All rights reserved.</p>
      </section>
    </ScrollAnimation>
  );
}
