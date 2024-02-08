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
      const dayEnd = new Date('01/26/2024'); //format bulan / tanggal / tahun
      const timeToDate = dayEnd - today;

      let days = Math.floor(timeToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeToDate % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeToDate % (1000 * 60)) / 1000);

      // Jika waktu habis
      if (days < 0) {
        days = 0;
      }
      if (hours < 0) {
        hours = 0;
      }
      if (minutes < 0) {
        minutes = 0;
      }
      if (seconds < 0) {
        seconds = 0;
      }

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
    <div className="md:flex block justify-between bg-[#D9D9D9] rounded-md py-2 px-4 space-y-4 md:space-y-0 items-center shadow-md">
      <p className="font-sdr text-2xl text-center md:text-start">{now}</p>
      {countdown.days === 0 ? (
        <p className="text-slate-100 px-6 py-2 rounded-md font-semibold text-center bg-primary-800 hover:bg-primary-900">Periode Kegiatan telah Selesai</p>
      ) : (
        <div className="flex justify-center md:justify-start">
          <p className="text-primary-900 font-semibold">Tersisa</p>
          <Icon.ArrowRight className="text-primary-900 hidden md:block" />
          <Icon.ArrowDown className="text-primary-900 block md:hidden" />
        </div>
      )}
      {countdown.days > 0 && (
        <div className="max-md:w-full flex flex-wrap space-x-4 md:justify-start justify-center items-center">
          <Box text="Hari" angka={countdown.days} />
          <Box text="Jam" angka={countdown.hours} />
          <Box text="Menit" angka={countdown.minutes} />
          <Box text="Detik" angka={countdown.seconds} />
        </div>
      )}
    </div>
  );
};

export default Waktu;
