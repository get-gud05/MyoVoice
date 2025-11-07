import React from 'react';
import SolutionStep from './SolutionStep'; 

const SolutionSection = () => {
  const steps = [
    {
      number: 1,
      title: "Sense Intent",
      description: "The comfortable neckband uses myoelectric sensors to read the subtle muscle signals you create when you silently intend to speak.",
      colorClass: "bg-indigo-500/20 text-indigo-400 border border-indigo-500/50"
    },
    {
      number: 2,
      title: "Translate Emotion",
      description: "Our cloud-based AI analyzes these signals in real-time to decode your emotional intent—happy, questioning, urgent, and more.",
      colorClass: "bg-pink-500/20 text-pink-400 border border-pink-500/50"
    },
    {
      number: 3,
      title: "Synthesize Voice",
      description: "The system generates speech using your own personal, cloned voice, infused with the detected emotion, all in a fraction of a second.",
      colorClass: "bg-amber-500/20 text-amber-400 border border-amber-500/50"
    }
  ];

  return (
    <section id="solution" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 bg-clip-text text-transparent">
            How MyoVoice Works
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-neutral-400">
            A seamless fusion of an intuitive wearable and powerful AI, designed to be your voice.
          </p>
        </div>
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <SolutionStep key={index} {...step} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;