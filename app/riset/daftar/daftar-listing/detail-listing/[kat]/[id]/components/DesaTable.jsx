'use client';
import React, { useState } from 'react';
import Modal from './InformasiListing';

const { default: BasicTable } = require('@/app/components/BasicTable');

const datas = [
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian I',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian II',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian III',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian IV',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian V',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian VI',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian VII',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian VIII',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian IX',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian X',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian XI',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian XII',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian XIII',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian XIV',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian XIV',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian XV',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
  {
    nomor: '0042401414-42b',
    kodeBS: '3507040001013B',
    pencacah: 'Ridho Pangestu (222112273)',
    noSegmen: 'S-0024-242-4242-424-5678',
    kepRuta: 'Charles Adrian XVI',
    budaya: 'Baik',
    waktu: '26 Januari 2024 15:30:45',
  },
];

const DesaTable = () => {
  const [showModal, setShowModal] = useState(false);
  const columns = [
    {
        accessorKey: 'nomor',
        header: 'Kode Budaya',
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
        header: 'Nomor Segmen/BF/BS/Urutan Ruta',
    },
    {
        accessorKey: 'kepRuta',
        header: 'Nama Kepala Rumah Tangga',
    },
    {
        accessorKey: 'budaya',
        header: 'Budaya',
    },
    {
        accessorKey: 'waktu',
        header: 'Waktu',
    },
    {
      accessorKey: 'aksi',
      header: 'Aksi',
      cell: ({ row }) => (
        <button
          onClick={() => setShowModal(true)} // Mengubah state untuk menampilkan modal ketika tombol "Detail" diklik
          className="flex items-center py-2 px-3 bg-accent-900 hover:bg-orange-700 text-white justify-center rounded-md"
        >
          <span className="">Detail</span>
        </button>
      ),
    },
  ];

  return (
    <>
<div className="overflow-x-auto">
      <BasicTable columns={columns} data={datas} />
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      <div className="w-[100%] bg-[#d93f57] bg-opacity-50"></div>
    </div>
    </>
  );
};
export default DesaTable;