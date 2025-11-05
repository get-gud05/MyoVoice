import React, { useEffect, useRef } from 'react';

// Sound Wave Canvas Component
const SoundWave = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let frame = 0;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize particles on resize
      particles = [];
      const particleCount = Math.min(200, Math.floor(canvas.width / 10));
      const particleDistance = canvas.width / particleCount;
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: i * particleDistance,
          y: canvas.height / 2,
          originalY: canvas.height / 2,
        });
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, '#4f46e5');
      gradient.addColorStop(0.5, '#ec4899');
      gradient.addColorStop(1, '#f59e0b');
      ctx.strokeStyle = gradient;

      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const wave1 = Math.sin(frame * 0.05 + i * 0.1) * 15;
        const wave2 = Math.sin(frame * 0.08 + i * 0.15) * 20;
        const wave3 = Math.cos(frame * 0.03 + i * 0.05) * 25;
        p.y = p.originalY + wave1 + wave2 + wave3;
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.lineWidth = 3;
      ctx.stroke();

      frame++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{ zIndex: 0 }} />;
};

export default SoundWave;