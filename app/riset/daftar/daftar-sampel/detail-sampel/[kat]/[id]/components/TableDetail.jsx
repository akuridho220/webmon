'use client';
import BasicTable from '@/app/components/BasicTable';
import { useModal } from './Modal';
import Informasi from './InformasiSampel';
import React, { useState } from 'react';

const datas = [
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian I',
    status: 'Belum Selesai',
  },
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian II',
    status: 'Belum Selesai',
  },
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian III',
    status: 'Belum Selesai',
  },
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian IV',
    status: 'Belum Selesai',
  },
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian V',
    status: 'Belum Selesai',
  },
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian VI',
    status: 'Belum Selesai',
  },
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian VII',
    status: 'Belum Selesai',
  },
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian VIII',
    status: 'Belum Selesai',
  },
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian IX',
    status: 'Belum Selesai',
  },
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian X',
    status: 'Belum Selesai',
  },
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian XI',
    status: 'Belum Selesai',
  },
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian XII',
    status: 'Belum Selesai',
  },
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian XIII',
    status: 'Belum Selesai',
  },
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian XIV',
    status: 'Belum Selesai',
  },
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian XIV',
    status: 'Belum Selesai',
  },
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian XV',
    status: 'Belum Selesai',
  },
  {
    kodeRT: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Sonya Ananta (222112377)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian XVI',
    status: 'Belum Selesai',
  },
];

const tableDetail = () => {
  const {showModal, setShowModal} = useModal();

  const handleShowModal = () => {
    setShowModal(true);
  }
  const columns = [
    {
        accessorKey: 'kodeRT',
        header: 'Kode Rumah Tangga',
    },
    {
        accessorKey: 'kodeBS',
        header: 'Kode Blok Sensus',
    },
    {
        accessorKey: 'pencacah',
        header: 'Pencacah',
    },
    {
        accessorKey: 'noSegmen',
        header: 'BF/BS/Urutan Ruta',
    },
    {
        accessorKey: 'kepRuta',
        header: 'Nama Kepala Rumah Tangga',
    },
    
    {
        accessorKey: 'status',
        header: 'Status',
    },
    {
      accessorKey: 'aksi',
      header: 'Aksi',
      cell: ({ row }) => (
        <button
          onClick={() => setShowModal(true)} // Mengubah state untuk menampilkan modal ketika tombol "Detail" diklik
          className="flex items-center px-2 py-1 bg-accent-900 hover:bg-orange-700 text-white justify-center rounded-md"
        >
          <span className="">Detail</span>
        </button>
      ),
    },
  ];

  return (
    <>
      <BasicTable columns={columns} data={datas} />
      <div className="w-[90%] bg-[#d93f57] bg-opacity-50"></div>
      {showModal && <Informasi/>}
    </>
  );
};
export default tableDetail;