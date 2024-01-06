'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const { default: BasicTable } = require('@/app/components/BasicTable');

const datas = [
  {
    NamaDesaKelurahan: 'KarangTengah',
    jumlahListing: '86',
  },
  {
    NamaDesaKelurahan: 'KarangSamping',
    jumlahListing: '81',
  },
  {
    NamaDesaKelurahan: 'KarangSari',
    jumlahListing: '90',
  },
  {
    NamaDesaKelurahan: 'KarangSariBarat',
    jumlahListing: '78',
  },
  {
    NamaDesaKelurahan: 'KarangSariTimur',
    jumlahListing: '86',
  },
  {
    NamaDesaKelurahan: 'KaranSariUtara',
    jumlahListing: '81',
  },
  {
    NamaDesaKelurahan: '3507040001025B',
    jumlahListing: '90',
  },
  {
    NamaDesaKelurahan: 'KarangSariSelatan',
    jumlahListing: '78',
  },
  {
    NamaDesaKelurahan: 'KarangSariSelatan',
    jumlahListing: '86',
  },
  {
    NamaDesaKelurahan: 'KarangSariSelatan',
    jumlahListing: '81',
  },
  {
    NamaDesaKelurahan: 'KarangSariSelatan',
    jumlahListing: '90',
  },
  {
    NamaDesaKelurahan: 'KarangUtara',
    jumlahListing: '78',
  },
  {
    NamaDesaKelurahan: 'KarangUtara',
    jumlahListing: '78',
  },
  {
    NamaDesaKelurahan: 'KarangUtara',
    jumlahListing: '78',
  },
  {
    NamaDesaKelurahan: 'KarangUtara',
    jumlahListing: '78',
  },
  {
    NamaDesaKelurahan: 'KarangUtara',
    jumlahListing: '78',
  },
  {
    NamaDesaKelurahan: 'KarangUtara',
    jumlahListing: '78',
  },
];

const TableDesa = () => {
  const columns = [
    {
      accessorKey: 'NamaDesaKelurahan',
      header: 'Nama Desa/Kelurahan/Banjar',
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

export default TableDesa;
