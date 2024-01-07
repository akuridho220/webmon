import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BasicTable from '@/app/components/BasicTable';

const TableBlokSensus = () => {
  const [dataBs, setDataBs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3100/tes');
        const result = await response.json();
        console.log('Data fetched:', result);
        setDataBs(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      accessorKey: 'kode_bs',
      header: 'Kode BS',
    },
    {
      accessorKey: 'nama_pcl',
      header: 'Pencacah',
    },
    {
      accessorKey: 'jumlah_listing',
      header: 'Jumlah Terlisting',
    },
    {
      accessorKey: 'aksi',
      header: 'Aksi',
      cell: ({ row }) => (
        <Link href={`/riset/daftar/daftar-listing/detail-listing/${row.index}`}>
          <p className="flex items-center p-2 bg-accent-900 hover:bg-orange-700 text-white justify-center rounded-md">
            <span className="">Detail</span>
          </p>
        </Link>
      ),
    },
  ];

  return (
    <>
      {dataBs && dataBs.length > 0 ? <BasicTable columns={columns} data={dataBs} /> : <p className="text-white text-center h-screen flex items-center justify-center">No data available.</p>}
      <div className="w-[90%] bg-[#d93f57] bg-opacity-50"></div>
    </>
  );
};

export default TableBlokSensus;
