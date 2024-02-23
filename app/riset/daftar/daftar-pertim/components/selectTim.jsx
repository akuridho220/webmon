'use client';
import React, { useState } from 'react';
import TimDropdown from './dropdownTim';
import * as Icon from 'react-feather';
import HandleExport from '@/app/components/HandleExport';

const TimSelect = ({ onSelect, dataListTim, selectedCategory, dataSampel, dataListing }) => {
  const handleTimSelect = (selectedTim) => {
    onSelect(selectedTim);
  };
  let dataToExport;
  if (selectedCategory === 'listing') {
    dataToExport = dataListing.map((element) => ({
      Kode_BS: element.id_bs,
      Tim: element.nama_tim,
      Jumlah_listing: element.jumlah_listing,
    }));
  } else if (selectedCategory === 'sampel') {
    dataToExport = dataSampel.map((element) => ({
      Kode_BS: element.id_bs,
      Tim: element.nama_tim,
      Jumlah_listing: element.jumlah_listing,
      Jumlah_sampel: element.jumlah_sampel,
    }));
  }
  const Export = () => {
    HandleExport(dataToExport, 'daftar-Tim');
  };
  return (
    <div className="md:flex md:flex-row block w-full justify-between items-center">
      <div className="mt-4 w-full">
        <p className="font-sm text-white">Monitoring PPL berdasarkan tim</p>
        <div className="w-full md:w-max">
          <TimDropdown onSelect={handleTimSelect} data={dataListTim} />
        </div>
      </div>
      <div className="flex justify-end items-end md:mt-10 mt-4 w-full ">
        <div onClick={Export} className="flex w-full md:w-fit items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
          <Icon.Download size={18} />
          <button className=" pl-4">Export</button>
        </div>
      </div>
    </div>
  );
};

export default TimSelect;
