"use client";
import React, { useState } from "react";
import DetailModal from "./Detailmodal";
import ProgressBar from "./ProgressBar";
import TableKecamatan from "@/app/riset/daftar/daftar-listing/components/TableKecamatan";

const { default: BasicTable } = require("@/app/components/BasicTable");

const datas = [
  {
    namaDesa: "Desa A",
    sampelSelesai: 10,
    jumlahSampel: 86,
  },
  {
    namaDesa: "Desa B",
    sampelSelesai: 27,
    jumlahSampel: 81,
  },
  {
    namaDesa: "Desa C",
    sampelSelesai: 77,
    jumlahSampel: 90,
  },
  {
    namaDesa: "Desa D",
    sampelSelesai: 67,
    jumlahSampel: 78,
  },
  {
    namaDesa: "Desa E",
    sampelSelesai: 54,
    jumlahSampel: 86,
  },
  {
    namaDesa: "Desa F",
    sampelSelesai: 65,
    jumlahSampel: 81,
  },
  {
    namaDesa: "Desa G",
    sampelSelesai: 77,
    jumlahSampel: 90,
  },
  {
    namaDesa: "Desa H",
    sampelSelesai: 45,
    jumlahSampel: 78,
  },
  {
    namaDesa: "Desa I",
    sampelSelesai: 22,
    jumlahSampel: 86,
  },
  {
    namaDesa: "Desa J",
    sampelSelesai: 80,
    jumlahSampel: 81,
  },
  {
    namaDesa: "Desa K",
    sampelSelesai: 25,
    jumlahSampel: 90,
  },
  {
    namaDesa: "Desa L",
    sampelSelesai: 31,
    jumlahSampel: 78,
  },
];

const TableKecamatan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      accessorKey: "namaDesa",
      header: "Nama Desa",
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

export default TableKecamatan;
