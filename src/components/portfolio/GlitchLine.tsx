import React from "react";

const GlitchLine: React.FC = () => (
  <div className="absolute top-0 left-0 w-full h-1 overflow-hidden pointer-events-none z-50">
    <div className="w-[200%] h-1 bg-glitch-gradient animate-glitch" />
  </div>
);

export default GlitchLine;