import React from 'react';
import Select from 'react-select';

const WilayahDropdown = ({ onSelect }) => {
  const options = [
    { value: 'Blok Sensus', label: 'Blok Sensus' },
    { value: 'Desa/Kelurahan/Banjar', label: 'Desa/Kelurahan/Banjar' },
    { value: 'Kecamatan', label: 'Kecamatan' },
    { value: 'Kabupaten/Kota', label: 'Kabupaten/Kota' },
    { value: 'Keseluruhan', label: 'Keseluruhan' },
  ];

  const handleSelect = (selectedOption) => {
    onSelect(selectedOption.value);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '0.5rem',
      color: '#000',
    }),
    input: (provided) => ({
      ...provided,
      color: '#000',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'rgba(217, 63, 87, 1)' : 'transparent',
      borderRadius: '0.3rem',
      color: state.isSelected ? 'white' : 'black',
    }),
  };

  return (
    <>
      <div className="w-full rounded-xl bg-[#d93f57] bg-opacity-50">
        <Select className="w-full" options={options} isSearchable={true} placeholder="Pilih Filter" onChange={handleSelect} styles={customStyles} />
      </div>
    </>
  );
};

export default WilayahDropdown;
