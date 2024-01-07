"use client";
import React from "react";
import TimDropdown from "./dropdownTim";
import * as Icon from "react-feather";

const TimSelect = ({ onSelect }) => {
  const handleTimSelect = (selectedTim) => {};
  return (
    <div className="flex flex-row w-full justify-between items-center">
      <div className="mt-4">
        <p className="font-sm ">Monitoring PPL berdasarkan tim</p>
        <div className="">
          <TimDropdown onSelect={handleTimSelect} />
        </div>
      </div>
      <div className="flex items-end mt-10">
            <div className="flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
              <Icon.Download size={18} />
              <button className=" pl-4">Export</button>
            </div>
      </div>
    </div>
  );
};

export default TimSelect;
