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

const TableWilayah = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      accessorKey: "id_bs",
      header: "Blok Sensus",
    },
    {
      accessorKey: "jumlah_sampel_selesai",
      header: "Sampel Selesai",
    },
    {
      accessorKey: "jumlah_sampel",
      header: "Jumlah Sampel",
    },
    {
      accessorKey: "progres",
      header: "Progress",
      cell: ({ cell }) => (
        <>
        {Math.round(cell.row.original.jumlah_sampel_selesai/cell.row.original.jumlah_sampel * 100)}%
        <ProgressBar done={cell.row.original.jumlah_sampel_selesai} max={cell.row.original.jumlah_sampel} />
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
      <BasicTable columns={columns} data={data} />
      {/* <div className="w-[90%] bg-[#d93f57] bg-opacity-50">{selectedRow && <DetailModal isOpen={isOpen} onClose={handleCloseDetailModal} data={selectedRow} />}</div> */}
    </>
  );
};

export default TableWilayah;
