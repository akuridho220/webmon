'use client';
import React, { use } from 'react';
import Image from 'next/image';
import ProgressBar from './ProgressBar';
import Link from 'next/link';

const Progress = ({ totalSampel, Selesai, persentase }) => {
  return (
    <>
      <div className="w-full mx-auto bg-primary-700 rounded-3xl sm:rounded-br-[4.5rem] shadow-md pb-4 overflow-hidden">
        <div className="bg-primary-900 rounded-lg  py-2 font-sdr md:text-3xl text-2xl text-center text-white">Progress Pengisian Kuesioner</div>
        <div className="font-semibold text-base flex w-[90%] mx-auto items-center overflow-hidden">
          <div className="w-[20%] flex items-center h-fit justify-end">
            <div className="w-full h-40 mt-4 relative sm:bg-white sm:shadow-lg  rounded-3xl flex items-center justify-center">
              <Image src="/img/maskot/2.png" fill={true} alt="maskot2" className="h-full" />
            </div>
          </div>
          <div className="w-[70%] ml-8 space-y-4">
            <div className="flex justify-between text-white items-center lg:text-lg md:text-base text-sm mt-3 md:mt-0">
              <p>Progress pengisian</p>
              <div className="md:flex md:space-x-4 md:space-y-0 space-y-4">
                <p className="bg-accent-900 hover:bg-orange-700 rounded-lg shadow-md px-4 py-2">{persentase}</p>
                <p className="bg-secondary-700 hover:bg-secondary-900  rounded-lg shadow-md px-8 py-2">
                  {Selesai} dari {totalSampel}
                </p>
              </div>
            </div>
            <div className="w-full h-6 rounded-lg shadow-sm bg-white md:text-base text-sm relative">
              <ProgressBar percentage={28} color="bg-accent-700" />
            </div>
            <div className="">
              <Link href="/riset/progres/progres-wilayah">
                <p className="text-white px-6 py-2 rounded-lg bg-secondary-700 shadow-lg hover:bg-secondary-900 w-fit md:text-lg text-sm">Lihat detail</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
