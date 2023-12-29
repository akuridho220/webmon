import * as Icon from 'react-feather';
import React from 'react';

const MulaiSelesai = ({ text, tanggal, waDom, wa }) => {
  return (
    <div className={`${waDom} rounded-md shadow-md text-white flex text-lg font-semibold w-full]`}>
      <div className="w-1/5 py-2">
        <div className="flex items-center justify-start space-x-2 pl-4">
          <Icon.Calendar className="text-white" />
          <p>{text}</p>
        </div>
      </div>
      <div className={`w-4/5 ${wa} py-2`}>
        <div className="flex items-center space-x-2 pl-4">
          <p>{tanggal}</p>
        </div>
      </div>
    </div>
  );
};

export default MulaiSelesai;
