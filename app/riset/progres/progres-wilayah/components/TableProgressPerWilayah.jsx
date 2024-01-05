"use client";
import React, { useState } from "react";
import DetailModal from "./Detailmodal";
import ProgressBar from "./ProgressBar";

const { default: BasicTable } = require("@/app/components/BasicTable");

const datas = [
  {
    namaKecamatan: "Kecamatan A",
    sampelSelesai: 10,
    jumlahSampel: 86,
  },
  {
    namaKecamatan: "Kecamatan B",
    sampelSelesai: 27,
    jumlahSampel: 81,
  },
  {
    namaKecamatan: "Kecamatan C",
    sampelSelesai: 77,
    jumlahSampel: 90,
  },
  {
    namaKecamatan: "Kecamatan D",
    sampelSelesai: 67,
    jumlahSampel: 78,
  },
  {
    namaKecamatan: "Kecamatan E",
    sampelSelesai: 54,
    jumlahSampel: 86,
  },
  {
    namaKecamatan: "Kecamatan F",
    sampelSelesai: 65,
    jumlahSampel: 81,
  },
  {
    namaKecamatan: "Kecamatan G",
    sampelSelesai: 77,
    jumlahSampel: 90,
  },
  {
    namaKecamatan: "Kecamatan H",
    sampelSelesai: 45,
    jumlahSampel: 78,
  },
  {
    namaKecamatan: "Kecamatan I",
    sampelSelesai: 22,
    jumlahSampel: 86,
  },
  {
    namaKecamatan: "Kecamatan J",
    sampelSelesai: 80,
    jumlahSampel: 81,
  },
  {
    namaKecamatan: "Kecamatan K",
    sampelSelesai: 25,
    jumlahSampel: 90,
  },
  {
    namaKecamatan: "Kecamatan L",
    sampelSelesai: 31,
    jumlahSampel: 78,
  },
];

const TableWilayah = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      accessorKey: "namaKecamatan",
      header: "Nama Kecamatan",
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
