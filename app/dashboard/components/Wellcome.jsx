'use client';
import React from 'react';
import Image from 'next/image';
import authService from '@/app/service/authService';
import { useEffect, useState } from 'react';

const apiURL = process.env.NEXT_PUBLIC_API_URL;

const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  return await response.json();
};

const Wellcome = () => {
  const [nama, setNama] = useState('');

  useEffect(() => {
    const getNama = async () => {
      const token = authService.GetAccesToken();

      if (token) {
        const user = await Promise.all([fetchData(`${apiURL}profile`, { headers: { Authorization: `Bearer ${token}` } })]);
        setNama(user[0].name);
      }
    };

    getNama();
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#951A2E] to-[#CA2128] rounded-md shadow-md flex h-fit py-4 pl-2">
      <div className="sm:w-1/5 w-1/2 h-28 flex justify-center items-center relative">
        <Image src="/img/elements/barong.png" fill={true} alt="Barong" />
      </div>
      <div className="p-4">
        <h1 className="md:text-3xl text-2xl font-sdr font-bold text-white">Selamat datang, {nama}</h1>
        <p className="text-white md:text-base text-xs">Halaman web monitoring PKL 63</p>
      </div>
    </div>
  );
};

export default Wellcome;
