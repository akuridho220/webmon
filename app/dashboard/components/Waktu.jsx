'use client';
import React, { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import Box from './Box';

const Waktu = ({ mulai, selesai, kegiatan, StartDate, EndDate }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      const dayEnd = new Date(EndDate); //format bulan / tanggal / tahun
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
  }, [EndDate]);

  const dayStart = new Date(StartDate); //format bulan / tanggal / tahun
  const today = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const now = today.toLocaleDateString('id-ID', options);
  return (
    <div className=" bg-white w-full shadow-md rounded-md py-2 px-4 space-y-4 md:space-y-3 items-center ">
      <div className=" text-sm md:text-base md:flex block justify-between items-center space-y-4 md:space-y-0">
        <div className="  block md:flex md:space-x-8 space-y-4 md:space-y-0">
          <div className="text-primary-900 flex font-semibold space-x-2">
            <Icon.Calendar className="text-hitam-100" />
            <p>Mulai : </p>
            <p>{mulai}</p>
          </div>
          <div className="text-primary-900 flex font-semibold space-x-2">
            <Icon.Calendar className="text-hitam-100" />
            <p>Selesai: </p>
            <p>{selesai}</p>
          </div>
        </div>
        <div className="flex justify-self-end ">
          <div className="flex w-full text-center md:w-fit font-semibold space-x-2 px-4 py-2 bg-primary-800 hover:bg-primary-900 text-white rounded-md">
            <p>Kegiatan: {kegiatan} </p>
          </div>
        </div>
      </div>
      <hr className="bg-slate-300 w-full h-[0.12rem] shadow-xl" />
      <div className="md:flex block justify-between items-center">
        <p className="font-sdr text-2xl text-center md:text-start">{now}</p>
        {countdown.days === 0 ? (
          <p className="text-sm md:text-base text-slate-100 px-6 py-2 rounded-md font-semibold text-center bg-primary-800 hover:bg-primary-900">Periode Kegiatan Telah Selesai</p>
        ) : today >= dayStart ? (
          <div className="flex justify-center md:justify-start">
            <p className="text-primary-900 font-semibold">Tersisa</p>
            <Icon.ArrowRight className="text-primary-900 hidden md:block" />
            <Icon.ArrowDown className="text-primary-900 block md:hidden" />
          </div>
        ) : (
          <p className="text-sm md:text-base text-slate-100 px-6 py-2 rounded-md font-semibold text-center bg-primary-800 hover:bg-primary-900">Periode Kegiatan Belum dimulai</p>
        )}
        {countdown.days > 0 && today >= dayStart && (
          <div className="max-md:w-full flex flex-wrap space-x-4 md:justify-start justify-center items-center">
            <Box text="Hari" angka={countdown.days} />
            <Box text="Jam" angka={countdown.hours} />
            <Box text="Menit" angka={countdown.minutes} />
            <Box text="Detik" angka={countdown.seconds} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Waktu;
