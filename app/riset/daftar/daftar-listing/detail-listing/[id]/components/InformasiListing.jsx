import React from 'react';
import Image from "next/image";
import { motion as Motion } from 'framer-motion'

const InformasiListing = ({ onClose }) => {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full h-full z-50 overflow-auto bg-gray-700 bg-opacity-50 flex items-center justify-center"
    >
    
      <div className="bg-primary-900 rounded-md shadow-md w-[800px]">
        <div className="flex items-center justify-between bg-primary-900 rounded-t-md py-4 px-6">
          <Image src="/img/pattern/pattern2-crop.png" width={50} height={32} alt="patt2cr" className="h-full" />
          <h1 className="text-3xl font-sdr font-bold text-white">Detail Hasil Listing</h1>
          <Image src="/img/pattern/pattern2-crop.png" width={50} height={32} alt="patt2cr" className="h-full" />
        </div>
        <div className="bg-white rounded-b-md py-5 px-6">
          <div className="flex justify-center pb-4">
            <div className="bg-accent-900 rounded-md py-1 px-2">
              <h1 className="text-white font-bold text-center">Pencacah:</h1>
              <h1 className="text-white font-bold">Nur Yudha Jati Prakoso | 222112273</h1>
            </div>
          </div>

          

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Nomor Budaya</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">0042401414-42b</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Kode Blok Sensus</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">3507040001013B</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">No Segmen/BF/BS/No Urut Ruta</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">S-0024-242-4242-424-5678</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Kepala Rumah Tangga</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">Charles Adrian I</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Budaya I</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">Rajin</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Budaya II</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">Lumayan Rajin</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Budaya III</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">Peduli</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Waktu</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">26 Januari 2024 15:30:45</h1>
            </div>
          </div>
          
          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex justify-end mt-4">
            <button onClick={onClose} className="py-2 px-4 text-white bg-primary-600 hover:bg-gray-400 rounded-lg">
              Tutup
            </button>
          </div>
        </div>
      </div>
      </Motion.div>

  );
};

export default InformasiListing;
