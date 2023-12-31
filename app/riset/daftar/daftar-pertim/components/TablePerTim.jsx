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
    render: (row) => (
      <button
        onClick={() => handleDetailButtonClick(row.original)}
        className="text-blue-500 hover:underline"
      >
        Detail
      </button>
    ),
  },
];

const TableTim = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleDetailButtonClick = (row) => {
    setSelectedRow(row);
    setIsOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <BasicTable data={datas} columns={columns} />
      {selectedRow && (
        <DetailModal
          isOpen={isOpen}
          onClose={handleCloseDetailModal}
          data={selectedRow}
        />
      )}
    </>
  );
};

export default TableTim;
