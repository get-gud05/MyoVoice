import React, { useState } from 'react';

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-neutral-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Join the <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 bg-clip-text text-transparent">Future of Communication</span>
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-neutral-400">
          We are seeking partners, researchers, and early adopters to help us bring MyoVoice to the world. Reach out to learn more about our mission.
        </p>
        
        <div className="mt-12 max-w-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-4 w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            onClick={handleSubmit}
            className="mt-6 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform w-full md:w-auto"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;