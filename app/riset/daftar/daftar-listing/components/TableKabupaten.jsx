'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const { default: BasicTable } = require('@/app/components/BasicTable');

const datas = [
  {
    NamaKecamatan: 'Denpasar',
    jumlahListing: '86',
  },
  {
    NamaKecamatan: 'Karangasem',
    jumlahListing: '81',
  },
  {
    NamaKecamatan: 'Badung',
    jumlahListing: '90',
  },
  {
    NamaKecamatan: 'Gianyar',
    jumlahListing: '78',
  },
  {
    NamaKecamatan: 'Bangli',
    jumlahListing: '86',
  },
  {
    NamaKecamatan: 'Jembrana',
    jumlahListing: '81',
  },
  {
    NamaKecamatan: 'Tabanan',
    jumlahListing: '90',
  },
  {
    NamaKecamatan: 'Buleleng',
    jumlahListing: '78',
  },
  {
    NamaKecamatan: 'Klungkung',
    jumlahListing: '86',
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
