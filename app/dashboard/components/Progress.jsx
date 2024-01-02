'use client';
import React, { use } from 'react';
import Image from 'next/image';
import ProgressBar from './ProgressBar';
import Link from 'next/link';

const Progress = ({ totalSampel, Selesai, persentase }) => {
  return (
    <>
      <div className="w-full mx-auto bg-primary-700 rounded-3xl rounded-bl-[4.5rem] shadow-md pb-4 overflow-hidden">
        <div className="bg-primary-900 rounded-lg  py-2 font-sdr text-3xl text-center text-white">Summary</div>
        <div className="font-semibold text-base flex w-[90%] mx-auto items-center overflow-hidden">
          <div className="w-[20%] flex items-center h-fit justify-end">
            <div className="w-full h-40 mt-4 relative bg-white shadow-lg  rounded-3xl flex items-center justify-center">
              <Image src="/img/maskot/2.png" fill={true} alt="maskot2" className="h-full" />
            </div>
          </div>
          <div className="w-[70%] ml-8 space-y-4">
            <div className="flex justify-between text-white items-center">
              <p>Progress pengisian</p>
              <p className="bg-accent-900 hover:bg-orange-700 rounded-lg shadow-md px-4 py-2">{persentase}</p>
              <p className="bg-secondary-700 hover:bg-secondary-900  rounded-lg shadow-md px-8 py-2">
                {Selesai} dari {totalSampel}
              </p>
            </div>
            <div className="w-full h-6 rounded-lg shadow-sm bg-white">
              <ProgressBar percentage={50} color="bg-accent-700" />
            </div>
            <div className="">
              <Link href="/">
                <p className="text-white px-6 py-2 rounded-lg bg-secondary-700 shadow-lg hover:bg-secondary-900 w-fit">Lihat detail</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
