"use client";
import React from "react";
import WilayahDropdown from "./WilayahDropdown";

const WilayahSelect = ({ onSelect }) => {
  const handleWilayahSelect = (selectedTim) => {};
  return (
          <WilayahDropdown onSelect={handleWilayahSelect} />
  );
};

export default WilayahSelect;
