import React from 'react';

const Box = ({ angka, text }) => {
  return (
    <div className="bg-red-400 text-white p-4 rounded-md font-semibold ">
      <p>{angka}</p>
      <p>{text}</p>
    </div>
  );
};

export default Box;
