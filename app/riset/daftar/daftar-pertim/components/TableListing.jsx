'use client';
import React, { useState } from 'react';
import DetailModal from './Detailmodal';

const { default: BasicTable } = require('@/app/components/BasicTable');
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const TableTim = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [dataPml, setDataPml] = useState(null);
  const [dataPpl, setDataPpl] = useState(null);

  const handleDetailButtonClick = async (row) => {
    try {
      // Get Data PML
      const pml = await fetch(`${apiURL}riset/daftar/tim/pmlbytim/${row.id_tim}`, { cache: 'no-store' });
      const resPml = await pml.json();
      setDataPml(resPml);

      // Get Data PPL
      const ppl = await fetch(`${apiURL}riset/daftar/tim/pplbytim/${row.id_tim}`, { cache: 'no-store' });
      const resPpl = await ppl.json();
      setDataPpl(resPpl);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
    setSelectedRow(row);
    setIsOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsOpen(false);
  };

  const columns = [
    // {
    //   accessorKey: 'id_bs',
    //   header: 'Blok Sensus',
    // },
    {
      accessorKey: 'nama_tim',
      header: 'Tim Pencacah',
    },
    {
      accessorKey: 'jumlah_listing',
      header: 'Jumlah Terlisting',
    },
    {
      accessorKey: 'aksi',
      header: 'Aksi',
      cell: ({ cell }) => (
        <button onClick={() => handleDetailButtonClick(cell.row.original)} className="bg-accent-900 hover:bg-accent-700 text-white rounded-xl py-2 px-4 transition duration-300">
          Detail
        </button>
      ),
    },
  ];

  return (
    <>
      <BasicTable columns={columns} data={data} />
      <div className="w-[90%] bg-[#d93f57] bg-opacity-50">{selectedRow && <DetailModal isOpen={isOpen} onClose={handleCloseDetailModal} dataPml={dataPml} dataPpl={dataPpl} />}</div>
    </>
  );
};

export default TableTim;
