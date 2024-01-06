"use client";
import React, { useState } from "react";
import DetailModal from "./Detailmodal";

const { default: BasicTable } = require("@/app/components/BasicTable");

const datas = [
  {
    kodeBS: "3507040001013B",
    pencacah: "Ridho",
    jumlahSampel: "10",
    jumlahListing: "86",
  },
  {
    kodeBS: "3507040001023B",
    pencacah: "Ridho",
    jumlahSampel: "10",
    jumlahListing: "81",
  },
  {
    kodeBS: "3507040001025B",
    pencacah: "Ridho",
    jumlahSampel: "10",
    jumlahListing: "90",
  },
  {
    kodeBS: "3507040001027B",
    pencacah: "Ridho",
    jumlahSampel: "10",
    jumlahListing: "78",
  },
  {
    kodeBS: "3507040001013B",
    pencacah: "Agus",
    jumlahSampel: "10",
    jumlahListing: "86",
  },
  {
    kodeBS: "3507040001023B",
    pencacah: "Agus",
    jumlahSampel: "10",
    jumlahListing: "81",
  },
  {
    kodeBS: "3507040001025B",
    pencacah: "Agus",
    jumlahSampel: "10",
    jumlahListing: "90",
  },
  {
    kodeBS: "3507040001027B",
    pencacah: "Agus",
    jumlahSampel: "10",
    jumlahListing: "78",
  },
  {
    kodeBS: "3507040001013B",
    pencacah: "Alif",
    jumlahSampel: "10",
    jumlahListing: "86",
  },
  {
    kodeBS: "3507040001023B",
    pencacah: "Alif",
    jumlahSampel: "10",
    jumlahListing: "81",
  },
  {
    kodeBS: "3507040001025B",
    pencacah: "Alif",
    jumlahSampel: "10",
    jumlahListing: "90",
  },
  {
    kodeBS: "3507040001027B",
    pencacah: "Alif",
    jumlahSampel: "10",
    jumlahListing: "78",
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
      accessorKey: "jumlahSampel",
      header: "Jumlah Sampel",
    },
    {
      accessorKey: "jumlahListing",
      header: "Jumlah Terlisting",
    },
    {
      accessorKey: "aksi",
      header: "Aksi",
      cell: ({ cell }) => (
        <button
          onClick={() => handleDetailButtonClick(cell.row.original)}
          className="bg-[#d93f57] text-white rounded-xl py-2 px-4 hover:bg-red-700 transition duration-300"
        >
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
      <div className="w-[90%] bg-[#d93f57] bg-opacity-50">
        {selectedRow && (
          <DetailModal
            isOpen={isOpen}
            onClose={handleCloseDetailModal}
            data={selectedRow}
          />
        )}
      </div>
    </>
  );
};

export default TableTim;
