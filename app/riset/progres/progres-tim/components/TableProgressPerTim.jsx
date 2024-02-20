"use client";
import React, { useState } from "react";
import DetailModal from "./Detailmodal";
import ProgressBar from "./ProgressBar";
import Link from "next/link";

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

const TableTim = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      accessorKey: "id_bs",
      header: "Kode BS",
    },
    {
      accessorKey: "nama_tim",
      header: "Tim Pencacah",
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
        // <button onClick={() => handleDetailButtonClick(cell.row.original)} className="bg-[#d93f57] text-white rounded-xl py-2 px-4 hover:bg-red-700 transition duration-300">
        //   Detail
        // </button>
        <Link href={`/riset/progres/progres-tim/detail/${cell.id_tim}`} className="flex items-center p-2 bg-accent-900 hover:bg-orange-700 text-white justify-center rounded-md">
            <span className="">Detail</span>
        </Link>
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

export default TableTim;
