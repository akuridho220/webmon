import React from 'react';
import SelectDropDown from './DropdownSelect';

const SelectCat = ({ onSelect }) => {
    const handleSelectCat = (selectedOption) => {
        onSelect(selectedOption);
    };
    return (
        <>
        <div className="pl-2">
            <div className="w-auto">
                <SelectDropDown onSelect={handleSelectCat} />
            </div>
        </div>
        </>
    );
};

export default SelectCat;
