import React from "react";
import Select from "react-select";

const KabupatenDropdown = ({ onSelect }) => {
  const options = [
    { value: "Kabupaten A", label: "Kabupaten A" },
    { value: "Kabupaten B", label: "Kabupaten B" },
    { value: "Kabupaten C", label: "Kabupaten C" },
    { value: "Kabupaten D", label: "Kabupaten D" },
    { value: "Kabupaten E", label: "Kabupaten E" },
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
          placeholder="Pilih Kabupaten"
          onChange={handleSelect}
          styles={customStyles}
        />
      </div>
    </>
  );
};

export default KabupatenDropdown;
