import Image from "next/image"
import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion'

const apiURL = process.env.NEXT_PUBLIC_API_URL;
const fetchData = async (url) => {
  const response = await fetch(url, { next: { revalidate: 60 } });
  return await response.json();
};


const getDataKec = async () => {
  const [dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/listing/kec`)]);
  return dataListing;
};

const getDataDesa = async () => {
  const [dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/listing/desa`)]);
  return dataListing;
};

const getDataKab = async () => {
  const [dataListing] = await Promise.all([fetchData(`${apiURL}riset/daftar/listing/kab`)]);
  return dataListing;
};

const DetailBs = ({ onClosed, dataBS }) => {
  const [dataDesa, setDataDesa] = useState(null);
  const [dataKec, setDataKec] = useState(null);
  const [dataKab, setDataKab] = useState(null);

  useEffect(() => {
    const fetchDataBs = async () => {
      try {
        const [desaData, kecData, kabData] = await Promise.all([
          getDataDesa(),
          getDataKec(),
          getDataKab()
        ]);
  
        const filteredData1 = desaData.filter(item => item.id_kel === dataBS[0].id_kel &&
          item.id_kec === dataBS[0].id_kec &&
          item.id_kab === dataBS[0].id_kab);
        const filteredData2 = kecData.filter(item => item.id_kec === dataBS[0].id_kec &&
          item.id_kab === dataBS[0].id_kab);
        const filteredData3 = kabData.filter(item => item.id_kab === dataBS[0].id_kab);
  
        setDataDesa(filteredData1);
        setDataKec(filteredData2);
        setDataKab(filteredData3);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchDataBs();
  }, []);
  
  console.log(dataDesa);
  
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full h-full z-50 overflow-auto bg-gray-700 bg-opacity-50 flex items-center justify-center"
    >
    
      <div className="bg-primary-900 rounded-md shadow-md w-[80vw] max-w-[900px] max-h-[750px] overflow-y-auto flex flex-col">
        <div className="flex items-center justify-between bg-primary-900 rounded-t-md py-4 px-6">
          <Image src="/img/pattern/pattern2-crop.png" width={50} height={32} alt="patt2cr" className="h-full" />
          <h1 className="text-3xl font-sdr font-bold text-white">Detail Blok Sensus</h1>
          <Image src="/img/pattern/pattern2-crop.png" width={50} height={32} alt="patt2cr" className="h-full" />
        </div>
        <div className="bg-white rounded-b-md py-5 px-6 w-auto">
          <div className="flex justify-center pb-4">
            <div className="bg-accent-900 rounded-md py-1 px-2">
              <h1 className="text-white font-bold text-center">Nomor Blok Sensus: {dataBS[0].kode_bs}</h1>
            </div>
          </div>

        

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Desa/Kelurahan</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">{dataDesa && dataDesa[0] && dataDesa[0].nama_kel}</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Kecamatan</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">{dataKec && dataKec[0] && dataKec[0].nama_kec}</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Kabupaten/Kota</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">{dataKab && dataKab[0] && dataKab[0].nama_kabupaten}</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />

          <div className="flex py-2">
            <div className="w-2/5 ml-4">
              <h1 className="text-black font-bold">Provinsi</h1>
            </div>
            <div className="flex-1">
              <h1 className="text-black font-base">Bali</h1>
            </div>
          </div>

          <hr className="flex py-0.5 border-t border-gray-300 ml-4 mr-4" />


          <div className="flex justify-end mt-4">
            <button onClick={onClosed} className="py-2 px-4 text-white bg-primary-600 hover:bg-gray-400 rounded-lg">
              Tutup
            </button>
          </div>
        </div>
      </div>
      </Motion.div>

  );
};

export default DetailBs;