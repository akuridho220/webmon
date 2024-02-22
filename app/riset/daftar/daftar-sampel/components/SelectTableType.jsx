'use client';
import { useState } from 'react';
import * as Icon from 'react-feather';
import SelectCat from './SelectCat';
import Table from './TableSelect';
import HandleExport from '@/app/components/HandleExport';

const SelectTabel = ({ dataBs, dataKec, dataKab, dataDesa, dataAll }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  let dataToExport;
  console.log(dataBs, dataKec, dataDesa, dataKab, dataAll);
  if (selectedCategory === 'blok sensus' || selectedCategory === null) {
    dataToExport = dataBs.map((element) => ({
      Kode_BS: element.id_bs,
      Kode_ruta: element.kode_ruta,
      Tim: element.nama_tim,
      Jumlah_listing: element.jumlah_listing,
      Jumlah_sampel: element.jumlah_sampel,
    }));
  } else if (selectedCategory === 'kecamatan') {
    dataToExport = dataKec.map((element) => ({
      Kode_BS: element.id_bs,
      Kecamatan: element.nama_kec,
      Jumlah_terlisting: element.jumlah_listing,
      Jumlah_sampel: element.jumlah_sampel,
    }));
  } else if (selectedCategory === 'desa/kelurahan') {
    dataToExport = dataDesa.map((element) => ({
      Kode_BS: element.id_bs,
      Desa_Kelurahan: element.nama_kel,
      Jumlah_terlisting: element.jumlah_listing,
      Jumlah_sampel: element.jumlah_sampel,
    }));
  } else if (selectedCategory === 'kabupaten') {
    dataToExport = dataKab.map((element) => ({
      Kode_BS: element.id_bs,
      Kabupaten_Kota: element.nama_kabupaten,
      Jumlah_terlisting: element.jumlah_listing,
      Jumlah_sampel: element.jumlah_sampel,
    }));
  } else if (selectedCategory === 'keseluruhan') {
    dataToExport = dataAll.map((element) => ({
      Kode_ruta: element.kode_ruta,
      NIM_Pencacah: element.nim_pencacah,
      Nama_Pencacah: element.nama,
      Kode_BS: element.id_bs,
      BF: element.no_bf,
      BS: element.no_bs,
      No_Segmen: element.no_segmen,
      No_urut_ruta: element.no_urut_ruta,
      No_urut_eligible: element.no_urut_ruta_egb,
      Nama_KRT: element.nama_krt,
      Alamat: element.alamat,
      Jumlah_genz_anak: element.jml_genz_anak,
      Jumlah_genz_dewasa: element.jml_genz_dewasa,
      lat: element.lat,
      long: element.long,
    }));
  }
  const Export = () => {
    HandleExport(dataToExport, 'Daftar-Sampel');
  };
  const handleCategoryChange = (selectedValue) => {
    setSelectedCategory(selectedValue);
  };
  return (
    <div className="w-[90%] mx-auto bg-primary-900/95 rounded-xl shadow-lg overflow-auto mt-8 pt-2">
      <div className="flex w-[95%] mx-auto justify-between items-center">
        <div className="md:w-[40%] md:flex my-4 md:my-2 justify-between h-fit items-center text-xs md:text-base">
          <p className="text-white">Pilih Tabel :</p>
          <div className="md:w-4/5 w-full">
            <SelectCat onSelect={handleCategoryChange} />
          </div>
        </div>
        <div onClick={Export} className="flex items-center bg-secondary-800 py-2 px-4 rounded-lg text-white hover:bg-secondary-900">
          <Icon.Download size={18} />
          <button className=" pl-4">Export</button>
        </div>
      </div>
      {/* Set jenis tabel yg ditampilin */}
      <div className="w-[95%] mx-auto overflow-x-clip">
        <Table selectedCategory={selectedCategory} dataBs={dataBs} dataKec={dataKec} dataDesa={dataDesa} dataKab={dataKab} dataAll={dataAll} />
      </div>
    </div>
  );
};

export default SelectTabel;
