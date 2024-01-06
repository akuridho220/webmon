'use client';
import React, { useState } from 'react';
import Table from './TableSelect';
import * as Icon from 'react-feather';
import SelectCat from './selectCat';

const SelectTabel = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (selectedValue) => {
    setSelectedCategory(selectedValue);
  };
  return (
    <div className="md:w-[85%] w-[95%] mx-auto bg-primary-600 rounded-xl shadow-md overflow-auto">
      <div className="flex w-[95%] mx-auto justify-between items-center">
        <div className="w-[40%] text-xs md:text-base">
          <SelectCat onSelect={handleCategoryChange} />
        </div>
        <div className="">
          <button className="flex md:mt-2 mt-3 items-center justify-center md:text-base text-xs bg-secondary-800 py-2 px-6 w-fit rounded-lg text-white hover:bg-secondary-900">
            <Icon.Download size={18} />
            <p className=" pl-4">Export</p>
          </button>
        </div>
      </div>
      <div className="w-[95%] mx-auto overflow-x-clip">
        <Table selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default SelectTabel;