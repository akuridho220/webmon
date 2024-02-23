"use client";
import React from "react";
// import TimDropdown from "@/app/riset/daftar/daftar-pertim/components/dropdownTim";
import TimDropdown from "./TimDropdown";
import * as Icon from 'react-feather';
import HandleExport from '@/app/components/HandleExport';

const TimSelect = ({ onSelect, dataTim }) => {
  const handleTimSelect = (selectedTim) => {
    onSelect(selectedTim);
  };
  //console.log(dataTim);
  const Export = () => {
    HandleExport();
  };
  return (
    //<TimDropdown onSelect={handleTimSelect} data={dataTim}/>
    // <div className="mt-4 w-full">
    //     <p className="font-sm text-white">Monitoring PPL berdasarkan tim</p>
    //     <div className="w-full md:w-max">
    //       <TimDropdown onSelect={handleTimSelect} data={dataTim} />
    //     </div>
    // </div>
    <div className="md:flex md:flex-row block w-full justify-between items-center">
      <div className="mt-4 w-full">
        <p className="font-sm text-white">Monitoring PPL berdasarkan tim</p>
        <div className="w-full md:w-max">
          <TimDropdown onSelect={handleTimSelect} data={dataTim} />
        </div>
      </div>
      <div className="flex justify-end items-end md:mt-10 mt-4 w-full ">
        <div onClick={Export} className="flex w-full md:w-fit items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
          <Icon.Download size={18} />
          <button className=" pl-4">Export</button>
        </div>
      </div>
    </div>
  );
};

export default TimSelect;
