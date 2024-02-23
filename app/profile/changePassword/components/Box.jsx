'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import authService from '@/app/service/authService';
import Swal from 'sweetalert2';
import axios from 'axios';
import * as Icon from 'react-feather';
import BreadCrumbs from '@/app/components/BreadCrumbs';

export default function Box() {
  const [passwordLama, setPasswordLama] = useState('');
  const [passwordBaru, setPasswordBaru] = useState('');
  const [passwordBaru2, setPasswordBaru2] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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

      <div className="bg-putih-200/80 rounded-b-md shadow-md flex-1 py-2 px-2 md:px-4">
        <div className="w-fit mx-8 justify-start text-primary-900">
          <BreadCrumbs />
        </div>
        <div className="py-4 flex justify-center">
          <Image src="/img/maskot/3.png" width={150} height={200} alt="foto" />
        </div>
        <form onSubmit={handleSubmit} className="block space-y-4 mx-5 text-sm md:text-base">
          <div className="w-full block md:flex md:justify-between space-y-2  md:space-x-4">
            <div className="md:w-1/4">
              <label htmlFor="passwordLama">Password lama</label>
            </div>
            <div className="mt-2 bg-red-800/60 rounded-md relative w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => setPasswordLama(e.target.value)}
                value={passwordLama}
                placeholder="Isikan Password lama"
                className=" placeholder-white border-gray-600 pl-2 text-white py-2 bg-transparent rounded-md md:w-[90%] w-full"
                name="passwordLama"
              />
              {showPassword ? (
                <Icon.Eye onClick={togglePasswordVisibility} className="absolute top-1/2 transform text-slate-100 -translate-y-1/2 right-4 cursor-pointer" />
              ) : (
                <Icon.EyeOff onClick={togglePasswordVisibility} className="absolute top-1/2 transform text-slate-100 -translate-y-1/2 right-4 cursor-pointer" />
              )}
            </div>
          </div>
          <div className="w-full block md:flex md:justify-between md:space-x-4">
            <div className="md:w-1/4">
              <label htmlFor="passwordBaru">Password Baru</label>
            </div>
            <div className="mt-2 bg-red-800/60 rounded-md relative w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => setPasswordBaru(e.target.value)}
                value={passwordBaru}
                placeholder="Isikan Password baru"
                className="placeholder-white border-gray-600 pl-2 text-white py-2 bg-transparent rounded-md md:w-[90%] w-full"
                name="passwordBaru"
              />
              {showPassword ? (
                <Icon.Eye onClick={togglePasswordVisibility} className="absolute top-1/2 transform text-slate-100 -translate-y-1/2 right-4 cursor-pointer" />
              ) : (
                <Icon.EyeOff onClick={togglePasswordVisibility} className="absolute top-1/2 transform text-slate-100 -translate-y-1/2 right-4 cursor-pointer" />
              )}
            </div>
          </div>
          <div className="w-full block md:flex md:justify-between md:space-x-4">
            <div className="md:w-1/4">
              <label htmlFor="passwordBaru2">Ulangi Password Baru</label>
            </div>
            <div className="mt-2 bg-red-800/60 rounded-md relative w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                onChange={(e) => setPasswordBaru2(e.target.value)}
                value={passwordBaru2}
                placeholder="Isikan Konfirmasi Password"
                className="placeholder-white border-gray-600 pl-2 text-white py-2 bg-transparent rounded-md md:w-[90%] w-full"
                name="passwordBaru2"
              />
              {showPassword ? (
                <Icon.Eye onClick={togglePasswordVisibility} className="absolute top-1/2 transform text-slate-100 -translate-y-1/2 right-4 cursor-pointer" />
              ) : (
                <Icon.EyeOff onClick={togglePasswordVisibility} className="absolute top-1/2 transform text-slate-100 -translate-y-1/2 right-4 cursor-pointer" />
              )}
            </div>
          </div>
          <div className="pt-6  w-full block md:flex justify-center">
            <button type="submit" className="bg-primary-800 hover:bg-primary-900 rounded-md 2 w-full py-2 text-white text-center">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
