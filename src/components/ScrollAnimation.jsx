import { useEffect, useRef } from 'react';

export default function ScrollAnimation({ children }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once visible, we can stop observing
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px' // Start animation slightly before the element comes into view
      }
    );

    if (elementRef.current) {
      // Add a small delay before starting to observe to ensure proper initialization
      setTimeout(() => {
        observer.observe(elementRef.current);
      }, 100);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className="animate-on-scroll visible">
      {children}
    </div>
  );
} 