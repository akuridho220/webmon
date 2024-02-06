'use client';
import { useState } from 'react';
import * as Icon from 'react-feather';
import SelectCat from './SelectCat';
import Table from './TableSelect';
import Swal from 'sweetalert2';

const SelectTabel = ({ dataBs, dataKec, dataKab, dataDesa }) => {
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
    <>
      <div className="bg-primary-900/95 w-[85%] mt-8 px-6 rounded-xl">
        <div className="flex text-white py-4">
          <p className="font-medium">Progres Sampel Survei</p>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex flex-row items-center">
            <p className="text-white">Filter :</p>
            <SelectCat onSelect={handleCategoryChange} />
          </div>
          <div onClick={HandleExport} className="flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
            <Icon.Download size={18} />
            <button className=" pl-4">Export</button>
          </div>
        </div>
        {/* Set jenis tabel yg ditampilin */}
        <Table selectedCategory={selectedCategory} dataBs={dataBs} dataKec={dataKec} dataDesa={dataDesa} dataKab={dataKab} />
      </div>
    </>
  );
};

export default SelectTabel;
