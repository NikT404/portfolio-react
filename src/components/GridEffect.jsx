import React, { useEffect } from 'react';

const GridEffect = () => {
  useEffect(() => {
    let scrollTimeout;
    const appContainer = document.querySelector('.app-container');
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateGridPosition = () => {
      if (!appContainer) return;

      // Calculate the grid offset based on scroll position
      const scrollY = window.scrollY;
      const gridOffset = scrollY * 0.5; // Adjust this value to control movement speed
      
      // Update the CSS variable for grid offset
      appContainer.style.setProperty('--grid-offset', `${gridOffset}px`);
      
      // Add moving class when scrolling
      appContainer.classList.add('grid-moving');
      
      // Remove moving class when scroll stops
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        appContainer.classList.remove('grid-moving');
      }, 150);

      ticking = false;
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateGridPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial position
    updateGridPosition();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return null;
};

export default GridEffect; 