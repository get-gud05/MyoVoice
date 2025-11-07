import React, { useRef, useState } from "react";
import HeaderMinimal from "../components/HeaderMinimal";

export default function LipReadingTest() {
  const videoRef = useRef(null);
  const streamRef = useRef(null); 
  const [cameraOn, setCameraOn] = useState(false);

  const toggleCamera = async () => {
    if (!cameraOn) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setCameraOn(true);
      } catch (err) {
        console.error("Error starting camera:", err);
        alert("Unable to access camera.");
      }
    } else {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        videoRef.current.srcObject = null;
        streamRef.current = null;
      }
      setCameraOn(false);
    }
  };

  const sendFrames = async () => {
    if (!cameraOn) {
      alert("❌ Please start the camera first!");
      return;
    }

    const canvas = document.createElement("canvas");
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");

    const formData = new FormData();

    for (let i = 0; i < 75; i++) {
      ctx.drawImage(video, 0, 0);
      const blob = await new Promise((resolve) =>
        canvas.toBlob(resolve, "image/jpeg")
      );
      formData.append(`frame${i}`, blob, `frame${i}.jpg`);
      await new Promise((r) => setTimeout(r, 50));
    }

    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      alert("Model says: " + (data.prediction || data.error));
    } catch (err) {
      console.error(err);
      alert("Error sending frames: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <HeaderMinimal />

      <main className="pt-32 flex flex-col items-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center">
          <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-500 bg-clip-text text-transparent">
            Visual Speech Recognition
          </span>
        </h2>

        <p className="mt-4 text-neutral-400 max-w-xl text-center">
          Activate your webcam and send 75 frames to test your MyoVoice lip-reading model in real time.
        </p>

        <div className="mt-12 bg-neutral-800/50 border border-white/10 rounded-2xl p-8 flex flex-col items-center space-y-6 shadow-xl">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="border border-white/10 rounded-lg w-96 bg-black/40"
          />

          <div className="space-x-4">
            <button
              onClick={toggleCamera}
              className={`text-white font-semibold py-2 px-6 rounded-full shadow-md transition-transform ${
                cameraOn
                  ? "bg-gradient-to-r from-red-500 to-orange-500 hover:scale-105"
                  : "bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105"
              }`}
            >
              {cameraOn ? "Stop Camera" : "Start Camera"}
            </button>

            <button
              onClick={sendFrames}
              className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              Send Frames
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
