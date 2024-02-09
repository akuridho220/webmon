"use client";
import React from "react";
import TimDropdown from "./TimDropdown";

const TimSelect = ({ onSelect }) => {
  const handleTimSelect = (selectedTim) => {};
  return (
    <TimDropdown onSelect={handleTimSelect} />
  );
};

export default TimSelect;
