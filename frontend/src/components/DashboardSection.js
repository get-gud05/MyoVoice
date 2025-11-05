import React, { useState } from 'react';
import VoiceCard from './VoiceCard'; // Import the helper component

// Dashboard Section Component
const DashboardSection = () => {
  const [selectedVoice, setSelectedVoice] = useState('male');

  const handleVoiceSelect = (voice) => {
    setSelectedVoice(voice);
    console.log(`${voice} voice selected. Syncing with device...`);
  };

  return (
    <section id="dashboard" className="py-20 md:py-32 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Your Personal <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 bg-clip-text text-transparent">Voice Hub</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-neutral-400">
            Welcome, User! This is your control center. Your preferences are instantly synced with your MyoVoice wearable device.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-neutral-800/50 border border-white/10 rounded-2xl p-8">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h3 className="text-2xl font-semibold">Device Control</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-green-400">MyoVoice Wearable: Connected</span>
            </div>
          </div>
          <p className="mt-2 text-neutral-400">
            Select your preferred voice type below. The change will be applied to your device in real-time.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <VoiceCard
              id="male"
              title="Male Voice"
              description="A deep, resonant voice profile."
              isActive={selectedVoice === 'male'}
              onClick={() => handleVoiceSelect('male')}
            />
            <VoiceCard
              id="female"
              title="Female Voice"
              description="A clear, bright voice profile."
              isActive={selectedVoice === 'female'}
              onClick={() => handleVoiceSelect('female')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;