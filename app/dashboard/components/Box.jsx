import React from 'react';

const Box = ({ angka, text }) => {
  return (
    <div className="bg-primary-800 hover:bg-primary-900 text-white sm:p-4 p-2 text-sm sm:text-base rounded-md font-semibold ">
      <p className="text-center">{angka}</p>
      <p className="text-center">{text}</p>
    </div>
  );
};

export default Box;
