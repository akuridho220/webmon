'use client';
import React from 'react';
import BasicTable from '@/app/components/BasicTable';
import { Button } from '@nextui-org/react';

const TableDetailProgres = ({ data }) => {
  const columns = [
    {
      accessorKey: 'kode_ruta',
      header: 'Nomor Rumah Tangga',
    },
    // {
    //   accessorKey: 'nim_pencacah',
    //   header: 'NIM Pencacah',
    // },
    // {
    //   accessorKey: 'nama_pencacah',
    //   header: 'Nama Pencacah',
    // },
    {
      accessorKey: 'nama_krt',
      header: 'Nama KRT',
    },
    {
      accessorKey: 'status',
      header: 'Status Cacah',
      cell: ({ row }) => {
        return (
          <div>
            {row.original.status == 2 ? (
              <button disabled className="text-green-900 bg-green-200/70 px-4 py-2 rounded-lg">
                Tercacah
              </button>
            ) : (
              <Button isDisabled color="danger" variant="flat">
                Belum Tercacah
              </Button>
            )}
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <BasicTable columns={columns} data={data} />
    </div>
  );
};

export default TableDetailProgres;
