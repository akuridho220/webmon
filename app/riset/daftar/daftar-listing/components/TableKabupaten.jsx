'use client';
import React from 'react';
import Link from 'next/link';
import ProgresBar from './ProgresBar';

const { default: BasicTable } = require('@/app/components/BasicTable');

const TableKabupaten = ({ data }) => {
  const columns = [
    {
      accessorKey: 'nama_kabupaten',
      header: 'Nama Kabupaten/Kota',
    },
    {
      accessorKey: 'jumlah_listing',
      header: 'Jumlah Terlisting',
    },
    {
      accessorKey: 'progres',
      header: 'Progress',
      cell: ({ cell }) => (
        <>
          {Math.round((cell.row.original.jumlah_listing_done / cell.row.original.jumlah_listing_all) * 100)}%
          <ProgresBar done={cell.row.original.jumlah_listing_done} max={cell.row.original.jumlah_listing_all} />
        </>
      ),
    },
    {
      accessorKey: 'aksi',
      header: 'Aksi',
      cell: ({ row }) => {
        const data = row.original;
        return (
          <Link
            href={{ pathname: `/riset/daftar/daftar-listing/detail-listing/kab/${data.id_bs}`, query: { nama: `${data.nama_kabupaten}` } }}
            className="flex items-center p-2 bg-accent-900 hover:bg-orange-700 text-white justify-center rounded-md"
          >
            <span className="">Detail</span>
          </Link>
        );
      },
    },
  ];

  return (
    <>
      <BasicTable columns={columns} data={data} />
      <div className="w-[90%] bg-[#d93f57] bg-opacity-50"></div>
    </>
  );
};

export default TableKabupaten;
