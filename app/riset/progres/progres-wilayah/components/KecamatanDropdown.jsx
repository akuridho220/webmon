import React, {useId} from "react";
import Select from "react-select";

const KecamatanDropdown = ({ dataListKec, onSelect }) => {
  const options = [
    { value: "Kecamatan A", label: "Kecamatan A" },
    { value: "Kecamatan B", label: "Kecamatan B" },
    { value: "Kecamatan C", label: "Kecamatan C" },
    { value: "Kecamatan D", label: "Kecamatan D" },
    { value: "Kecamatan E", label: "Kecamatan E" },
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
          options={dataListKec}
          isSearchable={true}
          placeholder="Pilih Kecamatan"
          onChange={handleSelect}
          styles={customStyles}
          instanceId={useId()}
        />
      </div>
    </>
  );
};

export default KecamatanDropdown;
