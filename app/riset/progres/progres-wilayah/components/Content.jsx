'use client';
import WilayahSelect from './WilayahSelect';
import TableWilayah from './TableProgressPerWilayah';
import ProgressBar from './ProgressBar';
import * as Icon from 'react-feather';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import HandleExport from '@/app/components/HandleExport';




const Content = ({data, listKab,}) => {
  const [dataCacah, setDataCacah] = useState(data);
  // const [done, setDone] = useState(data[0].jumlah_sampel_selesai);
  // const [max, setMax] = useState(data[0].jumlah_sampel);
  const [done, setDone] = useState(0);
  const [max, setMax] = useState(0);
  const dataToExport = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 40 },
  ];
  const Export = () => {
    HandleExport(dataToExport, 'Progres-Tim');
  };
  
  const countProgres = (datanya) => {
    let totalSampelSelesai = 0;
    let totalJumlahSampel = 0;
  
    datanya.forEach((data) => {
      totalSampelSelesai += data.sampelSelesai;
      totalJumlahSampel += data.jumlahSampel;
    });
  
    setDone(totalSampelSelesai);
    setMax(totalJumlahSampel);
  };
  
  const handleTimSelect = (selectedTim) => {
    const filteredDataListing = filterDataByTim(dataCacah, selectedTim);
  
    countProgres(filteredDataListing);
  
    setDataCacah(filteredDataListing);
  };
  <>
    <div className="bg-primary-900/95 w-[90%] mt-8 px-6 rounded-xl">
        {/* <div className="flex text-white py-4">
        <p className="font-medium">Monitoring PPL Berdasarkan Tim</p>
      </div> */}
        <div className="flex justify-between mb-4 pt-6">
          <WilayahSelect />
          <div onClick={Export} className="flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
            <Icon.Download size={18} />
            <button className=" pl-4">Export</button>
          </div>
        </div>
        <ProgressBar />
        <TableWilayah />
    </div>
  </>
};

export default Content;
