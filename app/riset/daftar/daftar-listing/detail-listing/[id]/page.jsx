'use client';
import React, { useState } from 'react';
import Layout from '@/app/layout/layout';
import Table from './components/tableDetail';
import * as Icon from 'react-feather';
import Image from 'next/image';
import Modal from './components/InformasiListing';
import ModalBS from './components/detailBS';

export default function DetailListing({params}) {
  const [showModal, setShowModal] = useState(false);
  const [showModalBS, setShowModalBS] = useState(false);
  
  
  const handleClosedModal = () => {
    setShowModalBS(false); // Mengubah nilai state untuk menutup modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  return (
    <>
      <Layout className="w-full min-h-screen overflow-x-hidden">
        <div className="flex flex-col w-[95%] mx-auto rounded-xl space-y-4  px-6 pb-5 bg-primary-700/70">
          <div className="flex  w-90 rounded-xl bg-primary-600 mt-10 p-4 justify-between">
            <Image src="/img/pattern/pattern3-crop.png" width={50} height={32} alt="patt2cr" />
            <div className="flex items-center text-white px-4">
              <p className="mx-auto font-medium font-sdr text-3xl">Detail Listing Blok Sensus 3507040001013B</p>
            </div>
            <Image src="/img/pattern/pattern3-crop.png" width={50} height={32} alt="patt2cr" />
          </div>
          <div className="flex w-[100%] justify-between">
            <div className="w-[10%]">
              <button className="flex items-center justify-center bg-secondary-800 py-2 px-6 w-fit rounded-lg text-white hover:bg-secondary-900">
                <Icon.Download size={18} />
                <p className=" pl-4">Export</p>
              </button>
            </div>
              <div className="w-[18%]">
                <button className="flex items-center justify-left bg-secondary-800 py-2 px-6 w-fit rounded-lg text-white hover:bg-secondary-900"
                  onClick={() => setShowModalBS(true)}
                  >
                  <Icon.Download size={18} />
                  <p className=" pl-0">Tentang Blok Sensus</p>
                </button>
              </div>
          </div>
          <div className="w-full overflow-x-clip">
          <Table setShowModal={setShowModal} /> {/* Mengirimkan setShowModal ke dalam komponen Table */}
          {showModal && (
            <Modal onClose={handleCloseModal} />
          )}
          {showModalBS && (
            <ModalBS onClosed={handleClosedModal} />
          )}
          </div>
        </div>
        {params.id}
      </Layout>
    </>
  );
}
