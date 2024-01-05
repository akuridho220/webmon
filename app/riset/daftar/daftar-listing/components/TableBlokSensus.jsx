'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const { default: BasicTable } = require('@/app/components/BasicTable');

const datas = [
  {
    kodeBS: '3507040001013B',
    pencacah: 'Ridho',
    jumlahListing: '86',
  },
  {
    kodeBS: '3507040001023B',
    pencacah: 'Ridho',
    jumlahListing: '81',
  },
  {
    kodeBS: '3507040001025B',
    pencacah: 'Ridho',
    jumlahListing: '90',
  },
  {
    kodeBS: '3507040001027B',
    pencacah: 'Ridho',
    jumlahListing: '78',
  },
  {
    kodeBS: '3507040001013B',
    pencacah: 'Agus',
    jumlahListing: '86',
  },
  {
    kodeBS: '3507040001023B',
    pencacah: 'Agus',
    jumlahListing: '81',
  },
  {
    kodeBS: '3507040001025B',
    pencacah: 'Agus',
    jumlahListing: '90',
  },
  {
    kodeBS: '3507040001027B',
    pencacah: 'Agus',
    jumlahListing: '78',
  },
  {
    kodeBS: '3507040001013B',
    pencacah: 'Alif',
    jumlahListing: '86',
  },
  {
    kodeBS: '3507040001023B',
    pencacah: 'Alif',
    jumlahListing: '81',
  },
  {
    kodeBS: '3507040001025B',
    pencacah: 'Alif',
    jumlahListing: '90',
  },
  {
    kodeBS: '3507040001027B',
    pencacah: 'Alif',
    jumlahListing: '78',
  },
  {
    kodeBS: '3507040001027B',
    pencacah: 'Dipa',
    jumlahListing: '78',
  },
  {
    kodeBS: '3507040001027B',
    pencacah: 'Dipa',
    jumlahListing: '78',
  },
  {
    kodeBS: '3507040001027B',
    pencacah: 'Dipa',
    jumlahListing: '78',
  },
  {
    kodeBS: '3507040001027B',
    pencacah: 'Dipa',
    jumlahListing: '78',
  },
  {
    kodeBS: '3507040001027B',
    pencacah: 'Dipa',
    jumlahListing: '78',
  },
];

const TableBlokSensus = () => {
  const columns = [
    {
      accessorKey: 'kodeBS',
      header: 'Kode BS',
    },
    {
      accessorKey: 'pencacah',
      header: 'Pencacah',
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

export default TableBlokSensus;