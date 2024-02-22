import React from "react";
import Select from "react-select";

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};

const getListKabupaten = async () => {
  const data = await fetchData(`${apiURL}riset/daftar/sampel/kab`);
  const newData = data.map((item) => {
    return {
      ...item,
      label: `Kabupaten ${item.nama_kab}`,
      value: `${item.nama_kab}`,
    };
  });
  return newData;
};

const KabupatenDropdown = ({ onSelect }) => {
  const dataListKab = getListKabupaten();
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
