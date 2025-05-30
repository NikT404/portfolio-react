import React, { useRef } from 'react';
import './GridEffect.css';

const GridEffect = () => {
  const containerRef = useRef(null);

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