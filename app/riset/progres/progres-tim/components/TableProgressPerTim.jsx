'use client';
import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import Link from 'next/link';

const { default: BasicTable } = require('@/app/components/BasicTable');

const TableTim = ({ data }) => {

  const columns = [
    {
      accessorKey: 'id_bs',
      header: 'Blok Sensus',
    },
    {
      accessorKey: 'nama_tim',
      header: 'Tim Pencacah',
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
          <Link href={`/riset/progres/progres-tim/detail/${data.id_tim}`} className="flex items-center p-2 bg-accent-900 hover:bg-orange-700 text-white justify-center rounded-md">
            <span className="">Detail</span>
          </Link>
        );
      },
    },
  ];


  return (
    <>
      <BasicTable columns={columns} data={data} />
      {/* <div className="w-[90%] bg-[#d93f57] bg-opacity-50">{selectedRow && <DetailModal isOpen={isOpen} onClose={handleCloseDetailModal} data={selectedRow} />}</div> */}
    </>
  );
};

export default TableTim;
