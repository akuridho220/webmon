"use client";
import React from "react";
import TimDropdown from "./TimDropdown";

const TimSelect = ({ onSelect, dataTim }) => {
  const handleTimSelect = (selectedTim) => {
    onSelect(selectedTim);
  };
  return (
    <TimDropdown onSelect={handleTimSelect} data={dataTim} />
  );
};

export default TimSelect;
