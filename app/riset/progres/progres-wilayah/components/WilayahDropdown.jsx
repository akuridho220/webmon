import React from "react";
import Select from "react-select";

const WilayahDropdown = ({ onSelect }) => {
  const options = [
    { value: "Wilayah A", label: "Wilayah A" },
    { value: "Wilayah B", label: "Wilayah B" },
    { value: "Wilayah C", label: "Wilayah C" },
    { value: "Wilayah D", label: "Wilayah D" },
    { value: "Wilayah E", label: "Wilayah E" },
    { value: "Wilayah F", label: "Wilayah F" },
    { value: "Wilayah G", label: "Wilayah G" },
    { value: "Wilayah H", label: "Wilayah H" },
    { value: "Wilayah I", label: "Wilayah I" },
    { value: "Wilayah J", label: "Wilayah J" },
    { value: "Wilayah K", label: "Wilayah K" },
    { value: "Wilayah L", label: "Wilayah L" },
  ];

  const handleSelect = (selectedOption) => {
    onSelect(selectedOption.value);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "0.5rem",
      color: "#000",
      minWidth: "20rem",
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
      <div className="rounded-xl bg-[#d93f57] bg-opacity-50" style={{ marginRight: "2rem" }}>
        <Select
          options={options}
          isSearchable={true}
          placeholder="Semua Wilayah"
          onChange={handleSelect}
          styles={customStyles}
        />
      </div>
    </>
  );
};

export default WilayahDropdown;
