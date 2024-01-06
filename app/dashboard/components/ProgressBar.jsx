import React, { useState, useEffect } from 'react';

const ProgressBar = ({ percentage, color }) => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <div className={`progress-bar relative w-full h-full bg-white text-white rounded-md overflow-hidden ${animationStarted ? 'animate-slide' : ''}`}>
      <div className={`${color} h-full`} style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;
