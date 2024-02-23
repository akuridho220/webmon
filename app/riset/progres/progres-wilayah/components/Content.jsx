'use client';
import React, { useState, useEffect } from 'react';
import WilayahSelect from './WilayahSelect';
import TableWilayah from './TableProgressPerWilayah';
import ProgressBar from './ProgressBar';
import * as Icon from 'react-feather';
import HandleExport from '@/app/components/HandleExport';

const Content = ({ data, listKab, listKec, listDesa }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [done, setDone] = useState(0);
  const [max, setMax] = useState(0);

  const dataToExport = filteredData.map((item) => {
    return {
      'Blok Sensus': item.id_bs,
      Kode_ruta: item.kode_ruta,
      'Tim Pencacah': item.nama_tim,
      'Sampel Selesai': item.jumlah_sampel_selesai,
      'Jumlah Sampel': item.jumlah_sampel,
      Progress: `${Math.round((item.jumlah_sampel_selesai / item.jumlah_sampel) * 100)}%`,
    };
  });

  useEffect(() => {
    countProgres(filteredData);
  }, [filteredData]);

  let dataFilter = [];

  const countProgres = (datanya) => {
    let totalSampelSelesai = 0;
    let totalJumlahSampel = 0;

    datanya.forEach((data) => {
      totalSampelSelesai += parseInt(data.jumlah_sampel_selesai);
      totalJumlahSampel += parseInt(data.jumlah_sampel);
    });

    setDone(totalSampelSelesai);
    setMax(totalJumlahSampel);
  };

  const handleSelect = (selected_id) => {
    let id_kab = '';
    let id_kec = '';
    let id_kel = '';
    if (selected_id && selected_id.length == 2) {
      id_kab = selected_id;
      dataFilter = data.filter((item) => item.id_kab == id_kab);
      setFilteredData(dataFilter);
    } else if (selected_id && selected_id.length == 5) {
      id_kab = selected_id.substring(0, 2);
      id_kec = selected_id.substring(2, 5);
      dataFilter = data.filter((item) => item.id_kab == id_kab && item.id_kec == id_kec);
      setFilteredData(dataFilter);
    } else if (selected_id && selected_id.length == 8) {
      id_kab = selected_id.substring(0, 2);
      id_kec = selected_id.substring(2, 5);
      id_kel = selected_id.substring(5, 8);
      dataFilter = data.filter((item) => item.id_kab == id_kab && item.id_kec == id_kec && item.id_kel == id_kel);
      setFilteredData(dataFilter);
    }
  };

  const handleExport = () => {
    HandleExport(dataToExport, 'Progres-Wilayah');
  };

  return (
    <>
      <div className="bg-primary-900/95 w-[90%] mt-8 px-6 rounded-xl overflow-hidden">
        <div className="block lg:flex jjustify-between mb-4 pt-6">
          <div className="w-[90%] md:w-fit justify-start">
            <WilayahSelect listKab={listKab} listKec={listKec} listDesa={listDesa} onSelect={handleSelect} className="w-full" />
          </div>
          <div onClick={handleExport} className="mt-3 md:mt-0 flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
            <Icon.Download size={18} />
            <button className="pl-4 text-sm md:text-base">Export</button>
          </div>
        </div>
        <ProgressBar detail={true} done={done} max={max} />
        <TableWilayah data={filteredData} />
      </div>
    </>
  );
};

export default Content;
