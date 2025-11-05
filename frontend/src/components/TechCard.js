import React, { useState } from 'react';

// Tech Card Component
const TechCard = ({ title, description, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="p-6 rounded-2xl bg-neutral-800/50 border backdrop-blur-sm transition-all duration-300 cursor-pointer"
      style={{ 
        transitionDelay: `${delay}ms`,
        borderColor: isHovered ? 'rgba(236, 72, 153, 0.5)' : 'rgba(255, 255, 255, 0.1)',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 10px 25px rgba(236, 72, 153, 0.2)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-400">{description}</p>
    </div>
  );
};

export default TechCard;