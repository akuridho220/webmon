"use client";
import React from "react";
import BasicTable from "@/app/components/BasicTable";
import { Button } from "@nextui-org/react";

const datas = [
    {
      noRuta: "3507040001013B",
      tim_pencacah: "001",
      status_cacah: 1,
      nama_krt: "Juan 1",
    },
    {
      noRuta: "3507040001023B",
      tim_pencacah: "001",
      status_cacah: 1,
      nama_krt: "Juan 2",
    },
    {
      noRuta: "3507040001025B",
      tim_pencacah: "101",
      status_cacah: 1,
      nama_krt: "Juan 3",
    },
    {
      noRuta: "3507040001027B",
      tim_pencacah: "101",
      status_cacah: 1,
      nama_krt: "Egi 1",
    },
    {
      noRuta: "3507040001013B",
      tim_pencacah: "102",
      status_cacah: 1,
      nama_krt: "Egi 2",
    },
    {
      noRuta: "3507040001023B",
      tim_pencacah: "102",
      status_cacah: 0,
      nama_krt: "Egi 3",
    },
    {
      noRuta: "3507040001025B",
      tim_pencacah: "102",
      status_cacah: 0,
      nama_krt: "Ridho 1",
    },
    {
      noRuta: "3507040001027B",
      tim_pencacah: "102",
      status_cacah: 1,
      nama_krt: "Ridho 2",
    },
    {
      noRuta: "3507040001013B",
      tim_pencacah: "103",
      status_cacah: 0,
      nama_krt: "Ridho 3",
    },
    {
      noRuta: "3507040001023B",
      tim_pencacah: "103",
      status_cacah: 1,
      nama_krt: "Alip 1",
    },
    {
      noRuta: "3507040001025B",
      tim_pencacah: "103",
      status_cacah: 1,
      nama_krt: "Alip 2",
    },
    {
      noRuta: "3507040001027B",
      tim_pencacah: "103",
      status_cacah: 0,
      nama_krt: "Alip 3",
    },
  ];

const TableDetailProgres = ({data}) => {
    const columns = [
        {
            accessorKey: "kode_ruta",
            header: "Nomor Rumah Tangga",
        },
        {
          accessorKey: "nim_pencacah",
          header: "NIM",
        },
        {
            accessorKey: "nama_pencacah",
            header: "Pencacah",
        },
        {
          accessorKey: "nama_krt",
          header: "Nama KRT",
        },
        {
          accessorKey: "status",
          header: "Status Cacah",
          cell: ({row}) => {
            return(
              <div>
                {row.original.status_cacah==2?
                  <Button isDisabled color="success" variant="flat">
                    Tercacah
                  </Button>:
                  <Button isDisabled color="danger" variant="flat">
                    Belum Tercacah
                  </Button>}
              </div>
            )
          }
        }
    ];
    return(
        <div>
            <BasicTable columns={columns} data={data} />
        </div>
    )
}

export default TableDetailProgres;