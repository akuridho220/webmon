'use client';
import React from 'react';
import * as Icon from 'react-feather';
import HandleExport from '@/app/components/HandleExport';
// import ModalBS from './detailBS';

export default function Header({ data }) {
  // const [showModalBS, setShowModalBS] = useState(false);
  const dataToExport = data.map((item) => {
    return {
      'Nomor Rumah Tangga': item.kode_ruta,
      'NIM Pencacah': item.nim_pencacah,
      'Nama Pencacah': item.nama_pencacah,
      'Nama KRT': item.nama_krt,
      'Status Cacah': item.status == 2 ? 'Tercacah' : 'Belum Tercacah',
    };
  });
  const Export = () => {
    HandleExport(dataToExport, 'Detail-Progres-Tim');
  };
  return (
    <div className="">
      <div className="flex py-2 w-[100%] justify-between">
        <div className="w-[10%]"></div>
        <div>
          <button onClick={Export} className="flex items-center justify-center bg-secondary-800 py-2 px-6 w-fit rounded-lg text-white hover:bg-secondary-900">
            <Icon.Download size={18} />
            <p className=" pl-4">Export</p>
          </button>
        </div>
      </div>
    </div>
  );
}
