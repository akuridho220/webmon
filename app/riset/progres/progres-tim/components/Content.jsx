'use client';
import TimSelect from './TimSelect';
import TableTim from './TableProgressPerTim';
import * as Icon from 'react-feather';
import ProgressBar from './ProgressBar';
import React, { useState } from 'react';
import HandleExport from '@/app/components/HandleExport';

const Content = ({ data, listTim, dataAwal }) => {
  const [dataCacah, setDataCacah] = useState(data);
  const [done, setDone] = useState(dataAwal[1]);
  const [max, setMax] = useState(dataAwal[0]);
  // useEffect(() => {
  //   countProgres(dataCacah);
  // }, [dataCacah]);

  // let dataFilter = [];

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

  const handleTimSelect = (selectedTim) => {
    const filteredDataListing = filterDataByTim(data, selectedTim);

    countProgres(filteredDataListing);
    setDataCacah(filteredDataListing);
  };

  return (
    <>
      <div className="bg-primary-900/95 w-[90%] mt-8 px-6 rounded-xl overflow-hidden">
        {/* <div className="block md:flex justify-between mb-4 pt-6 overflow-hidden z-30">
          <TimSelect dataTim={listTim} onSelect={handleTimSelect}/>
          <div onClick={Export} className="mt-3 md:mt-0 flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
            <Icon.Download size={18} />
            <button className=" pl-4">Export</button>
          </div>
        </div> */}
        <TimSelect data={data} dataTim={listTim} onSelect={handleTimSelect} />
        <ProgressBar detail={true} done={done} max={max} />
        <TableTim data={dataCacah} />
      </div>
    </>
  );
};

export default Content;
