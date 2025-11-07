import React from "react";
import MuteLipReading from "../components/MuteLipReading";

export default function MutePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Mute Page - Lip Reading Test</h1>
      <MuteLipReading />
    </div>
  );
}