import React from "react";
import Select from "react-select";

const TimDropdown = ({ onSelect }) => {
  const options = [
    { value: "Tim 101", label: "Agus (222111999 / Tim 101)" },
    { value: "Tim 102", label: "Ridho (222111998 / Tim 102)" },
    { value: "Tim 103", label: "Aliefta (222111997 / Tim 103)" },
    { value: "Tim 104", label: "Sonya (222111996 / Tim 104)" },
    { value: "Tim 105", label: "Pandu (222111995 / Tim 105)" },
    { value: "Tim 106", label: "Aliefta (222111994 / Tim 106)" },
    { value: "Tim 107", label: "Yudha (222111993 / Tim 107)" },
    { value: "Tim 108", label: "Irsyad (222111992 / Tim 108)" },
    { value: "Tim 109", label: "Diva (222111991 / Tim 109)" },
    { value: "Tim 110", label: "Duta (222111990 / Tim 110)" },
  ];

  const handleSelect = (selectedOption) => {
    onSelect(selectedOption.value);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "0.5rem",
      color: "#000",
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
          options={options}
          isSearchable={true}
          placeholder="Pilih Berdasarkan Tim atau Nama Mahasiswa"
          onChange={handleSelect}
          styles={customStyles}
        />
      </div>
    </>
  );
};

export default TimDropdown;
