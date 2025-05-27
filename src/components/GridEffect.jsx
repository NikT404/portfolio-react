import React, { useEffect, useCallback, useRef } from 'react';
import './GridEffect.css';

const GridEffect = () => {
  const containerRef = useRef(null);
  const isMovingRef = useRef(false);
  const rafRef = useRef(null);
  const lastScrollY = useRef(0);
  const lastDeviceType = useRef('desktop');

  // Debounce function to limit update frequency
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  // Throttle function for scroll events
  const throttle = (func, limit) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  // Detect device type
  const getDeviceType = useCallback(() => {
    const width = window.innerWidth;
    if (width <= 480) return 'mobile';
    if (width <= 768) return 'tablet';
    return 'desktop';
  }, []);

  // Update grid position with performance optimizations
  const updateGridPosition = useCallback((scrollY) => {
    if (!containerRef.current) return;

    const deviceType = getDeviceType();
    const speed = deviceType === 'mobile' ? 0.2 : 
                 deviceType === 'tablet' ? 0.3 : 0.4;
    
    const offset = scrollY * speed;
    containerRef.current.style.setProperty('--grid-offset', `${offset}px`);

    // Add/remove moving class based on scroll
    const isMoving = Math.abs(scrollY - lastScrollY.current) > 5;
    if (isMoving !== isMovingRef.current) {
      isMovingRef.current = isMoving;
      containerRef.current.classList.toggle('grid-moving', isMoving);
    }

    lastScrollY.current = scrollY;
    lastDeviceType.current = deviceType;
  }, [getDeviceType]);

  // Optimized scroll handler
  const handleScroll = useCallback(
    throttle(() => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        updateGridPosition(window.scrollY);
      });
    }, 16), // ~60fps
    [updateGridPosition]
  );

  // Optimized resize handler
  const handleResize = useCallback(
    debounce(() => {
      const newDeviceType = getDeviceType();
      if (newDeviceType !== lastDeviceType.current) {
        updateGridPosition(window.scrollY);
      }
    }, 250),
    [getDeviceType, updateGridPosition]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initial setup
    updateGridPosition(window.scrollY);
    container.classList.add('grid-moving');

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll, handleResize, updateGridPosition]);

  return (
    <div 
      ref={containerRef}
      className="app-container"
      role="presentation"
      aria-hidden="true"
    />
  );
};

export default React.memo(GridEffect); 