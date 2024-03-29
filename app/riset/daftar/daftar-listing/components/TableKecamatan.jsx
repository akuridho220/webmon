'use client';
import React from 'react';
import Link from 'next/link';

const { default: BasicTable } = require('@/app/components/BasicTable');

const TableKecamatan = ({ data }) => {
  const columns = [
    {
      accessorKey: 'nama_kec',
      header: 'Nama Kecamatan',
    },
    {
      accessorKey: 'jumlah_listing',
      header: 'Jumlah Terlisting',
    },
    {
      accessorKey: 'aksi',
      header: 'Aksi',
      cell: ({row}) => {
        const data = row.original;
        return(
          <Link href={{pathname:`/riset/daftar/daftar-listing/detail-listing/kec/${data.id_bs}`, query:{nama: `${data.nama_kec}`}}} className="flex items-center p-2 bg-accent-900 hover:bg-orange-700 text-white justify-center rounded-md">
            <span className="">Detail</span>
          </Link>
        )
      }
    },
  ];

  return (
    <>
      <BasicTable columns={columns} data={data} />
      <div className="w-[90%] bg-[#d93f57] bg-opacity-50"></div>
    </>
  );
};

export default TableKecamatan;
