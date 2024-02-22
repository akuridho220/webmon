'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import authService from '../../service/authService';
import Link from 'next/link';

export default function Box() {
  const [name, setName] = useState(''); // Initialize with an empty string or default value
  const [jenis, setJenis] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await authService.IsAuthenticated();
        setName(result.name);
        setJenis(result.jenis);
        setJabatan(result.jabatan);
        setEmail(result.email);
      } catch (error) {
        console.error(error); // Handle any errors
      }
    };

    fetchData();
  }, []); // Run once on component mount

  return (
    <div className="my-4 w-[90%] space-y-4  shadow-lg">
      <div className="flex flex-col ">
        <div className="bg-primary-900/95 rounded-t-md shadow-md py-4 flex">
          <div className="flex-1 pl-2 flex items-center justify-center">
            <Image src="/img/pattern/pattern2-crop.png" width={45} height={32} alt="patt2cr" className="h-full" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <h1 className="md:text-3xl text-2xl font-sdr font-bold text-white">Profil Saya</h1>
          </div>
          <div className="flex-1 pr-2 flex items-center justify-center">
            <Image src="/img/pattern/pattern2-crop.png" width={45} height={32} alt="patt2cr" className="h-full" />
          </div>
        </div>

        <div className="bg-putih-200/80 rounded-b-md shadow-md flex-1 py-2 px-2 md:px-4">
          <div className="py-4 flex justify-center">
            <Image src="/img/maskot/1.png" width={150} height={200} alt="foto" />
          </div>
          <div className="flex justify-center mb-2">
            <h1 className="md:text-3xl text-2xl font-sdr font-bold text-black text-center">{name}</h1>
          </div>
          <div className="flex justify-center pb-10 md:text-base text-sm ">
            <div className="bg-accent-900 rounded-md py-1 inline-block px-2">
              <h1 className="text-white font-bold">
                {jenis} | {jabatan}
              </h1>
            </div>
          </div>
          <div className="mx-auto md:w-1/2 w-full md:space-y-3 space-y-2 ">
            <div className="flex w-full md:text-base text-sm">
              <div className="w-1/4 px-2 pb-2">
                <h1 className="text-black font-bold">Nama</h1>
              </div>
              <div className="px-2 pb-2">
                <h1 className="text-black font-base">{name}</h1>
              </div>
            </div>

            <div className="flex w-full md:text-base text-sm">
              <div className="w-1/4 px-2 pb-2">
                <h1 className="text-black font-bold">Status</h1>
              </div>
              <div className="px-2 pb-2">
                <h1 className="text-black font-base">{jenis}</h1>
              </div>
            </div>

            <div className="flex w-full md:text-base text-sm">
              <div className="w-1/4 px-2 pb-2">
                <h1 className="text-black font-bold">Email</h1>
              </div>
              <div className="px-2 pb-2">
                <h1 className="text-black font-base">{email}</h1>
              </div>
            </div>

            <div className="flex w-full md:text-base text-sm">
              <div className="w-1/4 px-2 pb-2">
                <h1 className="text-black font-bold">Jabatan</h1>
              </div>
              <div className="px-2 pb-2">
                <h1 className="text-black font-base">{jabatan}</h1>
              </div>
            </div>
          </div>

          <div className="mt-6 flex w-full md:text-lg text-sm">
            <Link href="/profile/changePassword" className="bg-primary-800 hover:bg-primary-900 text-white font-bold py-2 text-center w-full rounded">
              Ubah Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
