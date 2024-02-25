'use client';
import BasicTable from '@/app/components/BasicTable';
import { useModal } from './Modal';
import Informasi from './InformasiSampel';
import React, { useState } from 'react';

const TableDetail = ({ data }) => {
  const { showModal, setShowModal } = useModal();
  const [dataModal, setDataModal] = useState();

  const columns = [
    {
      accessorKey: 'kode_ruta',
      header: 'Kode Rumah Tangga',
    },
    {
      accessorKey: 'id_bs',
      header: 'Blok Sensus',
    },
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
      accessorKey: 'status',
      header: 'Status Cacah',
      cell: ({ row }) => {
        return (
          <div>
            {row.original.status == 2 ? (
              <button disabled className="text-green-900 bg-green-200/70 px-4 py-2 rounded-lg">
                Tercacah
              </button>
            ) : (
              <Button isDisabled color="danger" variant="flat">
                Belum Tercacah
              </Button>
            )}
          </div>
        );
      },
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
      <BasicTable columns={columns} data={data} />
      <div className="w-[100%] bg-primary-900/95"></div>
      {showModal && <Informasi data={dataModal} onClose={() => setShowModal(false)}/>}
      {/* {showModal && <Modal onClose={() => setShowModal(false)} data={dataModal} />} */}
    </>
  );
};
export default TableDetail;
