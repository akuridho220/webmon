'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const { default: BasicTable } = require('@/app/components/BasicTable');

const datas = [
  {
    NamaKecamatan: 'Ini Kecamatan 1',
    jumlahListing: '86',
  },
  {
    NamaKecamatan: 'Ini Kecamatan 1',
    jumlahListing: '81',
  },
  {
    NamaKecamatan: 'Ini Kecamatan 1',
    jumlahListing: '90',
  },
  {
    NamaKecamatan: 'Ini Kecamatan 1',
    jumlahListing: '78',
  },
  {
    NamaKecamatan: 'Ini Kecamatan 1',
    jumlahListing: '86',
  },
  {
    NamaKecamatan: 'Ini Kecamatan 1',
    jumlahListing: '81',
  },
  {
    NamaKecamatan: 'Ini Kecamatan 1',
    jumlahListing: '90',
  },
  {
    NamaKecamatan: 'Ini Kecamatan 1',
    jumlahListing: '78',
  },
  {
    NamaKecamatan: 'Ini Kecamatan 1',
    jumlahListing: '86',
  },
  {
    NamaKecamatan: 'Ini Kecamatan 2',
    jumlahListing: '81',
  },
  {
    NamaKecamatan: 'Ini Kecamatan 2',
    jumlahListing: '90',
  },
  {
    NamaKecamatan: 'Ini Kecamatan 2',
    jumlahListing: '78',
  },
  {
    NamaKecamatan: 'Ini Kecamatan 2',
    jumlahListing: '78',
  },
  {
    NamaKecamatan: 'Ini Kecamatan 2',
    jumlahListing: '78',
  },
  {
    NamaKecamatan: 'Ini Kecamatan 2',
    jumlahListing: '78',
  },
  {
    NamaKecamatan: 'Ini Kecamatan 2',
    jumlahListing: '78',
  },
  {
    NamaKecamatan: 'Ini Kecamatan 3',
    jumlahListing: '78',
  },
];

const TableKecamatan = () => {
  const columns = [
    {
      accessorKey: 'NamaKecamatan',
      header: 'Nama Kecamatan',
    },
    {
      accessorKey: 'jumlahListing',
      header: 'Jumlah Terlisting',
    },
    {
      accessorKey: 'aksi',
      header: 'Aksi',
      cell: ({ row }) => (
        <Link href={`/riset/daftar/daftar-listing/detail-listing/${row.index}`} className="flex items-center p-2 bg-accent-900 hover:bg-orange-700 text-white justify-center rounded-md">
          <span className="">Detail</span>
        </Link>
      ),
    },
  ];

  return (
    <>
      <BasicTable columns={columns} data={datas} />
      <div className="w-[90%] bg-[#d93f57] bg-opacity-50"></div>
    </>
  );
};

export default TableKecamatan;
