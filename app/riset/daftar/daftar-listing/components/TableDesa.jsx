'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const { default: BasicTable } = require('@/app/components/BasicTable');

const TableDesa = ({ data }) => {
  const columns = [
    {
      accessorKey: 'nama_desa',
      header: 'Nama Desa/Kelurahan/Banjar',
    },
    {
      accessorKey: 'jumlah_listing',
      header: 'Jumlah Terlisting',
    },
    {
      accessorKey: 'aksi',
      header: 'Aksi',
      cell: (data) => (
        <Link href={`/riset/daftar/daftar-listing/detail-listing/desa/${data.kode_kelurahan}`} className="flex items-center p-2 bg-accent-900 hover:bg-orange-700 text-white justify-center rounded-md">
          <span className="">Detail</span>
        </Link>
      ),
    },
  ];

  return (
    <>
      <BasicTable columns={columns} data={data} />
      <div className="w-[90%] bg-[#d93f57] bg-opacity-50"></div>
    </>
  );
};

export default TableDesa;
