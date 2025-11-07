import React from 'react';

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 md:py-32 bg-neutral-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
          The Silence of <span className="text-neutral-500">Robotic Speech</span>
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-neutral-400">
          Current assistive devices for laryngectomy patients produce monotonous, robotic speech, stripping away the user's identity and emotional nuance. This leads to frustrating interactions and deep social isolation. Communication is more than just words; it's about connection.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;