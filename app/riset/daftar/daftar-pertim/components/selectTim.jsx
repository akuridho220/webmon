"use client";
import React from "react";
import TimDropdown from "./dropdownTim";

const TimSelect = ({ onSelect }) => {
  const handleTimSelect = (selectedTim) => {};
  return (
    <>
      <div className="mt-4">
        <p className="font-small">Monitoring PPL berdasarkan tim</p>
        <div className="w-[40%]">
          <TimDropdown onSelect={handleTimSelect} />
        </div>
      </div>
    </>
  );
};

export default TimSelect;
