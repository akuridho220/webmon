'use client';

import React, { useState, useEffect } from 'react';
import PasswordInput from './PasswordInput';
import Image from 'next/image';
import Swal from 'sweetalert2';
import authService from '../../service/authService';
import { useRouter } from 'next/navigation';

const Box = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await authService.IsAuthenticated();
        if (result !== false) {
          router.push('/dashboard');
        }
      } catch (error) {
        console.error(error); // Handle any errors
      }
    };
    fetchData();
  }, [router]); // Run once on component mount

  const handleLogin = async (e) => {
    e.preventDefault();

    const result = await authService.Login(email, password, remember);

    if (result === true) {
      Swal.fire({
        title: 'Success',
        text: 'Login Berhasil',
        icon: 'success',
      }).then(() => {
        setTimeout(() => {
          router.push('/dashboard');
        }, 1);
      });
    } else {
      console.log('Login failed', result);
      Swal.fire({
        title: 'Error!',
        text: result,
        icon: 'error',
      });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex-col justify-center sm:px-6 py-4 px-3 bg-white w-max rounded-2xl">
        <div className="sm:mx-auto sm:max-w-sm  bg-white flex flex-col justify-center items-center">
          <Image src="/img/logo/logo-icon.png" width={120} height={120} alt="logo" />
          <h2 className="flex mt-4 self-center text-center text-xl font-bold leading-9 tracking-tight text-gray-900">WEB MONITORING PKL D-IV 63</h2>
          <p className="font-light text-sm">POLSTAT STIS 2023/2024</p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm bg-white">
          <form className="space-y-6" onSubmit={handleLogin}>
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-primary-800">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <PasswordInput onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="flex mt-3 text-sm font-light text-slate-800 space-x-2">
                <input type="checkbox" name="remember" id="remember" onChange={() => setRemember(!remember)} />
                <label htmlFor="remember" className="flex items-center">
                  Remember me
                </label>
              </div>
            </div>

            <div className="">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  router.push('/forgot-password');
                }}
                className="flex w-full -mt-4 justify-center rounded-md bg-white text-primary-900 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:text-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Lupa password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Box;
