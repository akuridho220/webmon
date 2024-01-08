import React from 'react'
import Image from "next/image"
import { motion as Motion } from 'framer-motion'

const InformasiSampel = ({ onClose }) => {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full h-full z-50 overflow-auto bg-gray-700 bg-opacity-50 flex items-center justify-center"
    >
    
      <div className="bg-primary-900 rounded-md shadow-md w-[80vw] max-w-[900px] h-[85vh] max-h-[750px] overflow-y-auto flex flex-col">
        <div className="flex items-center justify-between bg-primary-900 rounded-t-md py-4 px-6">
          <Image src="/img/pattern/pattern2-crop.png" width={50} height={32} alt="patt2cr" className="h-full" />
          <h1 className="text-3xl font-sdr font-bold text-white">Detail Sampel</h1>
          <Image src="/img/pattern/pattern2-crop.png" width={50} height={32} alt="patt2cr" className="h-full" />
        </div>
        <div className="bg-white rounded-b-md py-5 px-6 overflow-y-auto">
          <div className="flex justify-center pb-4">
            <div className="bg-accent-900 rounded-md py-1 px-2">
              <h1 className="text-white font-bold text-center">Pencacah:</h1>
              <h1 className="text-white font-bold">Sonya Ananta | 222112377</h1>
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
              <h1 className="text-black font-bold">Kode eligible</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">0</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Waktu Pencacahan</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">26 Januari 2024 15:30:45</h1>
            </div>
          </div>
          
          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Alamat</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">RT002/RW002, Kel. Tabanan, Kec. Tabanan, Kab. Tabanan, Prov. Bali</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Lokasi</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">Akurasi +- 4 Meter</h1>
            </div>
          </div>

          <div className="flex py-6 relative overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.210152025937!2d115.1283296282556!3d-8.52883507035573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23b935137ce91%3A0x2cda7a3641ba273b!2sPerum%20Graha%20Pasekan!5e0!3m2!1sen!2sid!4v1704524598898!5m2!1sen!2sid"
              width="900"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

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

export default InformasiSampel;
