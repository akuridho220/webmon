'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import authService from '@/app/service/authService';
import Swal from 'sweetalert2';
import axios from 'axios';
import BreadCrumbs from '@/app/components/BreadCrumbs';

export default function Box() {
  const [passwordLama, setPasswordLama] = useState('');
  const [passwordBaru, setPasswordBaru] = useState('');
  const [passwordBaru2, setPasswordBaru2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!passwordLama || !passwordBaru || !passwordBaru2) {
      Swal.fire({
        title: 'Error!',
        text: 'Silahkan isi semua kolom password',
        icon: 'error',
      });
      return;
    }

    // Check if the password confirmation matches the new password
    if (passwordBaru !== passwordBaru2) {
      Swal.fire({
        title: 'Error!',
        text: 'Konfirmasi Password tidak sesuai dengan Password Baru',
        icon: 'error',
      });
      return;
    }

    const token = authService.GetAccesToken();
    console.log(token);
    const data = {
      oldPassword: passwordLama,
      newPassword: passwordBaru,
    };
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    axios
      .put(`${apiURL}updatePassword`, data, { headers })
      .then((res) => {
        Swal.fire({
          title: 'Berhasil!',
          text: 'Password berhasil diubah',
          icon: 'success',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/login';
          }
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: 'Error!',
          text: err.response.data,
          icon: 'error',
        });
      });
  };
  return (
    <div className="flex flex-col h-full">
      <div className="bg-primary-900 rounded-t-md shadow-md py-4 flex">
        <div className="flex-1 pl-2 flex items-center justify-center">
          <Image src="/img/pattern/pattern2-crop.png" width={50} height={32} alt="patt2cr" className="h-full" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-3xl font-sdr font-bold text-white">Ganti Password</h1>
        </div>
        <div className="flex-1 pr-2 flex items-center justify-center">
          <Image src="/img/pattern/pattern2-crop.png" width={50} height={32} alt="patt2cr" className="h-full" />
        </div>
      </div>

      <div className="bg-putih-200/80 rounded-b-md shadow-md flex-1 py-4 px-2">
        <div className="w-fit mx-8 justify-start">
          <BreadCrumbs />
        </div>
        <div className="py-4 flex justify-center">
          <Image src="/img/maskot/3.png" width={150} height={200} alt="foto" />
        </div>
        <form onSubmit={handleSubmit} className="block space-y-4 mx-5 text-sm md:text-base">
          <div className="w-full block md:flex md:justify-between space-y-2  md:space-x-4">
            <div className="">
              <label htmlFor="passwordLama">Password lama</label>
            </div>
            <input
              type="text"
              onChange={(e) => setPasswordLama(e.target.value)}
              value={passwordLama}
              placeholder="Isikan Password lama"
              className=" placeholder-white border-gray-600 pl-2 text-white py-2 bg-red-800/60 rounded-md md:w-3/5 w-full"
              name="passwordLama"
            />
          </div>
          <div className="w-full block md:flex md:justify-between md:space-x-4">
            <div className="">
              <label htmlFor="passwordBaru">Password Baru</label>
            </div>
            <input
              type="text"
              onChange={(e) => setPasswordBaru(e.target.value)}
              value={passwordBaru}
              placeholder="Isikan Password baru"
              className="placeholder-white border-gray-600 pl-2 text-white py-2 bg-red-800/60 rounded-md md:w-3/5 w-full"
              name="passwordBaru"
            />
          </div>
          <div className="w-full block md:flex md:justify-between md:space-x-4">
            <div className="">
              <label htmlFor="passwordBaru2">Ulangi Password Baru</label>
            </div>
            <input
              type="text"
              onChange={(e) => setPasswordBaru2(e.target.value)}
              value={passwordBaru2}
              placeholder="Isikan Konfirmasi Password"
              className="placeholder-white border-gray-600 pl-2 text-white py-2 bg-red-800/60 rounded-md md:w-3/5 w-full"
              name="passwordBaru2"
            />
          </div>
          <div className="pt-6 pb-4 w-full block md:flex justify-center">
            <button type="submit" className="bg-primary-800 hover:bg-primary-900 rounded-md 2 w-full py-2 text-white text-center">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
