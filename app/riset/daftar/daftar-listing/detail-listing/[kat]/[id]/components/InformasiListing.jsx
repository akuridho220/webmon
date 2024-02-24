import React from 'react';
import Image from 'next/image';
import { motion as Motion } from 'framer-motion';
import * as Icon from 'react-feather';

const InformasiListing = ({ onClose, data }) => {
  const pos = `https://www.google.com/maps?q=${data.lat},${data.long}&hl=es;z=14&output=embed`;
  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="fixed top-0 left-0 w-full h-full z-50 overflow-auto bg-gray-700 bg-opacity-50 flex items-center justify-center">
      <div className="bg-primary-900 rounded-md shadow-md w-[90%] max-h-full overflow-y-auto flex flex-col">
        <div className="flex items-center justify-center bg-primary-900 rounded-t-md py-4 px-6 text-white relative">
          {/* <Image src="/img/pattern/pattern2-crop.png" width={50} height={32} alt="patt2cr" className="h-full" /> */}
          <h1 className="text-3xl font-sdr font-bold">Detail Ruta</h1>
          {/* <Image src="/img/pattern/pattern2-crop.png" width={50} height={32} alt="patt2cr" className="h-full" /> */}
          <div className="absolute right-4">
            <Icon.X onClick={onClose} className="hover:cursor-pointer" />
          </div>
        </div>
        <div className="bg-white rounded-b-md py-4 px-6 overflow-y-auto">
          <div className="flex w-full justify-center mb-4 relative">
            <div className="bg-accent-900 rounded-md py-2 px-2">
              <h1 className="text-white font-bold text-center">Pencacah: TIM {data.nama_tim}</h1>
              <h1 className="text-white font-bold text-center">
                {data.nama} | {data.nim_pencacah}
              </h1>
            </div>
          </div>
          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Kode Rumah Tangga</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">{data.kode_ruta}</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Kode Blok Sensus</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">{data.id_bs}</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">No Segmen</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">{data.no_segmen}</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">BF/BS/No Urut Ruta</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">{`${data.no_bf}/${data.no_bs}/${data.no_urut_ruta}`}</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Nama Kepala Rumah Tangga</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">{data.nama_krt}</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Alamat</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">{data.alamat}</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Jumlah Gen Z Anak</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">{data.jml_genz_anak}</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Jumlah Gen Z Dewasa</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">{data.jml_genz_dewasa}</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Tanggal Listing</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">{data.tgl_listing ?? '-'}</h1>
            </div>
          </div>
          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Catatan BS</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">{data.catatan_bs || '-'}</h1>
            </div>
          </div>
          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Catatan Ruta</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">{data.catatan_ruta || '-'}</h1>
            </div>
          </div>

          {/* <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Kabupaten</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">{data.id_kab}</h1>
            </div>
          </div> */}

          {/* <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Lokasi</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">Akurasi +- 4 Meter</h1>
            </div>
          </div> */}

          <div className="flex py-6 relative overflow-hidden">
            <iframe src={pos} className="w-full" height={500} style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

export default InformasiListing;
