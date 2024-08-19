import React from 'react';

const MarqueeText = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="inline-block animate-marquee"
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          animation: 'marquee 30s linear infinite',
        }}
      >
        <span className="text-4xl font-bold text-black mr-8">GONZALO PEDROSA</span>
        <span className="text-4xl font-bold text-black mr-8">GONZALO PEDROSA</span>
        <span className="text-4xl font-bold text-black mr-8">GONZALO PEDROSA</span>
        <span className="text-4xl font-bold text-black mr-8">GONZALO PEDROSA</span>
        <span className="text-4xl font-bold text-black mr-8">GONZALO PEDROSA</span>
        <span className="text-4xl font-bold text-black mr-8">GONZALO PEDROSA</span>

      </div>
    </div>
  );
};

export default MarqueeText;