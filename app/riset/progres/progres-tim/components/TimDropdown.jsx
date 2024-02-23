"use client";
import React, { useId, useState } from 'react';
import Select from 'react-select';


const options = [
  { value: "Tim A", label: "Tim A" },
  { value: "Tim B", label: "Tim B" },
  { value: "Tim C", label: "Tim C" },
  { value: "Tim D", label: "Tim D" },
  { value: "Tim E", label: "Tim E" },
];
const TimDropdown = ({ onSelect, data }) => {
  const [selectedPetugas, setSelectedPetugas] = useState(null);

  const handleSelect = (selectedOption) => {
    onSelect(selectedOption.id_tim);
    setSelectedPetugas(selectedOption);
  };

  // const handleSelect = (selectedOption) => {
  //   onSelect(selectedOption.value);
  // };

  const customStyles = {
    control: (provided) => ({
        ...provided,
        borderRadius: "0.5rem",
        color: "#000",
        minWidth: "15rem",
    }),
    input: (provided) => ({
        ...provided,
        color: "#000",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected
            ? "rgba(217, 63, 87, 1)"
            : "transparent",
        borderRadius: "0.3rem",
        color: state.isSelected ? "white" : "black",
    }),
  };

  return (
    <>
      <div className="rounded-xl bg-[#d93f57] bg-opacity-50 text-sm">
        <Select
          options={data}
          value={selectedPetugas}
          isSearchable={true}
          placeholder="Pilih Berdasarkan Tim"
          onChange={handleSelect}
          styles={customStyles}
          instanceId={useId()}
        />
      </div>
    </>
  );
};

export default TimDropdown;
