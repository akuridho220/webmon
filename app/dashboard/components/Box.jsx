import React, { use } from 'react';

const Box = ({ angka, text }) => {
  return (
    <div className="bg-red-400 hover:bg-red-500 text-white sm:p-4 p-1 text-sm sm:text-base rounded-md font-semibold ">
      <p className="text-center">{angka}</p>
      <p className="text-center">{text}</p>
    </div>
  );
};

export default Box;
