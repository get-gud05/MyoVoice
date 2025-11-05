import React from 'react';

// Solution Step Component
const SolutionStep = ({ number, title, description, colorClass, delay = 0 }) => {
  return (
    <div className="text-center" style={{ transitionDelay: `${delay}ms` }}>
      <div className={`p-6 mx-auto w-16 h-16 rounded-full ${colorClass} flex items-center justify-center text-2xl font-bold`}>
        {number}
      </div>
      <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-400">{description}</p>
    </div>
  );
};

export default SolutionStep;