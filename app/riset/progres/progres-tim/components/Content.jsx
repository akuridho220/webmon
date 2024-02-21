'use client';
import TimSelect from './TimSelect';
import TableTim from './TableProgressPerTim';
import * as Icon from 'react-feather';
import ProgressBar from './ProgressBar';
import { useState } from 'react';
import HandleExport from '@/app/components/HandleExport';

const Content = ({ data, listTim, dataAwal }) => {
  const [dataCacah, setDataCacah] = useState(data);
  // const [done, setDone] = useState(data[0].jumlah_sampel_selesai);
  // const [max, setMax] = useState(data[0].jumlah_sampel);
  const [done, setDone] = useState(dataAwal[1]);
  const [max, setMax] = useState(dataAwal[0]);

  const dataToExport = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 40 },
  ];
  const Export = () => {
    HandleExport(dataToExport, 'Progres-Tim');
  };
  const filterDataByTim = (data, tim) => {
    return data.filter((item) => item.id_tim === tim);
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

  // useEffect(() => {
  //   if (selectedTim !== null) {
  //     const filteredDataListing = filterDataByTim(dataCacah, selectedTim);
  //     setDataCacah(filteredDataListing);
  //   }
  // }, [selectedTim, dataCacah]);

  // useEffect(() => {
  //   countProgres(dataCacah);
  // }, [dataCacah]);

  const handleTimSelect = (selectedTim) => {
    const filteredDataListing = filterDataByTim(dataCacah, selectedTim);

    countProgres(filteredDataListing);

    setDataCacah(filteredDataListing);
  };

  // const handleTimSelect = (selectedTim) => {
  //   setSelectedTim(selectedTim);
  // };

  return (
    <>
      <div className="bg-primary-900/95 w-[90%] mt-8 px-6 rounded-xl overflow-hidden">
        {/* <div className="flex text-white py-4">
        <p className="font-medium">Monitoring PPL Berdasarkan Tim</p>
      </div> */}
        <div className="block md:flex justify-between mb-4 pt-6 overflow-hidden">
          <TimSelect dataTim={listTim} onSelect={handleTimSelect} />
          <div onClick={Export} className="mt-3 md:mt-0 flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
            <Icon.Download size={18} />
            <button className=" pl-4">Export</button>
          </div>
        </div>
        <ProgressBar detail={true} done={done} max={max} />
        <TableTim data={data} onSelect={handleTimSelect} />
      </div>
    </>
  );
};

export default Content;
