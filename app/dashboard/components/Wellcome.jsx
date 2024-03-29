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

  function capitalizeFirstLetter(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }

  useEffect(() => {
    const getNama = async () => {
      const token = authService.GetAccesToken();

      if (token) {
        const user = await Promise.all([fetchData(`${apiURL}profile`, { headers: { Authorization: `Bearer ${token}` } })]);
        setNama(capitalizeFirstLetter(user[0].name));
      }
    };

    getNama();
  }, []);

  return (
    <div className="bg-white text-slate-900 rounded-md shadow-md flex h-fit py-4 pl-2">
      <div className="p-4">
        <h1 className="md:text-3xl text-2xl font-sdr font-bold ">Selamat datang, {nama}</h1>
        <p className=" md:text-base text-xs">Halaman web monitoring PKL 63</p>
      </div>
    </div>
  );
};

export default Wellcome;
