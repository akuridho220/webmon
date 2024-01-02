import React from 'react';
import SelectDropDown from './dropdownSelect';

const SelectCat = ({ onSelect }) => {
  const handleSelectCat = (selectedOption) => {
    onSelect(selectedOption);
  };
  return (
    <>
      <div className="mt-4">
        <div className="w-">
          <SelectDropDown onSelect={handleSelectCat} />
        </div>
      </div>
    </>
  );
};

export default SelectCat;
