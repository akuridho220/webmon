// Contoh penggunaan di dalam komponen React atau halaman Next.js
import React from 'react';
import * as Icon from 'react-feather';
import Box from './Box';

const Waktu = () => {
  const today = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate = today.toLocaleDateString('id-ID', options);

  return (
    <div className="flex justify-between bg-[#D9D9D9] rounded-md py-2 px-4 items-center shadow-md">
      <p className="font-sdr text-2xl">{formattedDate}</p>
      <div className="flex">
        <p className="text-primary-900 font-semibold">Tersisa</p>
        <Icon.ArrowRight className="text-primary-900" />
      </div>
      <div className="flex space-x-4">
        <Box text="Hari" angka="10" />
        <Box text="Jam" angka="10" />
        <Box text="Menit" angka="10" />
        <Box text="Detik" angka="10" />
      </div>
    </div>
  );
};

export default Waktu;
