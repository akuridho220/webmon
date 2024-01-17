'use client';
import React, { useState } from 'react';
import Table from './TableSelect';
import * as Icon from 'react-feather';
import SelectCat from './selectCat';

const SelectTabel = ({ dataBs, dataKec, dataDesa, dataKab }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (selectedValue) => {
    setSelectedCategory(selectedValue);
  };
  return (
    <div className="md:w-[85%] w-[95%] mx-auto bg-primary-600 rounded-xl shadow-md overflow-auto mt-8">
      <div className="flex w-[95%] mx-auto justify-between items-center">
        <div className="md:w-[40%] md:flex my-4 md:my-2 justify-between h-fit items-center text-xs md:text-base">
          <p className="text-white">Filter: </p>
          <div className="md:w-4/5 w-full">
            <SelectCat onSelect={handleCategoryChange} />
          </div>
        </div>
        <div className="">
          <button className="flex md:mt-2 mt-6 items-center justify-center md:text-base text-xs bg-secondary-800 py-2 px-6 w-fit rounded-lg text-white hover:bg-secondary-900">
            <Icon.Download size={18} />
            <p className=" pl-4">Export</p>
          </button>
        </div>
      </div>
      <div className="w-[95%] mx-auto overflow-x-clip">
        <Table selectedCategory={selectedCategory} dataBs={dataBs} dataKec={dataKec} dataDesa={dataDesa} dataKab={dataKab} />
      </div>
    </div>
  );
};

export default SelectTabel;
