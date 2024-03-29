'use client';
import React, { useState } from 'react';
import DetailModal from './Detailmodal';
import ProgressBar from './ProgressBar';
import Link from 'next/link';

const { default: BasicTable } = require('@/app/components/BasicTable');

const datas = [
  /*{
    blokSensus: "",
    sampelSelesai: 0,
    jumlahSampel: 0,
  }*/
];

const TableWilayah = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      accessorKey: 'id_bs',
      header: 'Blok Sensus',
    },
    {
      accessorKey: 'jumlah_sampel_selesai',
      header: 'Sampel Selesai',
    },
    {
      accessorKey: 'jumlah_sampel',
      header: 'Jumlah Sampel',
    },
    {
      accessorKey: 'progres',
      header: 'Progress',
      cell: ({ cell }) => (
        <>
          {Math.round((cell.row.original.jumlah_sampel_selesai / cell.row.original.jumlah_sampel) * 100)}%
          <ProgressBar done={cell.row.original.jumlah_sampel_selesai} max={cell.row.original.jumlah_sampel} />
        </>
      ),
    },
    {
      accessorKey: 'aksi',
      header: 'Aksi',
      cell: ({ row }) => {
        const data = row.original;
        return (
          <Link href={`/riset/progres/progres-wilayah/detail/${data.id_bs}`} className="flex items-center p-2 bg-accent-900 hover:bg-orange-700 text-white justify-center rounded-md">
            <span className="">Detail</span>
          </Link>
        );
      },
    },
  ];

  const handleDetailButtonClick = (row) => {
    setSelectedRow(row);
    setIsOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <BasicTable columns={columns} data={data} />
      {/* <div className="w-[90%] bg-[#d93f57] bg-opacity-50">{selectedRow && <DetailModal isOpen={isOpen} onClose={handleCloseDetailModal} data={selectedRow} />}</div> */}
    </>
  );
};

export default TableWilayah;
