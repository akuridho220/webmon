import React, {useId} from "react";
import Select from "react-select";

const TimDropdown = ({ onSelect, data }) => {
  const options = [
    { value: "Tim 101", label: "Tim 101" },
    { value: "Tim 102", label: "Tim 102" },
    { value: "Tim 103", label: "Tim 103" },
    { value: "Tim 104", label: "Tim 104" },
    { value: "Tim 105", label: "Tim 105" },
    { value: "Tim 106", label: "Tim 106" },
    { value: "Tim 107", label: "Tim 107" },
    { value: "Tim 108", label: "Tim 108" },
    { value: "Tim 109", label: "Tim 109" },
    { value: "Tim 110", label: "Tim 110" },
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
      <div className="rounded-xl bg-[#d93f57] bg-opacity-50 mr-8" >
        <Select
          options={data}
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
