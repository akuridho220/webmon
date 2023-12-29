import React from 'react';
import Image from 'next/image';

const Wellcome = ({ Nama }) => {
  return (
    <div className="bg-gradient-to-b from-[#951A2E] to-[#CA2128] rounded-md shadow-md flex py-4 pl-2">
      <Image src="/img/elements/barong.png" width={100} height={100} alt="Barong" />
      <div className="p-4">
        <h1 className="text-3xl font-sdr font-bold  text-white">Selamat datang, {Nama}</h1>
        <p className="text-white font-base">Halaman web monitoring PKL 63</p>
      </div>
    </div>
  );
};

export default Wellcome;
