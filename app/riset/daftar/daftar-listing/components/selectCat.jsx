import React from 'react';
import SelectDropDown from './dropdownSelect';

const SelectCat = ({ onSelect }) => {
  const handleSelectCat = (selectedOption) => {
    onSelect(selectedOption);
  };
  return (
    <>
      <div className="">
        <div className="">
          <SelectDropDown onSelect={handleSelectCat} />
        </div>
      </div>
    </>
  );
};

export default SelectCat;
