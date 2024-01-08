"use client";
import React, { useState } from "react";
import DetailModal from "./Detailmodal";

const { default: BasicTable } = require("@/app/components/BasicTable");

const TableTim = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    {
      accessorKey: "kode_bs",
      header: "Kode BS",
    },
    {
      accessorKey: "nama",
      header: "Pencacah",
    },
    {
      accessorKey: "jumlah_listing",
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
      <BasicTable columns={columns} data={data} />
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
