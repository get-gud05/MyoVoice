import React from 'react';
import TechCard from './TechCard'; // Import the helper component

// Technology Section Component
const TechnologySection = () => {
  const technologies = [
    { title: "React Native", description: "Cross-platform mobile app for control and customization." },
    { title: "PyTorch", description: "For training our advanced emotion detection AI models." },
    { title: "FastAPI", description: "High-performance backend for real-time processing." },
    { title: "Google Cloud", description: "Scalable infrastructure for AI/ML and deployment." },
    { title: "ESP32-S3", description: "Powerful microcontroller for our wearable device." },
    { title: "EMG Sensors", description: "Non-invasive sensors to capture silent speech intent." }
  ];

  return (
    <section id="tech" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Powered by <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 bg-clip-text text-transparent">Cutting-Edge Tech</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-neutral-400">
            We leverage a state-of-the-art technology stack to deliver a seamless and powerful experience.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <TechCard key={index} {...tech} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;