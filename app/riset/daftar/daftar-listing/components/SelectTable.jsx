'use client';
import React, { useState } from 'react';
import Table from './TableSelect';
import * as Icon from 'react-feather';
import SelectCat from './selectCat';
import HandleExport from '@/app/components/HandleExport';

const SelectTabel = ({ dataBs, dataKec, dataDesa, dataKab, dataAll }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  let dataToExport;

  if (selectedCategory === 'blok sensus' || selectedCategory === null) {
    dataToExport = dataBs.map((element) => ({
      Kode_BS: element.id_bs,
      Tim: element.id_tim,
      Jumlah_listing: element.jumlah_listing,
    }));
  } else if (selectedCategory === 'kecamatan') {
    dataToExport = dataKec.map((element) => ({
      Kode_BS: element.id_bs,
      Kecamatan: element.nama_kec,
      Jumlah_listing: element.jumlah_listing,
    }));
  } else if (selectedCategory === 'desa/kelurahan') {
    dataToExport = dataDesa.map((element) => ({
      Kode_Desa: element.id_bs,
      Desa_Kelurahan: element.nama_kel,
      Jumlah_listing: element.jumlah_listing,
    }));
  } else if (selectedCategory === 'kabupaten') {
    dataToExport = dataKab.map((element) => ({
      Kode_BS: element.id_bs,
      Kabupaten_Kota: element.nama_kabupaten,
      Jumlah_listing: element.jumlah_listing,
    }));
  } else if (selectedCategory === 'keseluruhan') {
    dataToExport = null;
  }

  const Export = () => {
    HandleExport(dataToExport, 'Daftar-listing');
  };

  const handleCategoryChange = (selectedValue) => {
    setSelectedCategory(selectedValue);
  };
  return (
    <div className="w-[90%] mx-auto bg-primary-900/95 rounded-xl shadow-lg overflow-auto mt-8 pt-2">
      <div className="flex w-[95%] mx-auto justify-between items-center">
        <div className="md:w-[40%] md:flex my-4 md:my-2 justify-start h-fit items-center text-xs md:text-base">
          <p className="text-white">Pilih Tabel : </p>
          <div className="md:w-3/5 w-full ml-4">
            <SelectCat onSelect={handleCategoryChange} />
          </div>
        </div>
        <div className="">
          <button onClick={Export} className="flex md:mt-2 mt-6 items-center justify-center md:text-base text-xs bg-secondary-800 py-2 px-6 w-fit rounded-lg text-white hover:bg-secondary-900">
            <Icon.Download size={18} />
            <p className=" pl-4">Export</p>
          </button>
        </div>
      </div>
      <div className="w-[95%] mx-auto overflow-x-clip">
        <Table selectedCategory={selectedCategory} dataBs={dataBs} dataKec={dataKec} dataDesa={dataDesa} dataKab={dataKab} dataAll={dataAll} />
      </div>
    </div>
  );
};

export default SelectTabel;
