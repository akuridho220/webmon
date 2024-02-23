import React, { useId, useState } from 'react';
import Select from 'react-select';

const KabupatenDropdown = ({ dataListKab, onSelect }) => {
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
      minWidth: '20rem',
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
      <div className="rounded-xl bg-[#d93f57] bg-opacity-50" style={{ marginRight: '2rem' }}>
        <Select options={dataListKab} isSearchable={true} value={wilayah} placeholder="Pilih Kabupaten" onChange={handleSelect} styles={customStyles} instanceId={useId()} />
      </div>
    </>
  );
};

export default KabupatenDropdown;
