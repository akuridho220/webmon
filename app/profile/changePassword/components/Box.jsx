'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import authService from '@/app/service/authService';
import Swal from 'sweetalert2';

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

    // Continue with your form submission logic
    // ...
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
        <div className="py-4 flex justify-center">
          <Image src="/img/maskot/3.png" width={150} height={200} alt="foto" />
        </div>
        <form onSubmit={handleSubmit} className="block space-y-4 mx-5 text-sm md:text-base">
          <div className="w-full flex justify-between space-x-4">
            <label htmlFor="passwordLama">Password lama</label>
            <input
              type="text"
              onKeyUp={setPasswordLama(passwordLama)}
              value={passwordLama}
              placeholder="Isikan Password lama"
              className=" placeholder-white border-gray-600 pl-2 text-white py-2 bg-red-800/60 rounded-md w-3/5"
              name="passwordLama"
            />
          </div>
          <div className="w-full flex justify-between space-x-4">
            <label htmlFor="passwordBaru">Password Baru</label>
            <input type="text" placeholder="Isikan Password baru" className="placeholder-white border-gray-600 pl-2 text-white py-2 bg-red-800/60 rounded-md w-3/5" name="passwordBaru" />
          </div>
          <div className="w-full flex justify-between space-x-4">
            <label htmlFor="passwordBaru2">Ulangi Password Baru</label>
            <input type="text" placeholder="Isikan Konfirmasi Password" className="placeholder-white border-gray-600 pl-2 text-white py-2 bg-red-800/60 rounded-md w-3/5" name="passwordBaru2" />
          </div>
          <div className="pt-6 pb-4 w-full flex justify-center">
            <button type="submit" className="bg-secondary-900 hover:bg-secondary-700 rounded-md 2 w-1/2 py-2 text-white text-center">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
