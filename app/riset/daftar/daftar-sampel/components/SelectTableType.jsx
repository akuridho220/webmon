'use client';
import { useState } from 'react';
import * as Icon from 'react-feather';
import SelectCat from './SelectCat';
import Table from './TableSelect';
import HandleExport from '@/app/components/HandleExport';

const SelectTabel = ({ dataBs, dataKec, dataKab, dataDesa, dataAll }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const dataToExport = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 40 },
  ];
  const Export = () => {
    HandleExport(dataToExport, 'Daftar-Sampel');
  };
  const handleCategoryChange = (selectedValue) => {
    setSelectedCategory(selectedValue);
  };
  return (
    <div className="w-[90%] mx-auto bg-primary-900/95 rounded-xl shadow-lg overflow-auto mt-8 pt-2">
      <div className="flex w-[95%] mx-auto justify-between items-center">
        <div className="md:w-[40%] md:flex my-4 md:my-2 justify-between h-fit items-center text-xs md:text-base">
          <p className="text-white">Pilih Tabel :</p>
          <div className="md:w-4/5 w-full">
            <SelectCat onSelect={handleCategoryChange} />
          </div>
        </div>
        <div onClick={Export} className="flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
          <Icon.Download size={18} />
          <button className=" pl-4">Export</button>
        </div>
      </div>
      {/* Set jenis tabel yg ditampilin */}
      <div className="w-[95%] mx-auto overflow-x-clip">
        <Table selectedCategory={selectedCategory} dataBs={dataBs} dataKec={dataKec} dataDesa={dataDesa} dataKab={dataKab} dataAll={dataAll} />
      </div>
    </div>
  );
};

export default SelectTabel;
