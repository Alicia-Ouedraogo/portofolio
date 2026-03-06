import { useEffect, useRef } from "react";

const GlitchBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let animationFrameId: number;

    const colors = ["#00ffff", "#8a2be2", "#ff00ff"]; // cyan/violet/magenta

    const draw = () => {
      if (!ctx) return;

      // Fond sombre semi-transparent
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, width, height);

      // Pixels scintillants
      for (let i = 0; i < 500; i++) { // densité augmentée
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2;
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.globalAlpha = Math.random();
        ctx.fillRect(x, y, size, size);
      }

      // Bandes glitch horizontales
      for (let i = 0; i < 6; i++) {
        const y = Math.random() * height;
        const h = 2 + Math.random() * 6;
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.globalAlpha = 0.6 + Math.random() * 0.4;
        ctx.fillRect(0, y, width, h);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
    />
  );
};

export default GlitchBackground;