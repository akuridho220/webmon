'use client';
import React, {useState} from 'react';
import WilayahSelect from './WilayahSelect';
import TableWilayah from './TableProgressPerWilayah';
import ProgressBar from './ProgressBar';
import * as Icon from 'react-feather';
import HandleExport from '@/app/components/HandleExport';

const dataToExport = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Doe', age: 40 },
];
const Export = () => {
  HandleExport(dataToExport, 'Progres-Tim');
};

const Content = ({ data, listKab, listKec, listDesa }) => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSelect = (selected_id) => {
    let id_kab = '';
    let id_kec = '';
    let id_kel = '';
    console.log(selected_id);
    if(selected_id && selected_id.length == 2){
      id_kab = selected_id;
      setFilteredData(data.filter((item) => item.id_kab == id_kab ));
    } else if(selected_id && selected_id.length == 5){
      id_kab = selected_id.substring(0,2);
      id_kec = selected_id.substring(2,5);
      setFilteredData(data.filter((item) => item.id_kab == id_kab && item.id_kec == id_kec));
    } else if(selected_id && selected_id.length == 8){
      id_kab = selected_id.substring(0,2);
      id_kec = selected_id.substring(2,5);
      id_kel = selected_id.substring(5,8);
      setFilteredData(data.filter((item) => item.id_kab == id_kab && item.id_kec == id_kec && item.id_kel == id_kel));
    }
  };
  return (
    <>
      <div className="bg-primary-900/95 w-[90%] mt-8 px-6 rounded-xl overflow-hidden">
        <div className="block md:flex justify-between mb-4 pt-6">
          <div className="w-[90%] md:w-fit  justify-start">
            <WilayahSelect listKab={listKab} listKec={listKec} listDesa={listDesa} onSelect={handleSelect}/>
          </div>
          <div onClick={Export} className="mt-3 md:mt-0 flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
            <Icon.Download size={18} />
            <button className=" pl-4 text-sm md:text-base">Export</button>
          </div>
        </div>
        <ProgressBar done={6} max={30}/>
        <TableWilayah data={filteredData}/>
      </div>
    </>
  );
};

export default Content;
