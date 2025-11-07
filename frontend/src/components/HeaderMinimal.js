import React from "react";

const HeaderMinimal = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tighter cursor-pointer">
          Myo
          <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 bg-clip-text text-transparent">
            Voice
          </span>
        </h1>

        <div className="text-sm text-neutral-400">
          Lip Reading Model
        </div>
      </div>
    </header>
  );
};

export default HeaderMinimal;
