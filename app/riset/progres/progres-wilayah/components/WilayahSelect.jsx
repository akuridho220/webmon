'use client';
import React, { useState } from 'react';
import KecamatanDropdown from './KecamatanDropdown';
import KabupatenDropdown from './KabupatenDropdown';
import KelurahanDropdown from './KelurahanDropdown';

const WilayahSelect = ({ onSelect, listKab, listKec, listDesa }) => {
  const [kec, setKec] = useState(listKec);
  const [desa, setDesa] = useState(listDesa);

  const handleKabupatenSelect = (selectedKab) => {
    setKec(listKec.filter((item) => item.id_kab == selectedKab));
    setDesa(listDesa.filter((item) => item.id_kab == selectedKab));

    onSelect(selectedKab);
  };
  const handleKecamatanSelect = (selectedKec) => {
    setDesa(listDesa.filter((item) => item.id_kab == selectedKec.substring(0, 2) && item.id_kec == selectedKec.substring(2, 5)));

    onSelect(selectedKec);
  };
  const handleKelurahanSelect = (selectedKel) => {
    onSelect(selectedKel);
  };
  return (
    <>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row md:items-center">
        <div className="mr-4 mb-3 lg:mb-0 w-8 sm:w-[100px] md:w-[310px]">
          <KabupatenDropdown onSelect={handleKabupatenSelect} dataListKab={listKab} />
        </div>
        <div className="mr-4 mb-3 lg:mb-0 w-8 sm:w-[100px] md:w-[310px]">
          <KecamatanDropdown onSelect={handleKecamatanSelect} dataListKec={kec} />
        </div>
        <div className="mr-4 mb-3 lg:mb-0 w-8 sm:w-[100px] md:w-[310px]">
          <KelurahanDropdown onSelect={handleKelurahanSelect} dataListDesa={desa} />
        </div>
      </div>
    </>
  );
};

export default WilayahSelect;
