import React, { useRef } from "react";

export default function LipReadingTest() {
  const videoRef = useRef(null);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  const sendFrame = async () => {
    const canvas = document.createElement("canvas");
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);
    const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/jpeg"));

    const formData = new FormData();
    formData.append("frame", blob, "frame.jpg");

    const res = await fetch("http://localhost:5000/predict", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    alert("Model says: " + data.prediction);
  };

  return (
    <div className="text-center p-10">
      <video ref={videoRef} autoPlay playsInline className="border rounded-lg w-96" />
      <div className="mt-4 space-x-4">
        <button onClick={startCamera} className="bg-green-600 px-4 py-2 rounded">
          Start Camera
        </button>
        <button onClick={sendFrame} className="bg-indigo-600 px-4 py-2 rounded">
          Send Frame
        </button>
      </div>
    </div>
  );
}
