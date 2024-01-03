"use client";
import React, { useState } from "react";
import DetailModal from "./Detailmodal";
import ProgressBar from "./ProgressBar";

const { default: BasicTable } = require("@/app/components/BasicTable");

const datas = [
  {
    kodeBS: "3507040001013B",
    pencacah: "Ridho",
    sampelSelesai: 10,
    jumlahSampel: 86,
  },
  {
    kodeBS: "3507040001023B",
    pencacah: "Ridho",
    sampelSelesai: 27,
    jumlahSampel: 81,
  },
  {
    kodeBS: "3507040001025B",
    pencacah: "Ridho",
    sampelSelesai: 77,
    jumlahSampel: 90,
  },
  {
    kodeBS: "3507040001027B",
    pencacah: "Ridho",
    sampelSelesai: 67,
    jumlahSampel: 78,
  },
  {
    kodeBS: "3507040001013B",
    pencacah: "Agus",
    sampelSelesai: 54,
    jumlahSampel: 86,
  },
  {
    kodeBS: "3507040001023B",
    pencacah: "Agus",
    sampelSelesai: 65,
    jumlahSampel: 81,
  },
  {
    kodeBS: "3507040001025B",
    pencacah: "Agus",
    sampelSelesai: 77,
    jumlahSampel: 90,
  },
  {
    kodeBS: "3507040001027B",
    pencacah: "Agus",
    sampelSelesai: 45,
    jumlahSampel: 78,
  },
  {
    kodeBS: "3507040001013B",
    pencacah: "Alif",
    sampelSelesai: 22,
    jumlahSampel: 86,
  },
  {
    kodeBS: "3507040001023B",
    pencacah: "Alif",
    sampelSelesai: 80,
    jumlahSampel: 81,
  },
  {
    kodeBS: "3507040001025B",
    pencacah: "Alif",
    sampelSelesai: 25,
    jumlahSampel: 90,
  },
  {
    kodeBS: "3507040001027B",
    pencacah: "Alif",
    sampelSelesai: 31,
    jumlahSampel: 78,
  },
];

const TableTim = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      accessorKey: "kodeBS",
      header: "Kode BS",
    },
    {
      accessorKey: "pencacah",
      header: "Pencacah",
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

export default TableTim;
