import React, { useId, useState } from 'react';
import Select from 'react-select';

const KecamatanDropdown = ({ dataListKec, onSelect }) => {
  const [wilayah, setWilayah] = useState(null);
  const handleSelect = (selectedOption) => {
    onSelect(selectedOption.value);
    setWilayah(selectedOption);
    //console.log(selectedOption.value);
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
        <Select options={dataListKec} value={wilayah} isSearchable={true} placeholder="Pilih Kecamatan" onChange={handleSelect} styles={customStyles} instanceId={useId()} className="w-full" />
      </div>
    </>
  );
};

export default KecamatanDropdown;
