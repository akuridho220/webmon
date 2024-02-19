"use client";
import React, { useState } from "react";
import DetailModal from "./Detailmodal";
import ProgressBar from "./ProgressBar";

const { default: BasicTable } = require("@/app/components/BasicTable");

const datas = [
  /*{
    blokSensus: "",
    sampelSelesai: 0,
    jumlahSampel: 0,
  }*/
];

const TableWilayah = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      accessorKey: "blokSensus",
      header: "Blok Sensus",
    },
    {
      accessorKey: "sampelSelesai",
      header: "Sampel Selesai",
    },
    {
      accessorKey: "jumlahSampel",
      header: "Jumlah Sampel",
    },
    {
      accessorKey: "progres",
      header: "Progress",
      cell: ({ cell }) => (
        <>
        {Math.round(cell.row.original.sampelSelesai/cell.row.original.jumlahSampel * 100)}%
        <ProgressBar done={cell.row.original.sampelSelesai} max={cell.row.original.jumlahSampel} />
        </>
      ),
    },
    {
      accessorKey: "aksi",
      header: "Aksi",
      cell: ({ cell }) => (
        <button onClick={() => handleDetailButtonClick(cell.row.original)} className="bg-[#d93f57] text-white rounded-xl py-2 px-4 hover:bg-red-700 transition duration-300">
          Detail
        </button>
      ),
    },
  ];

  const handleDetailButtonClick = (row) => {
    setSelectedRow(row);
    setIsOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <BasicTable columns={columns} data={datas} />
      <div className="w-[90%] bg-[#d93f57] bg-opacity-50">{selectedRow && <DetailModal isOpen={isOpen} onClose={handleCloseDetailModal} data={selectedRow} />}</div>
    </>
  );
};

export default TableWilayah;
