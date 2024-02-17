'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';
import Axios from 'axios';
import { useSearchParams, useRouter } from 'next/navigation';
import * as Icon from 'react-feather';

const Box = () => {
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const authServer = process.env.NEXT_PUBLIC_AUTHSERVER_URL;
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const router = useRouter();
  const CheckToken = async () => {
    const response = await Axios.post(`${authServer}verifyResetToken`, {
      token: token,
    });
    if (response.data == 'Token tidak valid') {
      Swal.fire({
        title: 'Error!',
        text: response.data,
        icon: 'error',
      })
        .then(() => {
          setTimeout(() => {
            router.push('/login');
          }, 1);
          return;
        })
        .catch((error) => {
          console.error('Error handling:', error);
          return;
        });
    }
  };
  CheckToken();
  const handleReset = async (e) => {
    e.preventDefault();
    const thisToken = token;
    const thisPassword = password;
    const thisConPassword = conPassword;

    if (thisPassword !== thisConPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Password dan konfirmasi password tidak sama',
        icon: 'error',
      });
      return;
    }
    try {
      const response = await Axios.put(`${authServer}resetPassword`, {
        token: thisToken,
        password: thisPassword,
      });

      if (response.data == 'Password berhasil diubah') {
        Swal.fire({
          title: 'Success',
          text: 'Password berhasil diubah',
          icon: 'success',
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     router.push('/login');
        //   }
        // });
        });
        router.push('/login');
      } else {
        console.error('Error:', response.data);
        Swal.fire({
          title: 'Error!',
          text: response.data,
          icon: 'error',
        });
        return;
      }
    } catch (error) {
      console.error('Error calling reset-password API:', error);
    }
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex-col justify-center sm:px-6 py-4 px-3 bg-white w-max rounded-2xl">
        <div className="sm:mx-auto sm:max-w-sm  bg-white flex flex-col justify-center items-center">
          <div className="text-white w-full rounded-md bg-primary-900 justify-center flex items-center">
            <h1 className="flex mt-4 self-center text-center text-xl font-bold leading-9 tracking-tight ">RESET PASSWORD</h1>
          </div>
          <Image src="/img/logo/logo-icon.png" width={120} height={120} alt="logo" />
          <h2 className="flex mt-4 self-center text-center text-xl font-bold leading-9 tracking-tight text-gray-900">WEB MONITORING PKL D-IV 63</h2>
          <p className="font-light text-sm">POLSTAT STIS 2023/2024</p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm bg-white">
          <form className="space-y-6" onSubmit={handleReset}>
            <div className="">
              <label htmlFor="password">
                <span className="block text-sm font-medium leading-6 text-primary-800">Password</span>
              </label>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
                {showPassword ? (
                  <Icon.Eye onClick={toggleShowPassword} className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer" />
                ) : (
                  <Icon.EyeOff onClick={toggleShowPassword} className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer" />
                )}
              </div>
            </div>
            <div className="">
              <label htmlFor="conPassword">
                <span className="block text-sm font-medium leading-6 text-primary-800">Konfirmasi Password</span>
              </label>
              <div className="mt-2 relative">
                <input
                  id="conPassword"
                  name="conPassword"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={conPassword}
                  onChange={(e) => setConPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                />
                {showPassword ? (
                  <Icon.Eye onClick={toggleShowPassword} className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer" />
                ) : (
                  <Icon.EyeOff onClick={toggleShowPassword} className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer" />
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ubah Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Box;
