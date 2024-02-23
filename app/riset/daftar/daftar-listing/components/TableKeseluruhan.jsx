'use client';
import React, { useState } from 'react';

const { default: BasicTable } = require('@/app/components/BasicTable');

const TableKeseluruhan = ({ data }) => {
  const columns = [
    {
      accessorKey: 'kode_ruta',
      header: 'Kode Ruta',
    },
    {
      accessorKey: 'nim_pencacah',
      header: 'NIM PPL',
    },
    {
      accessorKey: 'nama',
      header: 'Nama PPL',
    },
    {
      accessorKey: 'id_bs',
      header: 'ID BS',
    },
    {
      accessorKey: 'no_bf',
      header: 'BF',
    },
    {
      accessorKey: 'no_bs',
      header: 'BS',
    },
    {
      accessorKey: 'no_segmen',
      header: 'No Segmen',
    },
    {
      accessorKey: 'no_urut_ruta',
      header: 'Nomor Urut RUta',
    },
    {
      accessorKey: 'nama_krt',
      header: 'Nama KRT',
    },
    {
      accessorKey: 'alamat',
      header: 'Alamat',
    },
    {
      accessorKey: 'jml_genz_anak',
      header: 'Jumlah Gen Z Anak',
    },
    {
      accessorKey: 'jml_genz_dewasa',
      header: 'Jumlah Gen Z Dewasa',
    },
    {
      accessorKey: 'tgl_listing',
      header: 'Tanggal Listing',
    },
    {
      accessorKey: 'tgl_periksa',
      header: 'Tanggal Periksa',
    },
    {
      accessorKey: 'Catatan BS',
      header: 'Catatan BS',
    },
    {
      accessorKey: 'Catatan Ruta',
      header: 'Catatan Ruta',
    },
  ];

  return (
    <>
      <BasicTable columns={columns} data={data} />
    </>
  );
};

export default TableKeseluruhan;
