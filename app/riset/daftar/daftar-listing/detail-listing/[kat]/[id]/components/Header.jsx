'use client';
import React from 'react';
import * as Icon from 'react-feather';
import HandleExport from '@/app/components/HandleExport';

export default function Header({ data }) {
  const dataToExport = data.map((item) => {
    return {
      Kode_Ruta: item.kode_ruta,
      Kode_Provinsi: item.id_prov,
      Kode_Kabupaten_Kota: item.id_kab,
      Kode_Kecamatan: item.id_kec,
      Kode_Desa_Kelurahan: item.id_kel,
      Kode_BS: item.id_bs,
      Alamat: item.alamat,
      Tim_Pencacah: item.id_tim,
      No_BF: item.no_bf,
      No_BS: item.no_bs,
      No_urut_ruta: item.no_urut_ruta,
      Nama_KRT: item.nama_krt,
      Lat: item.lat,
      Long: item.long,
    };
  });
  const Export = () => {
    HandleExport(dataToExport, 'Detail-Listing');
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
