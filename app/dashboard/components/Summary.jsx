'use client';
import React, { use } from 'react';
import Image from 'next/image';
import ProgressBar from './ProgressBar';

const Summary = ({ totalListing, totalEligible, totalSampelEligible }) => {
  return (
    <>
      <div className="w-full mx-auto bg-primary-700 rounded-3xl sm:rounded-bl-[4.5rem] shadow-md pb-4 overflow-hidden">
        <div className="bg-primary-900 rounded-lg  py-2 font-sdr md:text-3xl text-2xl text-center text-white">Summary</div>
        <div className="font-semibold text-base flex w-[90%] mx-auto items-center overflow-hidden">
          <div className="w-[80%] ">
            <div className="flex justify-between w-full text-white md:text-lg text-sm px-4 py-2">
              <div className="w-[40%]">
                <p>Total Listing</p>
              </div>
              <div className="w-[60%] bg-accent-900 h-fit py-1 flex rounded-2xl justify-center">
                <p className="text-white font-semibold">{totalListing}</p>
              </div>
            </div>
            <div className="flex justify-between w-full text-white md:text-lg text-sm px-4 py-2">
              <div className="w-[40%]">
                <p>Total Eligible</p>
              </div>
              <div className="w-[60%] bg-secondary-800 h-fit py-1 flex rounded-2xl justify-center">
                <p className="text-white font-semibold">{totalEligible}</p>
              </div>
            </div>
            <div className="flex justify-between w-full text-white md:text-lg text-sm px-4 py-2">
              <div className="w-[40%]">
                <p>Sampel Terpilih</p>
              </div>
              <div className="w-[60%] bg-primary-900 h-fit py-1 flex rounded-2xl justify-center">
                <p className="text-white font-semibold">{totalSampelEligible}</p>
              </div>
            </div>
          </div>
          <div className="w-[20%] flex items-center h-fit justify-end">
            <div className="w-full h-40 mt-4 relative sm:bg-white sm:shadow-lg rounded-3xl flex items-center justify-center">
              <Image src="/img/maskot/1.png" fill={true} alt="patt2cr" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
