import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ForYouSection = () => {
  const items = [
    "Are tired of being stuck in a loop of surface-level advice, buying course after course... book after book, and still not making the progress you want.",
    "Can’t find the “niche” to commit to and you constantly feel that no matter what you decide to make content on, you will be closing the door on every other interest and passion you have.",
    "Are tired of always learning new information and listening to others tell you what you have to do but not having a step-by-step plan and the drive to act on your goals.",
  ];

  return (
    <div className="bg-black text-white p-8">
      <h2 className="text-3xl font-bold mb-6">
        THIS IS <span className="text-green-500">FOR YOU</span> IF YOU...
      </h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <FaCheckCircle className="text-green-500 text-xl mt-1" />
            <p className="text-lg leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForYouSection;