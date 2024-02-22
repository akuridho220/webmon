'use client';
import React, { useState } from 'react';

const ButtonTim = ({ onSelect }) => {
  const [activeButton, setActiveButton] = useState('listing');

  const handleSelect = (value) => {
    onSelect(value);
    setActiveButton(value);
  };

  return (
    <div className="flex h-8 mt-10 font-semibold">
      <button
        className={`w-1/2 p-2 flex items-center justify-center text-white ${activeButton === 'listing' ? 'bg-accent-800' : 'bg-accent-700/60'} hover:bg-accent-900 focus:outline-none rounded-l-xl`}
        onClick={() => handleSelect('listing')}
      >
        Listing
      </button>
      <button
        className={`w-1/2 p-2 flex items-center justify-center text-white ${activeButton === 'sampel' ? 'bg-accent-800' : 'bg-accent-700/60'} hover:bg-accent-900 focus:outline-none rounded-r-xl`}
        onClick={() => handleSelect('sampel')}
      >
        Sampel
      </button>
    </div>
  );
};

export default ButtonTim;
