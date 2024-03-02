'use client';
import React, { useState } from 'react';
import Modal from './InformasiListing';

const { default: BasicTable } = require('@/app/components/BasicTable');

const TableDetail = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState();
  const columns = [
    {
      accessorKey: 'kode_ruta',
      header: 'Kode Rumah Tangga',
    },
    // {
    //   accessorKey: 'id_bs',
    //   header: 'Blok Sensus',
    // },
    {
      accessorKey: 'nama_tim',
      header: 'Tim Pencacah',
    },
    {
      accessorFn: (row) => `${row.no_bf}/${row.no_bs}/${row.no_urut_ruta}`,
      header: 'BF/BS/Urutan Ruta',
    },
    {
      accessorKey: 'nama_krt',
      header: 'Nama Kepala Rumah Tangga',
    },
    {
      accessorKey: 'aksi',
      header: 'Aksi',
      cell: ({ row }) => {
        const data = row.original;
        return (
          <button
            onClick={() => {
              setShowModal(true);
              setDataModal(data);
            }} // Mengubah state untuk menampilkan modal ketika tombol "Detail" diklik
            className="flex items-center px-4 py-2 bg-accent-900 hover:bg-orange-700 text-white justify-center rounded-md"
          >
            <span className="">Detail</span>
          </button>
        );
      },
    },
  ];

  return (
    <>
      <div className="overflow-x-auto">
        <BasicTable columns={columns} data={data} />
        {showModal && <Modal onClose={() => setShowModal(false)} data={dataModal} />}
        <div className="w-[100%] bg-primary-900/95 "></div>
      </div>
    </>
  );
};
export default TableDetail;
