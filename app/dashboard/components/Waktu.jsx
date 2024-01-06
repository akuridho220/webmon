'use client';
import React, { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import Box from './Box';

const Waktu = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      const dayEnd = new Date('10/25/2024');
      const timeToDate = dayEnd - today;

      const days = Math.floor(timeToDate / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeToDate % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeToDate % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000); // Update setiap 1 detik

    return () => clearInterval(interval); // Membersihkan interval saat komponen dibongkar
  }, []);

  const today = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const now = today.toLocaleDateString('id-ID', options);
  return (
    <div className="md:flex block justify-between bg-[#D9D9D9] rounded-md py-2 px-4 items-center shadow-md">
      <p className="font-sdr text-2xl">{now}</p>
      <div className="flex">
        <p className="text-primary-900 font-semibold">Tersisa</p>
        <Icon.ArrowRight className="text-primary-900" />
      </div>
      <div className=" max-md:w-full flex flex-wrap space-x-4">
        <Box text="Hari" angka={countdown.days} />
        <Box text="Jam" angka={countdown.hours} />
        <Box text="Menit" angka={countdown.minutes} />
        <Box text="Detik" angka={countdown.seconds} />
      </div>
    </div>
  );
};

export default Waktu;
