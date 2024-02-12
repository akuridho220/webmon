'use client';
import TimSelect from './TimSelect';
import TableTim from './TableProgressPerTim';
import * as Icon from 'react-feather';
import ProgressBar from './ProgressBar';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

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



const Content = ({data, listTim, selectedTim, setSelectedTim}) => {
  const [dataCacah, setDataCacah] = useState(data);
  const [done, setDone] = useState(data[0].jumlah_sampel_selesai);
  const [max, setMax] = useState(data[0].jumlah_sampel);


  const filterDataByTim = (data, tim) => {
    return data.filter(item => item.id_tim === tim);
  };
  
  const countProgres = (datanya) => {
    let totalSampelSelesai = 0;
    let totalJumlahSampel = 0;

    datanya.forEach(data => {
      totalSampelSelesai += data.sampelSelesai;
      totalJumlahSampel += data.jumlahSampel;
    });

    setDone(totalSampelSelesai);
    setMax(totalJumlahSampel);
  }

  useEffect(() => {
    if (selectedTim !== null) {
      const filteredDataListing = filterDataByTim(dataCacah, selectedTim);
      setDataCacah(filteredDataListing);
    }
  }, [selectedTim, dataCacah]);

  useEffect(() => {
    countProgres(dataCacah);
  }, [dataCacah]);


  // const handleTimSelect = (selectedTim) => {
  //   const filteredDataListing = filterDataByTim(dataCacah, selectedTim);

  //   countProgres(filteredDataListing);
  
  //   setDataCacah(filteredDataListing);
  // }

  const handleTimSelect = (selectedTim) => {
    setSelectedTim(selectedTim);
  };

  return(
  <>
    <div className="bg-primary-900/95 w-[90%] mt-8 px-6 rounded-xl">
      {/* <div className="flex text-white py-4">
        <p className="font-medium">Monitoring PPL Berdasarkan Tim</p>
      </div> */}
      <div className="flex justify-between mb-4 pt-6">
        <TimSelect dataTim={listTim} onSelect={handleTimSelect}/>
        <div onClick={HandleExport} className="flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
          <Icon.Download size={18} />
          <button className=" pl-4">Export</button>
        </div>
      </div>
      <ProgressBar detail={true} done={done} max={max} />
      <TableTim data={data} onSelect={handleTimSelect}/>
    </div>
  </>
  )
};

export default Content;
