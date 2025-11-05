import React from 'react';

// Voice Card Component
const VoiceCard = ({ id, title, description, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-6 rounded-xl text-center cursor-pointer transition-all duration-300 bg-neutral-800/50 border ${
        isActive 
          ? 'border-indigo-500 shadow-lg shadow-indigo-500/50' 
          : 'border-white/10 hover:border-pink-500/50 hover:-translate-y-1'
      }`}
    >
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-sm text-neutral-400 mt-1">{description}</p>
    </div>
  );
};

export default VoiceCard;