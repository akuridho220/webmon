import React, {useId} from "react";
import Select from "react-select";

const KelurahanDropdown = ({ dataListDesa, onSelect }) => {
  const options = [
    { value: "Kelurahan/Desa A", label: "Kelurahan/Desa A" },
    { value: "Kelurahan/Desa B", label: "Kelurahan/Desa B" },
    { value: "Kelurahan/Desa C", label: "Kelurahan/Desa C" },
    { value: "Kelurahan/Desa D", label: "Kelurahan/Desa D" },
    { value: "Kelurahan/Desa E", label: "Kelurahan/Desa E" },
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
          options={dataListDesa}
          isSearchable={true}
          placeholder="Pilih Kelurahan/Desa"
          onChange={handleSelect}
          styles={customStyles}
          instanceId={useId()}
        />
      </div>
    </>
  );
};

export default KelurahanDropdown;
