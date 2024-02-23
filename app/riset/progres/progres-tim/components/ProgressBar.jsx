'use client';
import { useEffect, useState } from 'react';

const ProgressBar = ({ detail, done, max }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let dataProgress;
    if (max === 0) {
      dataProgress = 0;
    } else {
      dataProgress = Math.round((done / max) * 100);
    }
    setProgress(dataProgress);
  }, [done, max]);
  

  let color1, color2, colorText;

  if (progress < 50) {
    color1 = 'bg-red-200';
    color2 = 'bg-red-500';
    colorText = 'text-red-600';
  }
  if (progress >= 50 && progress < 75) {
    color1 = 'bg-yellow-100';
    color2 = 'bg-yellow-500';
    colorText = 'text-yellow-600';
  }
  if (progress >= 75) {
    color1 = 'bg-teal-200';
    color2 = 'bg-teal-500';
    colorText = 'text-teal-600';
  }

  return (
    <div className="pt-1">
      {detail && ( // Kondisional rendering berdasarkan nilai detail
        <div id="detail" className="flex mb-2 items-center justify-between">
          <div>
            <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${colorText} ${color1}`}>
              {done} Selesai dari {max} Sampel
            </span>
          </div>
          <div className="text-right">
            <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${colorText} ${color1}`}>{`${progress}%`}</span>
          </div>
        </div>
      )}
      <div className="flex h-2 mb-4 overflow-hidden bg-red-100">
        <div style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${color2}`}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
