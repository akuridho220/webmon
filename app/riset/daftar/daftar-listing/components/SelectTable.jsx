'use client';
import React, { useState } from 'react';
import Table from './TableSelect';
import * as Icon from 'react-feather';
import SelectCat from './selectCat';
import Swal from 'sweetalert2';

const SelectTabel = ({ dataBs, dataKec, dataDesa, dataKab }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (selectedValue) => {
    setSelectedCategory(selectedValue);
  };
  const HandleExport = () => {
    Swal.fire({
      title: 'Export Data',
      text: 'Pilih Format Export Data',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Excel',
      cancelButtonText: 'PDF',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Error', 'Maaf Fitur belum terimplementasi', 'error');
      } else {
        Swal.fire('Error', 'Maaf Fitur belum terimplementasi', 'error');
      }
    });
  };
  return (
    <div className="md:w-[90%] w-[95%] mx-auto bg-primary-900/95 rounded-xl shadow-lg overflow-auto mt-8 pt-2">
      <div className="flex w-[95%] mx-auto justify-between items-center">
        <div className="md:w-[40%] md:flex my-4 md:my-2 justify-between h-fit items-center text-xs md:text-base">
          <p className="text-white">Filter: </p>
          <div className="md:w-4/5 w-full">
            <SelectCat onSelect={handleCategoryChange} />
          </div>
        </div>
        <div className="">
          <button onClick={HandleExport} className="flex md:mt-2 mt-6 items-center justify-center md:text-base text-xs bg-secondary-800 py-2 px-6 w-fit rounded-lg text-white hover:bg-secondary-900">
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
