'use client';
import React, { useState } from 'react';
import TimDropdown from './dropdownTim';
import * as Icon from 'react-feather';
import HandleExport from '@/app/components/HandleExport';

const TimSelect = ({ onSelect, dataListTim }) => {
  const handleTimSelect = (selectedTim) => {
    onSelect(selectedTim);
  };
  return (
    <div className="flex flex-row w-full justify-between items-center">
      <div className="mt-4 w-full">
        <p className="font-sm text-white">Monitoring PPL berdasarkan tim</p>
        <div className="w-max">
          <TimDropdown onSelect={handleTimSelect} data={dataListTim} />
        </div>
      </div>
      <div className="flex items-end mt-10 ">
        <div onClick={HandleExport} className="flex  items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
          <Icon.Download size={18} />
          <button className=" pl-4">Export</button>
        </div>
      </div>
    </div>
  );
};

export default TimSelect;
