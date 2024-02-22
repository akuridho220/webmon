'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';
import Axios from 'axios';

const Box = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State untuk mengontrol loading

  const authServer = process.env.NEXT_PUBLIC_AUTHSERVER_URL;

  const handleForgot = async (e) => {
    e.preventDefault();
    const thisemail = email;
    setIsLoading(true); // Set loading menjadi true saat permintaan dikirim
    try {
      const response = await Axios.post(`${authServer}forgotPassword`, {
        email: thisemail,
      }).catch(function (error) {
        if (error.response) {
          Swal.fire({
            title: 'Error',
            text: 'Email tidak terdaftar dalam database / Server sedang error',
            icon: 'error',
          });
          return null;
        }
      });

      setIsLoading(false); // Set loading menjadi false saat respons diterima

      if (response.data.message == 'Password reset email sent successfully.') {
        Swal.fire({
          title: 'Success',
          text: 'Email reset password berhasil terkirim',
          icon: 'success',
        });
      } else {
        console.error('Error:', response.data.message);
        Swal.fire({
          title: 'Error!',
          text: response.data.message,
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Error calling reset-password API:', error);
      setIsLoading(false); // Set loading menjadi false jika ada kesalahan
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex-col justify-center sm:px-6 py-4 px-3 bg-white w-max rounded-2xl">
        <div className="sm:mx-auto sm:max-w-sm  bg-white flex flex-col justify-center items-center">
          <div className="text-white w-full rounded-md bg-primary-900 justify-center flex items-center">
            <h1 className="flex mt-4 self-center text-center text-xl font-bold leading-9 tracking-tight ">LUPA PASSWORD</h1>
          </div>
          <Image src="/img/logo/logo-icon.png" width={120} height={120} alt="logo" />
          <h2 className="flex mt-4 self-center text-center text-xl font-bold leading-9 tracking-tight text-gray-900">WEB MONITORING PKL D-IV 63</h2>
          <p className="font-light text-sm">POLSTAT STIS 2023/2024</p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm bg-white">
          <form className="space-y-6" onSubmit={handleForgot}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-primary-800">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? 'Loading...' : 'Kirim Link Reset Password'} {/* Menampilkan loader jika isLoading true */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Box;
