'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const { default: BasicTable } = require('@/app/components/BasicTable');

const datas = [
  {
    NamaKabupaten: 'Denpasar',
    jumlahListing: '86',
  },
  {
    NamaKabupaten: 'Karangasem',
    jumlahListing: '81',
  },
  {
    NamaKabupaten: 'Badung',
    jumlahListing: '90',
  },
  {
    NamaKabupaten: 'Gianyar',
    jumlahListing: '78',
  },
  {
    NamaKabupaten: 'Bangli',
    jumlahListing: '86',
  },
  {
    NamaKabupaten: 'Jembrana',
    jumlahListing: '81',
  },
  {
    NamaKabupaten: 'Tabanan',
    jumlahListing: '90',
  },
  {
    NamaKabupaten: 'Buleleng',
    jumlahListing: '78',
  },
  {
    NamaKabupaten: 'Klungkung',
    jumlahListing: '86',
  },
];

const TableKecamatan = () => {
  const columns = [
    {
      accessorKey: 'NamaKabupaten',
      header: 'Nama Kabupaten/Kota',
    },
    {
      accessorKey: 'jumlahListing',
      header: 'Jumlah Terlisting',
    },
    {
      accessorKey: 'aksi',
      header: 'Aksi',
      cell: ({ row }) => (
        <Link href={`/riset/daftar/daftar-listing/detail-listing/${row.index}`} className="flex items-center py-2 bg-accent-900 hover:bg-orange-700 text-white justify-center rounded-md">
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
