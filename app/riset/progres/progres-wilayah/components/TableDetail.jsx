"use client";
import React, { useState } from "react";
import DetailModal from "./Detailmodal";
import ProgressBar from "./ProgressBar";

const { default: BasicTable } = require("@/app/components/BasicTable");
const TableDetail = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
  
    const columns = [
      {
        accessorKey: "rumahTangga",
        header: "Kode Rumah Tangga",
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
        accessorKey: "status",
        header: "Status",
      },
    ];
  
    return (
      <>
        <BasicTable columns={columns} data={datas} />
        <div className="w-[90%] bg-[#d93f57] bg-opacity-50"></div>
      </>
    );
  };
  
  export default TableDetail;
  