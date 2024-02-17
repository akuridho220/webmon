'use client';
import { useState } from 'react';
import * as Icon from 'react-feather';
import SelectCat from './SelectCat';
import Table from './TableSelect';
import HandleExport from '@/app/components/HandleExport';

const SelectTabel = ({ dataBs, dataKec, dataKab, dataDesa }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (selectedValue) => {
    setSelectedCategory(selectedValue);
  };
  return (
    <div className="md:w-[90%] w-[95%] mx-auto bg-primary-900/95 rounded-xl shadow-lg overflow-auto mt-8 pt-2">
      <div className="flex w-[95%] mx-auto justify-between items-center">
        <div className="md:w-[40%] md:flex my-4 md:my-2 justify-between h-fit items-center text-xs md:text-base">
          <p className="text-white">Filter :</p>
          <div className="md:w-4/5 w-full">
            <SelectCat onSelect={handleCategoryChange} />
          </div>
        </div>
        <div onClick={HandleExport} className="flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
          <Icon.Download size={18} />
          <button className=" pl-4">Export</button>
        </div>
      </div>
      {/* Set jenis tabel yg ditampilin */}
      <div className="w-[95%] mx-auto overflow-x-clip">
        <Table selectedCategory={selectedCategory} dataBs={dataBs} dataKec={dataKec} dataDesa={dataDesa} dataKab={dataKab} />
      </div>
    </div>
  );
};

export default SelectTabel;
